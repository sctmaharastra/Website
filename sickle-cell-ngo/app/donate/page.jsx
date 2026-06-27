import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { Heart, ShieldCheck, Users } from "lucide-react";

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Donate Now"
        description="Your contribution supports awareness camps, screening programs, counseling sessions, education, & family support."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-red-900/5">
            <h2 className="mb-6 text-3xl font-black text-slate-950">
              Why your donation matters
            </h2>

            <div className="grid gap-5">
              <DonationPoint
                icon={<Heart />}
                title="Support Families"
                text="Help affected families receive guidance, counseling, & emotional support."
              />
              <DonationPoint
                icon={<ShieldCheck />}
                title="Promote Prevention"
                text="Support screening & awareness programs that help prevent inherited blood disorders."
              />
              <DonationPoint
                icon={<Users />}
                title="Reach Communities"
                text="Enable camps, school programs, health talks, & community outreach activities."
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-red-800 p-8 text-white shadow-xl shadow-red-900/20">
            <h2 className="mb-4 text-3xl font-black">Donation Details</h2>
            <p className="mb-6 leading-8 text-red-50">
              Add your bank account, UPI ID, QR code, or payment gateway link
              here.
            </p>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-red-100">UPI ID</p>
              <p className="mt-1 text-xl font-black">@bank</p>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-6 text-center text-slate-950">
              <p className="font-bold">QR Code Placeholder</p>
              <p className="mt-2 text-sm text-slate-500">
                Place QR image in this box.
              </p>
            </div>

            <Button href="/contact" variant="secondary" className="mt-6 w-full">
              Contact for Donation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function DonationPoint({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-[#fffaf3] p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700">
        {icon}
      </div>
      <div>
        <h3 className="font-black text-slate-950">{title}</h3>
        <p className="mt-1 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}