import Button from "./Button";

export default function CTA() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-800 via-red-700 to-slate-950 p-10 text-white md:p-16">
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
              Join Our Mission
            </p>
            <h2 className="text-3xl font-black md:text-5xl">
              Help us create awareness, support families, & save lives.
            </h2>
            <p className="mt-5 max-w-2xl text-red-50">
              Your time, support, & contribution can help us organize health
              camps, counseling sessions, screening drives, & education
              programs.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <Button href="/donate" variant="secondary">
              Donate Now
            </Button>
            <Button href="/get-involved" variant="outline">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
