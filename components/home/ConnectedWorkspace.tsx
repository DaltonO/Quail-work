import Image from "next/image";
import { Clipboard, Handshake, MessagesSquare, RefreshCw, UserRound, type LucideIcon } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

type Node = { title: string; body: string; icon: LucideIcon; tile: string; position: string; width: string };

// Positions are offsets inside the 1280×420 "Connected hub scene".
const nodes: Node[] = [
  {
    title: "Your goals & choices",
    body: "Interests, strengths and the support that matters to you",
    icon: UserRound,
    tile: "bg-sand",
    position: "scene:top-[60px] scene:left-0",
    width: "scene:w-[310px]",
  },
  {
    title: "Work & preparation",
    body: "Real duties, schedule and workplace expectations",
    icon: Clipboard,
    tile: "bg-sage",
    position: "scene:top-[260px] scene:left-0",
    width: "scene:w-[310px]",
  },
  {
    title: "Selected support",
    body: "Provider coordination where approved and selected",
    icon: Handshake,
    tile: "bg-sage-2",
    position: "scene:top-[60px] scene:left-[1010px]",
    width: "scene:w-[270px]",
  },
  {
    title: "Progress & next steps",
    body: "Review, what's working and what comes next",
    icon: RefreshCw,
    tile: "bg-sand",
    position: "scene:top-[260px] scene:left-[1010px]",
    width: "scene:w-[270px]",
  },
];

// Figma: Keep your goals and support connected (white, 64/80 padding).
export function ConnectedWorkspace() {
  return (
    <Section bg="bg-white">
      <SectionIntro
        maxWidth={960}
        eyebrow="The connected employment workspace"
        eyebrowLeading="auto"
        heading="Keep your goals and support connected."
        description="Bring goals, work, selected support and progress into the next conversation—with people making the decisions."
      />

      <div className="relative flex flex-col gap-4 scene:block scene:h-[420px]">
        <Image
          src="/illustrations/hub-connections-left.svg"
          alt=""
          width={80}
          height={200}
          className="absolute top-[125px] left-[310px] hidden scene:block"
        />
        <Image
          src="/illustrations/hub-connections-right.svg"
          alt=""
          width={120}
          height={200}
          className="absolute top-[125px] left-[890px] hidden scene:block"
        />

        <div className="flex flex-col gap-[18px] rounded-3xl bg-ink p-6 shadow-hub sm:p-7 scene:absolute scene:top-[130px] scene:left-[390px] scene:w-[500px]">
          <div className="flex items-center gap-2.5">
            <Image src="/brand/quail-mark-white.png" alt="" width={26} height={26} className="rounded" />
            <span className="text-[22px] leading-[27px] font-medium text-white">Quail Employment Workspace</span>
          </div>
          <p className="text-[15px] leading-[1.5] text-mist">
            Goals, preparation, selected support and next steps. Shared context for every conversation.
          </p>
          <div className="flex flex-col gap-2.5 rule-t rule-white pt-4">
            <span className="inline-flex h-[29px] w-fit items-center gap-1.5 rounded-full border border-line bg-white px-2.5 text-xs leading-[1.4] font-medium text-ink">
              <Icon icon={MessagesSquare} size={13} stroke={1.7} />
              Shared context · Next conversation ready
            </span>
            <p className="text-[13px] leading-[1.5] text-mist">
              Participant choice remains central. Providers not automatically assigned.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 scene:contents">
          {nodes.map((node) => (
            <div
              key={node.title}
              className={`flex flex-col gap-2.5 rounded-[18px] border border-line bg-white p-5 shadow-node scene:absolute ${node.position} ${node.width}`}
            >
              <div className="flex gap-2.5">
                <IconTile icon={node.icon} size={32} iconSize={17} radius={9} bg={node.tile} stroke={1.7} />
                <span className="text-[15px] leading-[1.4] font-medium text-ink">{node.title}</span>
              </div>
              <p className="text-[13px] leading-[1.5] text-muted">{node.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs leading-[1.5] text-muted">
        Illustrative concept only. Connections represent shared context, not access to all information. Not a
        current product or a statement of service availability or approval.
      </p>
    </Section>
  );
}
