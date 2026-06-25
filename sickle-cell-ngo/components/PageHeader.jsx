export default function PageHeader({ title, description }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-800 to-slate-950 px-5 py-24 text-white">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-amber-200">
          Sickle Cell & Thalassemia Society
        </p>

        <h1 className="text-4xl font-black tracking-tight md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-red-50">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
