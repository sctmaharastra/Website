export default function SectionTitle({ eyebrow, title, description, center }) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}


