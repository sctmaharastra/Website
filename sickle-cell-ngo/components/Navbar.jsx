import Link from "next/link";
import Image from "next/image";
import { HeartPulse } from "lucide-react";
import { navLinks } from "@/data/siteData";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="Awareness program by Sickle Cell & Thalassemia Society"
          />
          <div className="hidden mb:block">
            <p className="text-lg font-black leading-tight text-red-800">
              Sickle Cell & Thalassemia
            </p>
            <p className="text-xs font-medium text-slate-500">
              Chandrapur, Maharashtra
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-red-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button href="/donate" className="hidden sm:inline-flex">
          Donate Now
        </Button>
      </nav>
    </header>
  );
}
