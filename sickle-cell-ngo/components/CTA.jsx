import Button from "./Button";

export default function CTA() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-800 via-red-700 to-slate-950 p-8 text-white shadow-xl shadow-red-900/20 md:p-10">
          {/* Background */}
          <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-red-400/15 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" />

          {/* Left Content */}
          <div className="relative z-20 max-w-full lg:max-w-[58%]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
              Join Our Mission
            </p>

            <h2 className="text-3xl font-black md:text-5xl">
              Help us create awareness & save lives.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-red-50">
              Your support and contribution can help us organize health camps,
              counseling sessions, screening drives, and education programs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/donate" variant="secondary">
                Donate Now
              </Button>

              <Button href="/get-involved" variant="outline">
                Become a Volunteer
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="/child3.png"
            alt="Child"
            className="absolute bottom-0 right-1 z-10 hidden h-[130%] object-contain lg:block"
          />

          {/* Bottom Fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-red-900/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
