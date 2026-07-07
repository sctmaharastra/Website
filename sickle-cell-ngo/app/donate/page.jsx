"use client";

import { useEffect, useRef, useState } from "react";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { Heart, ShieldCheck, Users } from "lucide-react";
import QRCode from "qrcode";
import { Share2, IndianRupee, Download } from "lucide-react";

const UPI_ID = "arunurade2-1@oksbi";
const PAYEE_NAME = "Sickle Cell Thalassemia Society Chandrapur";

export default function DonatePage() {
  const canvasRef = useRef(null);
  const [amount, setAmount] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");

  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    PAYEE_NAME,
  )}&am=${amount || ""}&cu=INR&tn=${encodeURIComponent(
    "Donation for Sickle Cell and Thalassemia Society",
  )}`;

  useEffect(() => {
    async function generateQR() {
      if (!canvasRef.current) return;

      await QRCode.toCanvas(canvasRef.current, upiUrl, {
        width: 280,
        margin: 2,
        errorCorrectionLevel: "H",
        color: {
          dark: "#7f1d1d",
          light: "#ffffff",
        },
      });

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const size = 58;
      const x = canvas.width / 2 - size / 2;
      const y = canvas.height / 2 - size / 2;

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, 16);
      ctx.fill();

      ctx.fillStyle = "#b91c1c";
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("❤", canvas.width / 2, canvas.height / 2 + 1);

      setQrDataUrl(canvas.toDataURL("image/png"));
    }

    generateQR();
  }, [upiUrl]);

  async function handleShare() {
    if (!qrDataUrl) return;

    const blob = await (await fetch(qrDataUrl)).blob();
    const file = new File([blob], "donation-qr.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "Donation QR",
        text: `Donate ₹${amount || "any amount"} to ${PAYEE_NAME}`,
        files: [file],
      });
    } else {
      await navigator.clipboard.writeText(upiUrl);
      alert("UPI payment link copied.");
    }
  }

  function downloadQR() {
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "donation-qr.png";
    link.click();
  }
  return (
    <>
      <PageHeader
        title="Donate Now"
        description="Your contribution supports awareness camps, screening programs, counseling sessions, education, & family support."
      />

      <section className="w-full overflow-x-hidden px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-white pt-8 pl-8 pr-8 pb-4 shadow-xl shadow-red-900/5 md:block hidden">
            <h2 className="mb-8 text-3xl font-black text-slate-950">
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
            <div className="py-5">
              <div className="relative mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-800 via-red-700 to-slate-950 p-10 text-white md:p-10">
                {/* Left Content */}
                <div className="relative z-20 max-w-[55%] lg:max-w-[58%]">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
                    Join Our Mission
                  </p>

                  <h2 className="text-3xl font-black md:text-5xl">
                    Contact Us
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-red-50">
                    Your support and contribution can help us organize health
                    camps, counseling sessions, screening drives, and education
                    programs for everyone.
                  </p>

                  <div className="mt-8">
                    <Button href="/contact" variant="secondary">
                      Contact Us
                    </Button>
                  </div>
                </div>

                <img
                  src="/child.png"
                  alt="Donation support"
                  className="absolute bottom-0 right-0  z-10 hidden h-[90%] object-contain lg:block"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-red-800 via-red-700 to-slate-950 p-6 text-white shadow-2xl shadow-red-900/25 sm:p-8">
            <div className="mb-6">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-50">
                <Heart size={16} />
                Secure Donation
              </p>

              <h2 className="text-3xl font-black">Donate With UPI QR</h2>

              <p className="mt-3 leading-7 text-red-50">
                Enter your donation amount and scan the generated QR code to
                support awareness, screening, counseling, and patient care.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <label className="mb-2 block text-sm font-bold text-red-50">
                Donation Amount
              </label>

              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-950">
                <IndianRupee className="text-red-700" size={22} />
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full bg-transparent text-lg font-bold outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="mt-6 rounded-[1.7rem] bg-white p-5 text-center shadow-xl">
              <canvas ref={canvasRef} className="mx-auto max-w-full" />
              <p className="mt-4 text-sm font-semibold text-slate-600">
                Scan this QR using any UPI app
              </p>

              {amount && (
                <p className="mt-1 text-2xl font-black text-red-700">
                  ₹{amount}
                </p>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-red-700 transition hover:bg-red-50"
              >
                <Share2 size={18} />
                Share QR
              </button>

              <button
                type="button"
                onClick={downloadQR}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20"
              >
                <Download size={18} />
                Download
              </button>
            </div>
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
