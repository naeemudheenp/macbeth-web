import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

/** The terms of service (2026-11-26). A first version, to be reviewed before launch. */
export const metadata: Metadata = {
  title: "Terms — bckup",
  description: "The terms for using bckup, the Box and Studio.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="26 November 2026">
      <p>
        These terms cover your use of bckup: Studio (the website you sign in to), client galleries, camera transfer,
        the cloud copy and the bckup Box. By using bckup you agree to them. Our{" "}
        <Link href="/privacy">privacy page</Link> explains how we handle data.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>We set up your account for you. Keep your password to yourself; you are responsible for what is done with it.</li>
        <li>Tell us straight away at <a href="mailto:hello@bckup.net">hello@bckup.net</a> if you think someone else has used it.</li>
      </ul>

      <h2>Your photos are yours</h2>
      <ul>
        <li>
          You keep every right to your photos. You let us store, copy and show them only to run bckup for you: keeping
          them safe, showing them to you, and showing your galleries to the people you share them with.
        </li>
        <li>
          Upload only photos you have the right to, and share them only with people your clients have agreed to. If
          you turn on guest face search, you are responsible for having your client&apos;s agreement.
        </li>
        <li>Don&apos;t use bckup for anything illegal, or to store or share content that harms others.</li>
      </ul>

      <h2>Plans and payment</h2>
      <ul>
        <li>Your plan, price and renewal date are agreed with us and shown in Studio under Billing.</li>
        <li>
          If a renewal isn&apos;t paid by the end of its date, Studio stops working for your account until it is. Your
          Box, its drives and your published gallery links keep working, and nothing is deleted.
        </li>
        <li>Each account has a cloud allowance. When it is full, new uploads are kept on your Box only, or, on a cloud-only account, aren&apos;t accepted until there is room.</li>
      </ul>

      <h2>The bckup Box</h2>
      <ul>
        <li>The Box you buy is yours. The drives you plug into it are yours, and so is everything on them.</li>
        <li>
          Photos are stored as ordinary files. You can unplug a drive and open them on a computer at any time, with or
          without bckup.
        </li>
      </ul>

      <h2>Keeping more than one copy</h2>
      <p>
        bckup is built never to lose a photo: every upload is checked, and new and favourite photos are kept on two
        drives when you have two. But no system is perfect, and drives fail. Keep your memory cards until a shoot is
        safely in bckup, and for work you can&apos;t replace, keep another copy too.
      </p>

      <h2>Availability</h2>
      <p>
        We work to keep bckup running all the time, but we can&apos;t promise it will never be interrupted. Galleries
        and uploads may pause for maintenance or problems outside our control, such as internet outages.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent the law allows, we are not liable for indirect losses, such as lost business or profits. Our total
        liability for any claim is limited to the fees you paid us in the 12 months before it. Nothing here limits rights
        you have under Indian consumer law that can&apos;t be limited.
      </p>

      <h2>Ending</h2>
      <ul>
        <li>You can close your account at any time by writing to us. We delete your data as described on the privacy page.</li>
        <li>
          We may suspend or close an account that breaks these terms. Unless the law or a safety concern stops us, we
          will tell you first and give you time to download your photos.
        </li>
      </ul>

      <h2>Changes and law</h2>
      <p>
        If we change these terms, we will update this page and tell account holders by email before the change takes
        effect. These terms are governed by the laws of India.
      </p>
    </LegalPage>
  );
}
