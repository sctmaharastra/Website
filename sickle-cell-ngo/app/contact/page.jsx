"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { Mail, MapPin, CheckCircle, XCircle } from "lucide-react";
import MyMap from "@/components/MapContainer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeDialog = () => {
    setDialogType("");
    setDialogMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      payload.append("access_key", "f6e91da1-0d26-4dcd-87e5-9c0ddeedeb7a");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);
      payload.append("subject", "New Contact Form Message from Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setDialogType("success");
        setDialogMessage(
          "Thank you for contacting us. We have received your message and will get back to you soon.",
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      } else {
        setDialogType("error");
        setDialogMessage(
          data.message || "Something went wrong. Please try again.",
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submit error:", error);

      setDialogType("error");
      setDialogMessage(
        "Network error. Please check your connection and try again.",
      );
      setIsSubmitting(false);
    }
  };

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
                <Mail className="shrink-0 text-red-700" />
                <div>
                  <p className="font-bold text-slate-950">Email</p>
                  <p className="break-words text-slate-600">
                    sicklecellsocietyofchanda@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="shrink-0 text-red-700" />
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
              className="mt-8 w-full justify-center gap-2 rounded-full bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-800"
            >
              Send Us Email
            </Button>

            <div className="bg-white rounded-lg shadow-md p-6 mt-5">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                Visit Us
              </h3>
              <MyMap />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-950/20"
          >
            <h2 className="mb-6 text-3xl font-black">Send a Message</h2>

            <div className="grid gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white/15"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white/15"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white/15"
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white/15"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {dialogType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-8 text-center shadow-2xl">
            <div
              className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${
                dialogType === "success" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {dialogType === "success" ? (
                <CheckCircle className="h-11 w-11 text-green-600" />
              ) : (
                <XCircle className="h-11 w-11 text-red-600" />
              )}
            </div>

            <h3 className="text-2xl font-black text-slate-950">
              {dialogType === "success"
                ? "Message Sent Successfully"
                : "Submission Failed"}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">{dialogMessage}</p>

            <button
              onClick={() => {
                if (dialogType === "success") {
                  window.location.href = "/";
                } else {
                  closeDialog();
                }
              }}
              className="mt-8 w-full rounded-full bg-red-700 py-4 font-bold text-white transition hover:bg-red-800"
            >
              {dialogType === "success" ? "Continue" : "Try Again"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
