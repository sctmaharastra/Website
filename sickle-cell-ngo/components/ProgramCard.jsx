import { HeartHandshake } from "lucide-react";

export default function ProgramCard({ title, description }) {
  return (
    <div className="group h-full rounded-2xl border border-red-100 bg-white p-4 shadow-lg shadow-red-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-2xl sm:rounded-3xl sm:p-7">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl">
        <HeartHandshake className="h-5 w-5 sm:h-7 sm:w-7" />
      </div>

      <h3 className="mb-2 text-sm font-black leading-tight text-slate-950 sm:mb-3 sm:text-xl">
        {title}
      </h3>

      <p className="text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}
