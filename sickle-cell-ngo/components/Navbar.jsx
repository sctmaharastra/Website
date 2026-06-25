import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { navLinks } from "@/data/siteData";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-700 text-white">
            <HeartPulse size={24} />
          </div>
          <div>
            <p className="text-sm font-black leading-tight text-red-800">
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
