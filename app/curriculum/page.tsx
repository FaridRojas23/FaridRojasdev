
import dynamic from "next/dynamic";
import SectionWrapper from "@/components/SectionWrapper";

const CurriculumView = dynamic(() => import("@/components/CurriculumView"), {
  loading: () => (
    <div className="cv-loading" aria-busy="true">
      Cargando currículum…
    </div>
  ),
});

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
