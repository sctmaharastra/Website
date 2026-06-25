import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import { testimonials } from "@/data/siteData";

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        description="Through awareness, screening, counseling, and short film production, we continue to reach families and communities."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          <StatCard number="Awareness" label="Programmes" />
          <StatCard number="Screening" label="People & Families" />
          <StatCard number="Counseling" label="Families Supported" />
          <StatCard number="Short Films" label="Awareness Media" />
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Testimonials"
            title="Community voices"
            center
          />

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((text) => (
              <div
                key={text}
                className="rounded-[2rem] bg-[#fffaf3] p-8 text-lg leading-8 text-slate-700"
              >
                “{text}”
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
