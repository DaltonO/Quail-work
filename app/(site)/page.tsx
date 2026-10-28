import { SiteFooter } from "@/components/layout/SiteFooter";
import { AudiencePathways } from "@/components/home/AudiencePathways";
import { Availability } from "@/components/home/Availability";
import { ConnectedWorkspace } from "@/components/home/ConnectedWorkspace";
import { EmployerOpportunities } from "@/components/home/EmployerOpportunities";
import { FinalInvitation } from "@/components/home/FinalInvitation";
import { HomeHero } from "@/components/home/HomeHero";
import {
  AudiencePathwaysMobile,
  AvailabilityMobile,
  ConnectedWorkspaceMobile,
  EmployerOpportunitiesMobile,
  FinalInvitationMobile,
  HeroMobile,
  HowItWorksMobile,
  JobCoachingMobile,
  PartnerCollaborationMobile,
} from "@/components/home/HomeMobile";
import { HowItWorks } from "@/components/home/HowItWorks";
import { JobCoaching } from "@/components/home/JobCoaching";
import { PartnerCollaboration } from "@/components/home/PartnerCollaboration";
import { Responsive } from "@/components/ui/Responsive";

// Figma: "Quail Employment — Post-Hero Refinement" — Desktop (1:14874) and Mobile (1:15293).
export default function HomePage() {
  return (
    <>
      <main>
        <Responsive mobile={<HeroMobile />} desktop={<HomeHero />} />
        <Responsive mobile={<AudiencePathwaysMobile />} desktop={<AudiencePathways />} />
        <Responsive id="how-it-works" mobile={<HowItWorksMobile />} desktop={<HowItWorks />} />
        <Responsive id="services" mobile={<EmployerOpportunitiesMobile />} desktop={<EmployerOpportunities />} />
        <Responsive id="job-coaching" mobile={<JobCoachingMobile />} desktop={<JobCoaching />} />
        <Responsive mobile={<PartnerCollaborationMobile />} desktop={<PartnerCollaboration />} />
        <Responsive mobile={<ConnectedWorkspaceMobile />} desktop={<ConnectedWorkspace />} />
        <Responsive mobile={<AvailabilityMobile />} desktop={<Availability />} />
        <Responsive id="get-started" mobile={<FinalInvitationMobile />} desktop={<FinalInvitation />} />
      </main>
      <SiteFooter variant="home" />
    </>
  );
}
