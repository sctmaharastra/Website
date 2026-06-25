import Button from "@/components/Button";
import CTA from "@/components/CTA";
import ProgramCard from "@/components/ProgramCard";
import SectionTitle from "@/components/SectionTitle";
import DiseaseHoverCard from "@/components/DiseaseHoverCard";
import StatCard from "@/components/StatCard";
import { programs, testimonials } from "@/data/siteData";
import {
  Activity,
  HeartPulse,
  Users,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fffaf3] px-5 py-22 md:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-800">
              Chandrapur, Maharashtra
            </p>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Sickle Cell & Thalassemia Society Of Chandrapur
            </h1>

            <p className="mt-6 text-2xl font-bold text-red-700">
              Creating Awareness, Supporting Families, Saving Lives.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We are dedicated to improving the lives of individuals and
              families affected by Sickle Cell Disease and Thalassemia through
              awareness, screening, counseling, education, and community
              support.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/donate">Donate Now</Button>
              <Button href="/get-involved" variant="secondary">
                Become a Volunteer
              </Button>
              <Button href="/contact" variant="dark">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white p-1 shadow-2xl shadow-red-900/10">
              <div className="h-[420px] w-full overflow-hidden rounded-[1.5rem]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/kbdugHWJWdA?autoplay=1&mute=1&loop=1&playlist=kbdugHWJWdA&controls=0&modestbranding=1&rel=0&playsinline=1"
                  title="YouTube video player"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="absolute -bottom-7 -left-20 rounded-3xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-red-100 p-3 text-red-700">
                  <HeartPulse />
                </div>
                <div>
                  <p className="font-black text-slate-950">Early Diagnosis</p>
                  <p className="text-sm text-slate-500">
                    Better quality of life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          <StatCard number="Awareness" label="Community Programmes" />
          <StatCard number="Screening" label="People & Families" />
          <StatCard number="Counseling" label="Family Guidance" />
          <StatCard number="Films" label="Short Film Production" />
        </div>
      </section> */}

      <section className="bg-white px-5 py-22">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="About Us"
            title="Working for prevention, care, dignity, and hope."
            description="The Society works closely with communities, healthcare professionals, educational institutions, and government agencies to promote prevention, early detection, and better quality of life."
            center
          />

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Awareness", Activity],
              ["Screening", Stethoscope],
              ["Counseling", Users],
              ["Advocacy", ShieldCheck],
            ].map(([label, Icon]) => (
              <div
                key={label}
                className="rounded-3xl bg-[#fffaf3] p-7 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                  <Icon />
                </div>
                <h3 className="font-black text-slate-950">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Diseases"
            title="Understanding inherited blood disorders"
            description="Awareness and testing are powerful tools for prevention, early diagnosis, and better care."
            center
          />

          <div className="grid gap-8 md:grid-cols-2">
            <DiseaseHoverCard
              title="Sickle Cell Disease"
              tag="Genetic Blood Disorder"
              description="A genetic blood disorder in which red blood cells become sickle-shaped, causing pain, anemia, and other health complications."
              hoverDescription="Early diagnosis and proper management can significantly improve quality of life for individuals affected by Sickle Cell Disease."
              points={[
                "Inherited genetic disorder",
                "Affects red blood cells",
                "Can cause severe pain episodes",
                "May lead to anemia and fatigue",
                "Requires regular medical care",
                "Awareness and screening help in prevention",
              ]}
              color="red"
            />

            <DiseaseHoverCard
              title="Thalassemia"
              tag="Inherited Hemoglobin Disorder"
              description="An inherited blood disorder that affects the body’s ability to produce healthy hemoglobin and may require regular medical care."
              hoverDescription="Thalassemia can be detected through screening, and prevention is possible through awareness, testing, and counseling."
              points={[
                "Genetic blood disorder",
                "Affects hemoglobin production",
                "Can be detected through screening",
                "May require regular blood transfusions",
                "Needs ongoing medical care",
                "Prevention through awareness and testing",
              ]}
              color="slate"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Programs"
            title="Community-focused support and awareness"
            center
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Testimonials" title="Voices from families" />

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((text) => (
              <blockquote
                key={text}
                className="rounded-[2rem] bg-white p-8 text-lg font-medium leading-8 text-slate-700 shadow-xl shadow-red-900/5"
              >
                “{text}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
