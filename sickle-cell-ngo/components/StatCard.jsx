export default function StatCard({ number, label }) {
  return (
    <div className="rounded-3xl bg-white p-7 text-center shadow-xl shadow-red-900/5">
      <p className="text-4xl font-black text-red-700">{number}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
    </div>
  );
}
