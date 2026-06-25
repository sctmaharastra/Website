import PageHeader from "@/components/PageHeader";

export default function DiseasesPage() {
  return (
    <>
      <PageHeader
        title="Sickle Cell Disease & Thalassemia"
        description="Understanding genetic blood disorders is the first step toward prevention, early diagnosis, and better care."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <DiseaseBox
            title="What is Sickle Cell Disease?"
            text="Sickle Cell Disease is a genetic blood disorder in which red blood cells become sickle-shaped, causing pain, anemia, and other health complications. Early diagnosis and proper management can significantly improve quality of life."
            facts={[
              "Inherited genetic disorder",
              "Affects red blood cells",
              "Can cause severe pain episodes",
              "Requires regular medical care",
            ]}
          />

          <DiseaseBox
            title="What is Thalassemia?"
            text="Thalassemia is an inherited blood disorder that affects the body’s ability to produce healthy hemoglobin. Patients may require regular blood transfusions and ongoing medical care."
            facts={[
              "Genetic blood disorder",
              "Affects hemoglobin production",
              "Can be detected through screening",
              "Prevention through awareness and testing",
            ]}
            dark
          />
        </div>
      </section>
    </>
  );
}

function DiseaseBox({ title, text, facts, dark }) {
  return (
    <div
      className={`rounded-[2rem] p-8 shadow-xl ${
        dark ? "bg-slate-950 text-white" : "bg-white text-slate-950"
      }`}
    >
      <h2 className="mb-5 text-3xl font-black">{title}</h2>
      <p
        className={`mb-7 leading-8 ${dark ? "text-slate-200" : "text-slate-600"}`}
      >
        {text}
      </p>

      <h3 className="mb-4 text-xl font-black">Key Facts</h3>
      <ul className="space-y-3">
        {facts.map((fact) => (
          <li key={fact} className={dark ? "text-slate-200" : "text-slate-600"}>
            • {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
