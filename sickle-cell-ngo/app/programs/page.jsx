import PageHeader from "@/components/PageHeader";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/siteData";

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        description="We organize awareness, screening, counseling, health talks, and patient support programs for communities and families."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </section>
    </>
  );
}
