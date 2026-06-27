import PageHeader from "@/components/PageHeader";
import DiseaseHoverCard from "@/components/DiseaseHoverCard";

export default function DiseasesPage() {
  return (
    <>
      <PageHeader
        title="Sickle Cell Disease & Thalassemia"
        description="Underst&ing genetic blood disorders is the first step toward prevention, early diagnosis, & better care."
      />

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <DiseaseHoverCard
            variant="full"
            title="Sickle Cell Disease"
            tag="Genetic Blood Disorder"
            description="Sickle Cell Disease is an inherited blood disorder that causes red blood cells to become sickle-shaped instead of round. These abnormal cells can block blood flow, leading to pain, anemia, infections, & other serious health complications."
            hoverDescription="Early diagnosis, regular medical care, & genetic counseling can greatly improve quality of life while helping families underst& the condition & reduce the risk of passing it on to future generations."
            points={[
              "Inherited genetic blood disorder",
              "Changes the shape of red blood cells",
              "May cause severe pain & anemia",
              "Can damage organs & increase infections",
              "Requires regular medical monitoring",
              "Awareness & carrier screening help in prevention",
            ]}
            color="red"
          />

          <DiseaseHoverCard
            variant="full"
            title="Thalassemia"
            tag="Inherited Hemoglobin Disorder"
            description="Thalassemia is an inherited blood disorder that affects the body's ability to produce healthy hemoglobin. Patients may require lifelong medical care, regular monitoring, & blood transfusions depending on the severity."
            hoverDescription="Early screening, genetic counseling, & timely medical intervention can significantly improve quality of life while helping families make informed healthcare & family planning decisions."
            points={[
              "Inherited genetic blood disorder",
              "Reduces healthy hemoglobin production",
              "May require regular blood transfusions",
              "Can cause anemia, fatigue, & weakness",
              "Detected through carrier screening & blood tests",
              "Preventable through awareness & counseling",
            ]}
            color="slate"
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
