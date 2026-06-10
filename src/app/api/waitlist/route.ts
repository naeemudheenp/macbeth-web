import { NextResponse } from "next/server";
import { getSql, ensureWaitlistTable } from "@/lib/db";

export const runtime = "nodejs";

// Basic, forgiving email shape check — real validation is the unique
// constraint + a confirmation email later.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String((body as { email?: unknown })?.email ?? "")
    .trim()
    .toLowerCase();
  const source = String((body as { source?: unknown })?.source ?? "site").slice(
    0,
    64,
  );

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await ensureWaitlistTable();
    const sql = getSql();
    const rows = await sql`
      INSERT INTO waitlist (email, source)
      VALUES (${email}, ${source})
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;

    const alreadyJoined = rows.length === 0;
    return NextResponse.json(
      {
        ok: true,
        alreadyJoined,
        message: alreadyJoined
          ? "You're already on the list — we'll be in touch."
          : "You're on the list. We'll write when Macbeth ships.",
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("waitlist insert failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
