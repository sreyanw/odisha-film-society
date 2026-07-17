import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon/ComingSoon";

export const metadata: Metadata = {
  title: "News | OISFF — Odisha International Short Film Festival",
  description:
    "Festival announcements, press releases, and updates from the Odisha International Short Film Festival.",
};

export default function News() {
  return (
    <ComingSoon
      eyebrow="Press & Updates"
      title="News"
      message="Festival announcements, jury reveals, screening schedules, and press releases will be published here as OISFF 2026 approaches. Sign up and we will let you know the moment the first story drops."
    />
  );
}
