import Button from "@/components/Button";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import ProgramCard from "@/components/ProgramCard";
import SectionTitle from "@/components/SectionTitle";
import GallerySection from "@/components/GallerySection";
import DiseaseHoverCard from "@/components/DiseaseHoverCard";
import StatCard from "@/components/StatCard";
import { programs, testimonials, ngos } from "@/data/siteData";
import {
  Activity,
  HeartPulse,
  Users,
  ShieldCheck,
  MapPin,
  ArrowRight,
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
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-800">
              <MapPin className="h-4 w-4" />
              Chandrapur, Maharashtra
            </p>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Sickle Cell & Thalassemia Society Of Chandrapur
            </h1>

            <p className="mt-6 text-2xl font-bold text-red-700">
              Creating Awareness, Supporting Families, Saving Lives.
            </p>

            <p className="mt-6 hidden max-w-2xl text-lg leading-8 text-slate-600 mb:block">
              We are dedicated to improving the lives of individuals & families
              affected by Sickle Cell Disease & Thalassemia through awareness,
              screening, counseling, education, & community support.
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

            <div className="absolute bottom-3 left-3 rounded-2xl bg-white p-3 shadow-xl sm:-bottom-7 sm:-left-6 sm:rounded-3xl sm:p-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-xl bg-red-100 p-2 text-red-700 sm:rounded-2xl sm:p-3">
                  <HeartPulse className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <div>
                  <p className="text-sm font-black text-slate-950 sm:text-base">
                    Early Diagnosis
                  </p>
                  <p className="text-xs text-slate-500 sm:text-sm">
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

      <section className="relative overflow-hidden bg-white px-5 py-12">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="About Us"
              title="Working for prevention, care, dignity, & hope."
              description="The Society works closely with communities, healthcare professionals, educational institutions, & government agencies to promote prevention, early detection, & better quality of life."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <InfoPoint
                icon={<HeartPulse />}
                title="Awareness"
                description="Educating people about symptoms, prevention"
              />

              <InfoPoint
                icon={<Stethoscope />}
                title="Screening"
                description="Helping families identify risks through timely blood testing."
              />

              <InfoPoint
                icon={<Users />}
                title="Family Support"
                description="Guiding patients & families with care & counseling."
              />

              <InfoPoint
                icon={<ShieldCheck />}
                title="Advocacy"
                description="Working for better rights, access, & healthcare support."
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-red-700/10 md:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full bg-amber-400/20 md:block" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-2xl shadow-red-900/10">
              <Image
                src="/hero2.png"
                alt="Awareness program by Sickle Cell & Thalassemia Society"
                width={600}
                height={560}
                className="h-[430px] w-full rounded-[2rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-10 left-7 rounded-3xl bg-white p-5 shadow-xl shadow-red-900/10">
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

      <section className="relative overflow-hidden px-5 py-12">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Diseases"
            title="Understanding inherited blood disorders"
            description="Awareness & testing are powerful tools for prevention, early diagnosis, & better care."
            center
          />

          <div className="grid gap-8 md:grid-cols-2">
            <DiseaseHoverCard
              title="Sickle Cell Disease"
              tag="Genetic Blood Disorder"
              description="A genetic blood disorder in which red blood cells become sickle-shaped, causing pain, anemia, & other health complications."
              hoverDescription="Early diagnosis & proper management can significantly improve quality of life for individuals affected by Sickle Cell Disease."
              points={[
                "Inherited genetic disorder",
                "Affects red blood cells",
                "Can cause severe pain episodes",
                "May lead to anemia & fatigue",
                "Requires regular medical care",
                "Awareness & screening help in prevention",
              ]}
              color="red"
            />

            <DiseaseHoverCard
              title="Thalassemia"
              tag="Inherited Hemoglobin Disorder"
              description="An inherited blood disorder that affects the body’s ability to produce healthy hemoglobin & may require regular medical care."
              hoverDescription="Thalassemia can be detected through screening, & prevention is possible through awareness, testing, & counseling."
              points={[
                "Genetic blood disorder",
                "Affects hemoglobin production",
                "Can be detected through screening",
                "May require regular blood transfusions",
                "Needs ongoing medical care",
                "Prevention through awareness & testing",
              ]}
              color="slate"
            />
          </div>
          <div className="mt-10 flex justify-center px-4 sm:mt-14">
            <Link
              href="/diseases"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-700/25 transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-xl hover:shadow-red-700/30 sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="text-center">
                Learn More About These Diseases
              </span>

              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white sm:h-9 sm:w-9">
                <ArrowRight
                  size={16}
                  className="transition-colors duration-300 group-hover:text-red-700 sm:h-[18px] sm:w-[18px]"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-12">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Gallery"
            title="Moments From Our Awareness Drives"
            description=" A glimpse of our community meetings, health awareness programs,
                  screening camps, counseling sessions, and outreach activities."
            center
          />
          <GallerySection />
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-12 sm:px-5 sm:py-20">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Programs"
            title="Community-focused support & awareness"
            center
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={
                  programs.length % 2 !== 0 && index === programs.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }
              >
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-5 sm:py-24">
        <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-red-100 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute -right-24 bottom-20 h-56 w-56 rounded-full bg-amber-100 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Network"
            title="NGOs Associated With Us"
            description="We collaborate with dedicated organizations working for
              healthcare, awareness, blood donation, patient support, &
              community welfare."
            center
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {ngos.map((ngo, index) => (
              <div
                key={ngo.name}
                className={`group relative overflow-hidden rounded-2xl border border-red-100 bg-[#fffaf3] p-3 shadow-lg shadow-red-900/5 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-red-900/10 sm:rounded-[2rem] sm:p-6 ${
                  ngos.length % 2 !== 0 && index === ngos.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-red-100 transition-all duration-300 group-hover:scale-150 sm:-right-10 sm:-top-10 sm:h-28 sm:w-28" />

                <div className="relative z-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-5 sm:text-left">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-md ring-1 ring-red-100 transition-all duration-300 group-hover:scale-105 sm:h-24 sm:w-24 sm:rounded-3xl sm:p-3">
                    <Image
                      src={ngo.image}
                      alt={ngo.name}
                      width={90}
                      height={90}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xs font-black leading-5 text-slate-950 sm:text-lg sm:leading-7">
                      {ngo.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="px-5 py-20">
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
      </section> */}

      <CTA />
    </>
  );
}

function InfoPoint({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-red-100 bg-white p-4 shadow-lg shadow-red-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50 hover:shadow-xl sm:min-h-[118px]">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white sm:h-12 sm:w-12">
          {icon}
        </div>

        <div>
          <p className="text-sm font-black text-slate-900 sm:text-base">
            {title}
          </p>

          <p className="mt-1 text-xs font-medium leading-5 text-slate-600 opacity-100 sm:mt-2 sm:max-h-0 sm:overflow-hidden sm:text-sm sm:leading-6 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:max-h-20 sm:group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
