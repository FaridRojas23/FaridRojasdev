
import CurriculumView from "@/components/CurriculumView";
import SectionWrapper from "@/components/SectionWrapper";

export default function CurriculumPage() {
  return (
    <main>
      <SectionWrapper>
        <h1 className="page-title">Currículum</h1>
      </SectionWrapper>
      <SectionWrapper delay={0.08}>
        <CurriculumView />
      </SectionWrapper>
    </main>
  );
}
