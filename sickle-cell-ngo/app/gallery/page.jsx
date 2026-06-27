import GallerySection from "@/components/GallerySection";
import PageHeader from "@/components/PageHeader";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="Photos from our awareness drives, community meetings, camps, and outreach activities."
      />

      <section className="relative overflow-hidden bg-white px-5 py-20">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-red-100 bg-[#fffaf3] p-3 shadow-xl shadow-red-900/5 sm:p-5 md:p-7">
            <GallerySection full />
          </div>
        </div>
      </section>
    </>
  );
}
