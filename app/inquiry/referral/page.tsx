import type { Metadata } from "next";
import { InquiryDialog } from "@/components/inquiry/InquiryDialog";
import { referralInquiry } from "@/lib/inquiries";

export const metadata: Metadata = { title: "Discuss a referral" };

// Figma: 1:16328 / 1:16332, confirmation 1:16336 / 1:16354.
export default function Page() {
  return <InquiryDialog config={referralInquiry} />;
}
