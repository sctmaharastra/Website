export default function SectionTitle({ eyebrow, title, description, center }) {
  return (
    <div
      className={
        center
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-10 text-center md:text-left"
      }
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-700 sm:text-sm sm:tracking-[0.25em]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 hidden text-base leading-7 text-slate-600 sm:block md:mt-5 md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
