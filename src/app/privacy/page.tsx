import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

/**
 * The privacy policy (2026-11-26). Every statement here is checked against
 * what the code does; when the code changes, change this page. A first
 * version — to be reviewed by someone qualified in India's DPDP Act 2023.
 */
export const metadata: Metadata = {
  title: "Privacy — bckup",
  description: "What bckup stores, where, for how long, and who can see it.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy" updated="26 November 2026">
      <p>
        bckup keeps photographers&apos; photos safe and lets them share galleries with their clients. This page
        explains, in plain words, what we store, where, for how long and who can see it. If anything here is unclear,
        write to <a href="mailto:hello@bckup.net">hello@bckup.net</a>.
      </p>

      <h2>Who this covers</h2>
      <ul>
        <li>
          <strong>Photographers</strong> who have a bckup account.
        </li>
        <li>
          <strong>Their clients and guests</strong>, who open a gallery link a photographer has shared. Guests
          don&apos;t need an account.
        </li>
      </ul>
      <p>
        The photos belong to the photographer. For photos of their clients and guests, the photographer decides what
        is uploaded and shared, and we store and show it on their behalf.
      </p>

      <h2>What we store</h2>
      <ul>
        <li>
          <strong>Your account:</strong> your email address, a scrambled form of your password (we never see the
          password itself), and your plan and renewal dates. We don&apos;t take card payments on the website.
        </li>
        <li>
          <strong>Your photos and videos,</strong> with the names you uploaded them under, and the notes, albums and
          favourites you add.
        </li>
        <li>
          <strong>Client galleries:</strong> each gallery&apos;s title, date, your studio name, its list of photos,
          and the photos a client has starred.
        </li>
        <li>
          <strong>Cameras</strong> you connect: a name, a login for the camera, and when it last sent a photo.
        </li>
        <li>
          <strong>Technical records</strong> that keep the service running and secure: IP addresses, times, sizes and
          error codes. These are kept for 30 days. They don&apos;t include the names of your photos, albums, notes or
          searches.
        </li>
      </ul>

      <h2>Where your photos are kept</h2>
      <ul>
        <li>
          <strong>On your bckup Box,</strong> if you have one: on your own drive, at your home or studio. That is
          where every photo is kept for good.
        </li>
        <li>
          <strong>In the cloud copy:</strong> uploads are also kept in cloud storage we rent from Oracle, in its
          Mumbai, India region, up to your account&apos;s allowance. On an account with a Box, the least-viewed
          photos make room once your Box has them, and a photo nobody has opened for 60 days is removed from the
          cloud (never from your Box). On a cloud-only account, the cloud copy is the only copy.
        </li>
        <li>
          <strong>On the way:</strong> uploads pass through our upload server in Mumbai, which holds each file only
          until it is safely stored.
        </li>
      </ul>
      <p>
        Our account database and the Studio website are run by hosting providers who may process account details and
        gallery lists outside India. Photos themselves are kept in India.
      </p>

      <h2>Who can see your photos</h2>
      <ul>
        <li>You, signed in to Studio.</li>
        <li>
          Anyone you send a gallery link to, and anyone they forward it to. Links are long and random, and you can
          switch a gallery off or delete it at any time.
        </li>
        <li>
          <strong>Not our staff.</strong> We don&apos;t browse customers&apos; libraries. Our tools show counts, sizes
          and the health of your Box, not your photos or their names. If you ask us for help with a specific photo, we
          will ask you to share it with us.
        </li>
      </ul>
      <p>We don&apos;t sell your data, show you ads, or use your photos to train AI.</p>

      <h2>Finding your photos with a selfie</h2>
      <p>
        A photographer can let guests find their own photos in a gallery with a selfie. It is off unless the
        photographer turns it on, and each guest is asked before they search. The selfie is used for that one search
        and never saved. To find matches, our server turns each face in that gallery&apos;s photos into a set of
        numbers. We keep those numbers, not the photos, and delete them 2 days after the last search, or immediately
        if the photographer turns face search off or removes the gallery. We never use them to identify anyone by
        name, or compare faces across galleries or photographers.
      </p>

      <h2>How long we keep things</h2>
      <ul>
        <li>Photos stay until you remove them or close your account.</li>
        <li>Technical records: 30 days.</li>
        <li>Face numbers: 2 days after the last search, as above.</li>
        <li>
          When you close your account, we delete your photos, galleries and account details from our servers within
          30 days. Photos on your own Box are yours and stay there.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>
        You can ask us for a copy of the personal data we hold about you, to correct it, or to delete it. If you are
        in a photographer&apos;s gallery and want a photo of you removed, ask the photographer, or write to us and we
        will pass it on. Write to <a href="mailto:hello@bckup.net">hello@bckup.net</a>; we reply within 7 days. If
        you aren&apos;t satisfied with our answer, you can complain to the Data Protection Board of India.
      </p>

      <h2>Changes</h2>
      <p>
        If we change how we handle your data, we will update this page and tell account holders by email before the
        change takes effect.
      </p>
    </LegalPage>
  );
}
