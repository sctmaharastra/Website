import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { ngos } from "@/data/siteData";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        title="Get Involved"
        description="Volunteer, donate, partner, and help us build a healthier and more aware society."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InvolveCard
            title="Become a Volunteer"
            text="Join our mission and help spread awareness in communities, schools, colleges, and families."
            button="Join as Volunteer"
            href="/contact"
          />

          <InvolveCard
            title="Donate"
            text="Your contribution helps us organize camps, awareness programs, and support affected families."
            button="Donate Now"
            href="/donate"
            highlight
          />

          <InvolveCard
            title="Partner With Us"
            text="Collaborate with us for healthcare initiatives, community outreach, and awareness campaigns."
            button="Contact Us"
            href="/contact"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-black text-slate-950">
            NGOs Associated With Us
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ngos.map((ngo) => (
              <div
                key={ngo}
                className="rounded-2xl border border-red-100 bg-[#fffaf3] p-5 font-bold text-slate-800"
              >
                {ngo}
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
