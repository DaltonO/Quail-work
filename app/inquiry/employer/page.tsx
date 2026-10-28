import type { Metadata } from "next";
import { InquiryDialog } from "@/components/inquiry/InquiryDialog";
import { employerInquiry } from "@/lib/inquiries";

export const metadata: Metadata = { title: "Discuss a work opportunity" };

// Figma: 1:2193 / 1:2119, confirmation 1:2100 / 1:2081.
export default function Page() {
  return <InquiryDialog config={employerInquiry} />;
}
