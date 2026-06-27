import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import {
  HeartPulse,
  Users,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Quote,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="A community-driven organization working for awareness, early diagnosis, counseling, dignity, & better healthcare access for families affected by Sickle Cell Disease & Thalassemia."
      />

      <section className="relative overflow-hidden px-5 py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title="Built with a vision to serve families & communities."
              description="The Sickle Cell & Thalassemia Society was established with a vision to create awareness about inherited blood disorders & support affected individuals & families."
            />

            <p className="text-lg leading-9 text-slate-600">
              We work closely with communities, healthcare professionals,
              educational institutions, & government agencies to promote
              prevention, early detection, & better quality of life. Through
              awareness drives, screening camps, counseling, health talks, &
              patient support, we aim to create a healthier & more informed
              society.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoPoint icon={<HeartPulse />} title="Awareness" />
              <InfoPoint icon={<Stethoscope />} title="Screening" />
              <InfoPoint icon={<Users />} title="Family Support" />
              <InfoPoint icon={<ShieldCheck />} title="Advocacy" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-red-700/10 md:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-amber-400/20 md:block" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-1 shadow-2xl shadow-red-900/10">
              <Image
                src="/hero2.png"
                alt="Awareness program by Sickle Cell & Thalassemia Society"
                width={600}
                height={560}
                className="h-[430px] w-full rounded-[2rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-12 left-7 rounded-3xl bg-white p-5 shadow-xl shadow-red-900/10">
              <p className="text-sm font-bold uppercase tracking-widest text-red-700">
                Our Purpose
              </p>
              <p className="mt-1 text-lg font-black text-slate-950">
                Awareness. Care. Hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -right-10 -top-10 h-full w-full rounded-[2.5rem] bg-red-100" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-1 shadow-2xl shadow-red-900/10">
              <Image
                src="/tribute.jpeg"
                alt="Late Padmashri Sampat Ramteke Sir"
                width={650}
                height={720}
                className="h-[500px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-800">
              <Sparkles size={18} />
              Tribute
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Late Padmashri Sampat Ramteke Sir
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Late Padmashri Sampat Ramteke Sir was a visionary social reformer
              & tireless advocate for individuals affected by Sickle Cell
              Disease & Thalassemia. His lifelong dedication transformed
              countless lives by bringing awareness, dignity, & hope to patients
              & their families.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-600">
              Through his relentless efforts, advocacy, & commitment to social
              justice, Sickle Cell patients gained recognition & important
              protections under the Rights of Persons with Disabilities Act,
              along with several other rights & welfare measures that improved
              their quality of life.
            </p>

            <div className="mt-8 rounded-[2rem] border-l-4 border-red-700 bg-red-50 p-6">
              <Quote className="mb-4 text-red-700" size={34} />
              <p className="text-xl font-bold leading-9 text-slate-900">
                His mission was not merely to fight a disease, but to restore
                hope, dignity, & equal opportunities for every life affected by
                Sickle Cell Disease & Thalassemia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-slate-950 px-5 py-24 text-white">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-red-800">
              <HeartPulse />
            </div>

            <h2 className="mb-4 text-3xl font-black">Our Vision</h2>

            <p className="text-lg leading-8 text-red-50">
              A society where every individual has access to awareness,
              screening, treatment support, & a life free from discrimination
              due to genetic blood disorders.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-2xl shadow-red-950/20">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700">
              <ShieldCheck />
            </div>

            <h2 className="mb-5 text-3xl font-black">Our Mission</h2>

            <ul className="space-y-4">
              {[
                "Create awareness about Sickle Cell Disease & Thalassemia.",
                "Promote screening & early diagnosis.",
                "Provide counseling & support to affected families.",
                "Organize health camps & educational programs.",
                "Advocate for better healthcare access.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-red-700"
                    size={20}
                  />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoPoint({ icon, title }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-red-100 bg-white p-4 shadow-lg shadow-red-900/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700">
        {icon}
      </div>
      <p className="font-black text-slate-900">{title}</p>
    </div>
  );
}
