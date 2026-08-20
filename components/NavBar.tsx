"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  Sun,
  Moon,
} from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  // { href: "/events", label: "Events" },
  { href: "/connect", label: "Connect" },
  // { href: "/faq", label: "FAQ" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-[#06D6A0] text-[#090D16] shadow-[2px_2px_0px_0px_#090D16] transition-all hover:-translate-y-0.5 active:translate-y-0 dark:border-white dark:bg-slate-800 dark:text-amber-400 dark:shadow-[2px_2px_0px_0px_#FFF] sm:h-10 sm:w-10"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="relative z-[100] sticky top-0 select-none border-b-2 border-[#090D16] bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-black/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3.5 py-2.5 sm:px-6 sm:py-3.5 lg:px-8">
        
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center transition-transform hover:-translate-y-0.5 active:translate-y-0"
          aria-label="D4 Community Home"
        >
          {/* Dark Mode Logo */}
          <Image
            src="/assets/d4logo.webp"
            alt="D4 Community Logo"
            width={130}
            height={40}
            priority
            className="hidden h-9 w-auto object-contain transition-transform group-hover:scale-105 dark:block sm:h-10"
          />
          {/* Light Mode Logo */}
          <Image
            src="/assets/d4logo_black.webp"
            alt="D4 Community Logo"
            width={130}
            height={40}
            priority
            className="block h-9 w-auto object-contain transition-transform group-hover:scale-105 dark:hidden sm:h-10"
          />
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3.5 py-1.5 font-mono text-xs font-black uppercase tracking-wider transition-all ${
                  active
                    ? "-rotate-1 border-2 border-[#090D16] bg-[#06D6A0] text-[#090D16] shadow-[2px_2px_0px_0px_#090D16] dark:border-white dark:shadow-[2px_2px_0px_0px_#FFF]"
                    : "border-2 border-transparent text-slate-700 hover:border-slate-800 hover:bg-white dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800/80 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] px-4 py-2.5 font-mono text-xs font-black uppercase text-white shadow-[3px_3px_0px_0px_#06D6A0] transition-all hover:-translate-y-0.5 active:translate-y-0 dark:border-white dark:shadow-[3px_3px_0px_0px_#06D6A0]"
          >
            <span>Apply Now</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* MOBILE ACTIONS & HAMBURGER BUTTON */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Link
            href="/apply"
            className="inline-flex items-center gap-1 rounded-xl border-2 border-[#090D16] bg-[#FF6B6B] px-3 py-1.5 font-mono text-[11px] font-black uppercase text-white shadow-[2px_2px_0px_0px_#06D6A0] active:translate-y-0.5 dark:border-white sm:hidden"
          >
            <span>Apply</span>
            <Zap size={13} />
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-white text-[#090D16] shadow-[2px_2px_0px_0px_#090D16] transition-all hover:bg-[#06D6A0] active:translate-y-0.5 dark:border-white dark:bg-slate-800 dark:text-slate-100 dark:shadow-[2px_2px_0px_0px_#FFF] sm:h-10 sm:w-10"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* PORTAL MOBILE DRAWER */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[999999] select-none overflow-hidden transition-all duration-300 md:hidden ${
              open ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {/* OVERLAY */}
            <div
              className={`fixed inset-0 bg-[#090D16]/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                open ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setOpen(false)}
            />

            {/* SLIDE-OVER DRAWER */}
            <aside
              className={`fixed bottom-0 right-0 top-0 flex h-full w-full flex-col justify-between overflow-y-auto border-l-2 border-[#090D16] bg-white p-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:border-white dark:bg-black sm:w-80 sm:p-6 ${
                open
                  ? "translate-x-0 shadow-[-8px_0px_0px_0px_#090D16] dark:shadow-[-8px_0px_0px_0px_#FFF]"
                  : "translate-x-full shadow-none"
              }`}
            >
              <div>
                {/* DRAWER HEADER */}
                <div className="mb-5 flex items-center justify-between border-b-2 border-[#090D16]/10 pb-4 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/d4logo.webp"
                      alt="D4 Logo"
                      width={110}
                      height={32}
                      className="hidden h-8 w-auto object-contain dark:block"
                    />
                    <Image
                      src="/assets/d4logo_black.webp"
                      alt="D4 Logo"
                      width={110}
                      height={32}
                      className="block h-8 w-auto object-contain dark:hidden"
                    />
                  </div>

                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-white text-[#090D16] shadow-[2px_2px_0px_0px_#090D16] transition-all hover:bg-[#FF6B6B] hover:text-white active:translate-y-0.5 dark:border-white dark:bg-slate-800 dark:text-slate-100 dark:shadow-[2px_2px_0px_0px_#FFF]"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* BADGES ROW */}
                <div className="mb-5 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#090D16] bg-[#090D16] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_0px_#FF6B6B] dark:border-white">
                    <Sparkles size={12} className="text-[#06D6A0]" />
                    Navigation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#090D16] bg-[#06D6A0] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-[#090D16] shadow-[2px_2px_0px_0px_#090D16]">
                    ✦ Session 2026–27
                  </span>
                </div>

                {/* DRAWER LINKS */}
                <nav className="flex flex-col gap-2.5">
                  {NAV_LINKS.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-mono text-xs font-black uppercase tracking-wider transition-all sm:text-sm ${
                          active
                            ? "-rotate-1 border-2 border-[#090D16] bg-[#06D6A0] text-[#090D16] shadow-[3px_3px_0px_0px_#090D16] dark:border-white"
                            : "border-2 border-[#090D16] bg-white text-[#090D16] shadow-[2px_2px_0px_0px_#090D16] hover:translate-x-1 hover:bg-[#06D6A0]/20 dark:border-white dark:bg-slate-900 dark:text-slate-100 dark:shadow-[2px_2px_0px_0px_#FFF]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight
                          size={16}
                          className={
                            active ? "text-[#090D16]" : "text-slate-400"
                          }
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* DRAWER BOTTOM CTA */}
              <div className="mt-8 border-t-2 border-[#090D16]/10 pt-4 dark:border-white/10">
                <Link
                  href="/apply"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] px-4 py-3.5 text-center font-mono text-xs font-black uppercase text-white shadow-[3px_3px_0px_0px_#06D6A0] transition-all active:translate-y-0.5 dark:border-white"
                >
                  <Zap size={16} />
                  <span>Apply To Join D4</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}