import type { Metadata } from "next";
import { ParticipantInquiry } from "@/components/inquiry/ParticipantInquiry";

export const metadata: Metadata = { title: "Talk with Quail" };

// Figma: "Quail — Participant Inquiry — Prototype" (1:983), "— Error" (1:895), "— Confirmation" (1:970).
// The design is mobile-only (390); on wider screens the same column is centered at up to 600px.
export default function TalkWithQuailPage() {
  return <ParticipantInquiry />;
}
