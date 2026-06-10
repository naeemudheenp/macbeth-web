import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Lazily-created Neon serverless SQL client. Reads DATABASE_URL at request
 * time (not module load) so `next build` can collect page data without the
 * secret present — Vercel injects it at runtime. The HTTP driver keeps this
 * serverless friendly: one round-trip per query, no pool to manage.
 */
let _sql: NeonQueryFunction<false, false> | null = null;

export function getSql(): NeonQueryFunction<false, false> {
  if (_sql) return _sql;
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
  }
  _sql = neon(connectionString);
  return _sql;
}

/** Creates the waitlist table if it doesn't exist yet. Idempotent. */
export async function ensureWaitlistTable() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS waitlist (
      id         SERIAL PRIMARY KEY,
      email      TEXT NOT NULL UNIQUE,
      source     TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
}
