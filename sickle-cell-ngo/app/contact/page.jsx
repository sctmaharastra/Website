import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Reach out to volunteer, donate, partner, or learn more about our awareness & screening programs."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-red-900/5">
            <h2 className="mb-6 text-3xl font-black text-slate-950">
              Sickle Cell & Thalassemia Society Of Chandrapur
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <Mail className="text-red-700" />
                <div>
                  <p className="font-bold text-slate-950">Email</p>
                  <p className="text-slate-600">
                    sicklecellsocietyofchanda@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-700" />
                <div>
                  <p className="font-bold text-slate-950">Address</p>
                  <p className="text-slate-600">
                    Chandrapur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <Button
              href="mailto:sicklecellsocietyofchanda@gmail.com"
              className="mt-8"
            >
              Send Email
            </Button>
          </div>

          <form className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <h2 className="mb-6 text-3xl font-black">Send a Message</h2>

            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="rounded-full bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-800"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
