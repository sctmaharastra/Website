import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, HeartPulse } from "lucide-react";
import { navLinks, ngoName } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo.png"
              width={70}
              height={70}
              alt="Awareness program by Sickle Cell & Thalassemia Society"
            />

            <h3 className="font-bold">{ngoName}</h3>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Creating awareness, supporting families, and saving lives through
            screening, education, counseling, and community support.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Contact</h4>
          <p className="mb-3 flex gap-3 text-sm text-slate-300">
            <Mail size={18} className="text-red-400" />
            sicklecellsocietyofchanda@gmail.com
          </p>
          <p className="flex gap-3 text-sm text-slate-300">
            <MapPin size={18} className="text-red-400" />
            Chandrapur, Maharashtra, India
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Sickle Cell & Thalassemia Society Of
        Chandrapur. All rights reserved.
      </div>
    </footer>
  );
}
