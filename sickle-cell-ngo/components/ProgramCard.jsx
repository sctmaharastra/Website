import { HeartHandshake } from "lucide-react";

export default function ProgramCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-red-100 bg-white p-7 shadow-xl shadow-red-900/5 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700">
        <HeartHandshake />
      </div>
      <h3 className="mb-3 text-xl font-black text-slate-950">{title}</h3>
      <p className="leading-7 text-slate-600">{description}</p>
    </div>
  );
}
