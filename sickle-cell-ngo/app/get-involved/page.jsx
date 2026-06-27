import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { ngos } from "@/data/siteData";
import Image from "next/image";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        title="Get Involved"
        description="Volunteer, donate, partner, & help us build a healthier & more aware society."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InvolveCard
            title="Become a Volunteer"
            text="Join our mission & help spread awareness in communities, schools, colleges, & families."
            button="Join as Volunteer"
            href="/contact"
          />

          <InvolveCard
            title="Donate"
            text="Your contribution helps us organize camps, awareness programs, & support affected families."
            button="Donate Now"
            href="/donate"
            highlight
          />

          <InvolveCard
            title="Partner With Us"
            text="Collaborate with us for healthcare initiatives, community outreach, & awareness campaigns."
            button="Contact Us"
            href="/contact"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-24">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-700">
              Our Network
            </p>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              NGOs Associated With Us
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We collaborate with dedicated organizations working for
              healthcare, awareness, blood donation, patient support, &
              community welfare.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ngos.map((ngo) => (
              <div
                key={ngo.name}
                className="group relative overflow-hidden rounded-[2rem] border border-red-100 bg-[#fffaf3] p-6 shadow-lg shadow-red-900/5 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-red-900/10"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-100 transition-all duration-300 group-hover:scale-150" />

                <div className="relative z-10 flex items-center gap-5">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white p-3 shadow-md ring-1 ring-red-100 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={ngo.image}
                      alt={ngo.name}
                      width={90}
                      height={90}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                      Associated NGO
                    </p>

                    <h3 className="text-lg font-black leading-7 text-slate-950">
                      {ngo.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InvolveCard({ title, text, button, href, highlight }) {
  return (
    <div
      className={`rounded-[2rem] p-8 shadow-xl ${
        highlight
          ? "bg-red-800 text-white shadow-red-900/20"
          : "bg-white text-slate-950 shadow-red-900/5"
      }`}
    >
      <h2 className="mb-4 text-2xl font-black">{title}</h2>
      <p
        className={`mb-7 leading-8 ${highlight ? "text-red-50" : "text-slate-600"}`}
      >
        {text}
      </p>
      <Button href={href} variant={highlight ? "secondary" : "primary"}>
        {button}
      </Button>
    </div>
  );
}
