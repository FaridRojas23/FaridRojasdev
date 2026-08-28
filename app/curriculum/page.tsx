
import CurriculumView from "@/components/CurriculumView";
import SectionWrapper from "@/components/SectionWrapper";

export default function CurriculumPage() {
  return (
    <main>
      <SectionWrapper>
        <h1 className="page-title">Currículum</h1>
      </SectionWrapper>
      <SectionWrapper delay={0.08}>
        <div className="page-shell page-shell--cv">
          <div className="page-shell-grid" aria-hidden="true" />
          <CurriculumView />
        </div>
      </SectionWrapper>
    </main>
  );
}
