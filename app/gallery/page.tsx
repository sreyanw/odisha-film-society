import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon/ComingSoon";

export const metadata: Metadata = {
  title: "Gallery | OISFF — Odisha International Short Film Festival",
  description:
    "Photographs and moments from the Odisha International Short Film Festival — screenings, workshops, and celebrations.",
};

export default function Gallery() {
  return (
    <ComingSoon
      eyebrow="Moments & Memories"
      title="Gallery"
      message="The festival's first frames are yet to be captured. Once events begin on 21 July 2026, this gallery will fill with screenings under the stars, workshop moments, and the celebration at Rabindra Mandap."
    />
  );
}
