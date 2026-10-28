import { SiteHeader } from "@/components/layout/SiteHeader";

// Marketing pages share the Main Quail header. The inquiry flow (/talk-with-quail) is standalone in Figma.
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
