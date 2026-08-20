import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  // { href: "/events", label: "Events" },
  { href: "/connect", label: "Connect" },
  // { href: "/faq", label: "FAQ" },
  { href: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#090D16] bg-[#FAF9F5] text-[#090D16] transition-colors dark:border-slate-800 dark:bg-[#090D16] dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          {/* BRAND & LOGO */}
          <div className="space-y-3">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              {/* Dark Mode Logo */}
              <Image
                src="/assets/d4logo.webp"
                alt="D4 Community Logo"
                width={130}
                height={40}
                className="hidden h-9 w-auto object-contain dark:block"
              />
              {/* Light Mode Logo */}
              <Image
                src="/assets/d4logo_black.webp"
                alt="D4 Community Logo"
                width={130}
                height={40}
                className="block h-9 w-auto object-contain dark:hidden"
              />
            </Link>

            <p className="max-w-sm font-sans text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-400">
              A 100% non-profit developer community, built and run by students for students across multiple campuses.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-wrap gap-2.5">
            {FOOTER_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-1 rounded-xl border-2 border-[#090D16] bg-white px-3.5 py-2 font-mono text-xs font-black uppercase text-[#090D16] shadow-[2px_2px_0px_0px_#090D16] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#06D6A0] dark:border-white dark:bg-slate-900 dark:text-slate-100 dark:shadow-[2px_2px_0px_0px_#FFF] dark:hover:shadow-[3px_3px_0px_0px_#06D6A0]"
              >
                <span>{l.label}</span>
                <ArrowUpRight
                  size={14}
                  className="text-[#06D6A0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t-2 border-slate-200 pt-6 dark:border-slate-800/80 sm:flex-row">
          
          {/* 4-PILLAR BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs font-black uppercase text-slate-500 dark:text-slate-400">
            <span className="rounded-md border-2 border-[#090D16] bg-[#FF6B6B] px-2 py-0.5 text-[#090D16]">
              Discite
            </span>
            <span>→</span>
            <span className="rounded-md border-2 border-[#090D16] bg-[#06D6A0] px-2 py-0.5 text-[#090D16]">
              Develop
            </span>
            <span>→</span>
            <span className="rounded-md border-2 border-[#090D16] bg-[#00B4DB] px-2 py-0.5 text-[#090D16]">
              Debug
            </span>
            <span>→</span>
            <span className="rounded-md border-2 border-[#090D16] bg-[#aca6d6] px-2 py-0.5 text-[#090D16]">
              Deploy
            </span>
          </div>

          {/* COPYRIGHT */}
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-600 dark:text-slate-400">
            <HeartHandshake size={16} className="text-[#FF6B6B]" />
            <span>© {new Date().getFullYear()} D4 Community</span>
          </div>
        </div>

      </div>
    </footer>
  );
}