import type { Metadata } from "next";
import { InquiryDialog } from "@/components/inquiry/InquiryDialog";
import { providerPartnershipInquiry } from "@/lib/inquiries";

export const metadata: Metadata = { title: "Discuss a provider partnership" };

// Figma: 1:16320 / 1:16324, confirmation 1:16336 / 1:16354.
export default function Page() {
  return <InquiryDialog config={providerPartnershipInquiry} />;
}
