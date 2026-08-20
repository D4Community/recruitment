"use client";

import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Camera,
} from "lucide-react";

// D4 Brand Spectrum Color Mapping
const ACCENT_COLORS = [
  {
    color: "#FF6B6B",
    shadow: "shadow-[5px_5px_0px_0px_#FF6B6B]",
    bgHighlight: "bg-[#FF6B6B] text-[#090D16]",
    gradient: "from-[#FF6B6B]/30 via-[#121826] to-[#090D16]",
  },
  {
    color: "#06D6A0",
    shadow: "shadow-[5px_5px_0px_0px_#06D6A0]",
    bgHighlight: "bg-[#06D6A0] text-[#090D16]",
    gradient: "from-[#06D6A0]/30 via-[#121826] to-[#090D16]",
  },
  {
    color: "#00B4DB",
    shadow: "shadow-[5px_5px_0px_0px_#00B4DB]",
    bgHighlight: "bg-[#00B4DB] text-[#090D16]",
    gradient: "from-[#00B4DB]/30 via-[#121826] to-[#090D16]",
  },
  {
    color: "#6C5CE7",
    shadow: "shadow-[5px_5px_0px_0px_#6C5CE7]",
    bgHighlight: "bg-[#6C5CE7] text-white",
    gradient: "from-[#6C5CE7]/30 via-[#121826] to-[#090D16]",
  },
];

export default function EventsPage() {
  return (
    <div className="font-sans relative min-h-screen bg-white text-[#090D16] antialiased transition-colors duration-200 selection:bg-[#06D6A0] selection:text-[#090D16] dark:bg-black dark:text-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
          
          {/* BADGES ROW */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black uppercase text-slate-200 shadow-[3px_3px_0px_0px_#FF6B6B]">
              <Sparkles size={14} className="text-[#FF6B6B]" />
              PAST EVENTS ARCHIVE
            </span>
            <span className="rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black text-[#06D6A0] shadow-[3px_3px_0px_0px_#06D6A0]">
              ✦ 100% Student-Led Non-Profit
            </span>
            <span className="rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black text-[#00B4DB] shadow-[3px_3px_0px_0px_#00B4DB]">
              ✦ Meetups & Hackathons
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="mx-auto mt-8 max-w-5xl font-sans text-4xl font-extrabold tracking-tight text-[#090D16] dark:text-white sm:text-6xl lg:text-7xl lg:leading-[1.12]">
            A Look at What We&apos;ve <br />
            <span className="inline-block -rotate-1 rounded-2xl border-2 border-[#090D16] bg-[#06D6A0] px-4 py-1 text-[#090D16] shadow-[5px_5px_0px_0px_#FFFFFF]">
              Shipped & Hosted
            </span>{" "}
            <span className="mx-1 inline-flex items-center align-middle">
              <Image
                src="/assets/smiley.webp"
                alt="Smiley"
                width={52}
                height={52}
                className="h-10 w-10 object-contain sm:h-14 sm:w-14"
              />
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-bold leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            A sample of our past sessions, technical workshops, open-source sprints, and developer meetups organized across campuses.
          </p>
        </section>

        {/* EVENTS GRID */}
        <section className="py-12 border-t-2 border-slate-800">
          <div className="text-center">
            <span className="rounded-lg border-2 border-[#181818] dark:border-[#090D16] bg-[#00B4DB] px-3.5 py-1 text-xs font-black uppercase text-[#090D16] shadow-[3px_3px_0px_0px_#181818] dark:shadow-[3px_3px_0px_0px_#FFFFFF]>
              Community Highlights
            </span>
            <h2 className="mt-4 font-sans text-3xl font-black text-[#090D16] dark:text-white sm:text-5xl">
              Past Sessions & Meetups
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-400 max-w-xl mx-auto">
              Explore past events engineered by D4 Community members and domain leads.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, index) => {
              const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
              return (
                <figure
                  key={e.title}
                  className={`flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#090D16] bg-slate-900/90 ${accent.shadow} transition-transform hover:-translate-y-1.5`}
                >
                  <div>
                    {/* PHOTO OR FALLBACK PLACEHOLDER */}
                    {e.photoUrl ? (
                      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[#090D16]">
                        <Image
                          src={e.photoUrl}
                          alt={e.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div
                        className={`relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border-b-2 border-[#090D16] bg-gradient-to-br px-6 text-center ${accent.gradient}`}
                      >
                        <Camera size={32} style={{ color: accent.color }} />
                        <span className="font-mono text-xs font-black uppercase tracking-widest text-slate-400">
                          Photo Placeholder
                        </span>
                        <span className="font-sans text-lg font-black text-white">
                          {e.title}
                        </span>
                      </div>
                    )}

                    {/* CAPTION / DETAILS */}
                    <figcaption className="p-7">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`inline-block rounded-md border-2 border-[#090D16] px-3 py-1 text-[11px] font-black uppercase ${accent.bgHighlight}`}>
                          {e.meta}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-white">{e.title}</h3>
                      <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">
                        {e.note}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              );
            })}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 text-center border-t-2 border-slate-800">
          <div className="relative overflow-hidden rounded-3xl border-2 border-white bg-[#090D16] p-8 text-white shadow-[8px_8px_0px_0px_#06D6A0] dark:border-[#090D16] dark:bg-white dark:text-[#090D16] dark:shadow-[8px_8px_0px_0px_#FF6B6B] sm:p-16">
            <h2 className="font-sans text-3xl font-black sm:text-5xl">
              Ready to build with D4?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm font-bold leading-relaxed text-slate-300 dark:text-slate-700">
              Applications take about ten minutes. Pick your domain and show us what you want to work on.
            </p>

            <Link
              href="/apply"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-white bg-[#FF6B6B] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#06D6A0] transition-transform hover:-translate-y-0.5 dark:border-[#090D16] dark:shadow-[4px_4px_0px_0px_#090D16]"
            >
              <span>Apply to join</span>
              <ArrowRight size={16} />
            </Link>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-black text-slate-300 dark:text-[#090D16]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#06D6A0]" /> Zero Membership Fee
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake size={16} className="text-[#FF6B6B]" /> Non-Profit Community
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}