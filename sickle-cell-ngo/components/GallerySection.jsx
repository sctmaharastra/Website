import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRight, Images } from "lucide-react";

const galleryImages = [
  "/gallery/Gallery_1.jpeg",
  "/gallery/Gallery (1).jpeg",
  "/gallery/Gallery (2).jpeg",
  "/gallery/Gallery (3).jpeg",
  "/gallery/Gallery (4).jpeg",
  "/gallery/Gallery (5).jpeg",
  "/gallery/Gallery (6).jpeg",
  "/gallery/Gallery (7).jpeg",
  "/gallery/Gallery (8).jpeg",
  "/gallery/Gallery (9).jpeg",
  "/gallery/Gallery (10).jpeg",
  "/gallery/Gallery (11).jpeg",
  "/gallery/Gallery (12).jpeg",
  "/gallery/Gallery (13).jpeg",
  "/gallery/Gallery (14).jpeg",
  "/gallery/Gallery (16).jpeg",
  "/gallery/Gallery (17).jpeg",
  "/gallery/Gallery (18).jpeg",
  "/gallery/Gallery (19).jpeg",
  "/gallery/Gallery (20).jpeg",
  "/gallery/Gallery (21).jpeg",
  "/gallery/Gallery (22).jpeg",
  "/gallery/Gallery (23).jpeg",
  "/gallery/Gallery (24).jpeg",
  "/gallery/Gallery (25).jpeg",
  "/gallery/Gallery (26).jpeg",
  "/gallery/Gallery (27).jpeg",
  "/gallery/Gallery (28).jpeg",
];

export default function GallerySection({ full = false }) {
  const imagesToShow = full ? galleryImages : galleryImages.slice(0, 8);

  return (
    
    <div>
        <div className="grid auto-rows-[155px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {imagesToShow.map((image, index) => (
            <div
              key={image}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-red-50 shadow-lg shadow-red-900/5 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 3 ? "md:row-span-2" : ""}`}
            >
              <Image
                src={image}
                alt={`Sickle Cell and Thalassemia Society gallery image ${
                  index + 1
                }`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {!full && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 font-bold text-white shadow-lg shadow-red-700/20 transition-all hover:-translate-y-1 hover:bg-red-800"
            >
              View Our Full Gallery
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
   
  );
}
