import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EmployersHero } from "@/components/employers/EmployersHero";
import {
  EmployerInvitation,
  EmployerProcess,
  FundingAndNextSteps,
  ResponsibilitiesAndSupport,
  WhatQuailMakesEasier,
} from "@/components/employers/EmployerSections";
import { FaqSection } from "@/components/sections/FaqSection";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = { title: "For Employers" };

// Answers come from "Quail — Employer FAQ Answers — Desktop" (1:2036).
const faqs = [
  {
    question: "Who does Quail’s initial employment pathway serve?",
    answer:
      "Quail’s initial employment pathway serves adults with intellectual and developmental disabilities. Employers can discuss part-time, full-time or internship work.",
  },
  {
    question: "Can we discuss an existing part-time or full-time opening?",
    answer:
      "Yes. We can discuss an existing opening, including its tasks, schedule and supervision. A part-time or full-time opening does not automatically qualify for PIP funding; the applicable arrangement must be clarified individually.",
  },
  {
    question: "Do we need experience hosting someone through a program?",
    answer:
      "You do not need to arrive with a fully developed internship program. Start with the work your business needs done. Together, clarify tasks, supervision, support arrangements and applicable requirements before a start is confirmed.",
  },
  {
    question: "Who provides job coaching?",
    answer:
      "Coaching may be delivered by an approved partner or Quail Job Coaching where available and authorized. Quail Job Coaching is a proposed direct service, not a requirement for working with Quail. Support is agreed individually; not every participant needs a coach.",
  },
  {
    question: "What costs and responsibilities would we have?",
    answer:
      "Your workplace provides meaningful tasks, a dependable supervisor, instructions and feedback, and timely hours approval where required. Applicable costs, support responsibilities and any separately agreed charges are explained before you commit. Approved wages and related payroll costs may be program-funded only during an authorized PIP placement.",
  },
  {
    question: "Can we offer an ongoing job?",
    answer:
      "Before the placement ends, discuss the participant’s goals, your business’s needs, and whether ongoing employment is a suitable next step. Ongoing employment is not guaranteed.",
  },
];

// Figma: "Quail — For Employers — Desktop" (node 1:2533).
export default function EmployersPage() {
  return (
    <>
      <main>
        <EmployersHero />
        <WhatQuailMakesEasier />
        <EmployerProcess />
        <ResponsibilitiesAndSupport />
        <FundingAndNextSteps />
        <FaqSection description="Start with the opportunity. Clarify the arrangement together.">
          <Accordion items={faqs} />
        </FaqSection>
        <EmployerInvitation />
      </main>
      <SiteFooter />
    </>
  );
}
