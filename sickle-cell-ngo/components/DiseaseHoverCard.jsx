import { CheckCircle2, Dna, HeartPulse } from "lucide-react";

export default function DiseaseHoverCard({
  title,
  tag,
  description,
  hoverDescription,
  points,
  color = "red",
  variant = "preview", // preview for home, full for /diseases
}) {
  const isRed = color === "red";
  const isFull = variant === "full";

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
        isRed
          ? "bg-gradient-to-br from-red-800 via-red-700 to-red-950 shadow-red-900/20"
          : "bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 shadow-slate-900/20"
      }`}
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative z-10">
        <div
          className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl ${
            isRed ? "bg-white text-red-700" : "bg-red-100 text-red-800"
          }`}
        >
          {isRed ? <HeartPulse size={34} /> : <Dna size={34} />}
        </div>

        <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-50">
          {tag}
        </p>

        <h3 className="mb-4 text-3xl font-black tracking-tight">{title}</h3>

        <p className="max-w-xl leading-8 text-red-50/90">{description}</p>

        {isFull && (
          <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
            <p className="mb-5 leading-8 text-white/90">{hoverDescription}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-amber-200"
                  />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
