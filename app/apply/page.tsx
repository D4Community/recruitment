"use client";

import Image from "next/image";
import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Clock,
  ShieldCheck,
  FileText,
} from "lucide-react";

const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Choose Domain",
    desc: "Pick your primary area of interest from our 11 domains.",
    color: "#FF6B6B",
    shadow: "shadow-[4px_4px_0px_0px_#FF6B6B]",
  },
  {
    step: "02",
    title: "Fill Application",
    desc: "Takes 10 minutes. Tell us about your projects & interest.",
    color: "#06D6A0",
    shadow: "shadow-[4px_4px_0px_0px_#06D6A0]",
  },
  {
    step: "03",
    title: "Peer Interaction",
    desc: "Casual technical conversation with domain leads.",
    color: "#FF6B6B",
    shadow: "shadow-[4px_4px_0px_0px_#FF6B6B]",
  },
  {
    step: "04",
    title: "Welcome Onboard",
    desc: "Get assigned to real projects, events & mentorship.",
    color: "#aca6d6",
    shadow: "shadow-[4px_4px_0px_0px_#aca6d6]",
  },
];

const GUIDELINES = [
  "No resume or CV required, we value genuine interest over credentials.",
  "Be honest about your current skill level; beginners are warmly welcomed.",
  "Pick the domain you actually want to work in, not what sounds fancy.",
  "Applications are reviewed on a rolling basis by domain leads.",
];

export default function ApplyPage() {
  return (
    <div className="font-sans relative min-h-screen bg-white text-[#090D16] antialiased transition-colors duration-200 selection:bg-[#06D6A0] selection:text-[#090D16] dark:bg-black dark:text-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-12 text-center sm:pt-24 sm:pb-16">
          {/* BADGES ROW */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black uppercase text-slate-200 shadow-[3px_3px_0px_0px_#FF6B6B]">
              <Sparkles size={14} className="text-[#FF6B6B]" />
              TEAM RECRUITMENT 2026–27
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="mx-auto mt-8 max-w-5xl font-sans text-4xl font-extrabold tracking-tight text-[#090D16] dark:text-white sm:text-6xl lg:text-7xl lg:leading-[1.12]">
            Apply to Join <br />
            <span className="inline-block -rotate-1 hover:rotate-1 rounded-2xl border-2 border-[#090D16] bg-[#fd7d6e] px-4 py-1 text-[#090D16] shadow-[5px_5px_0px_0px_#FFFFFF]">
              D4 Community
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

          <p className="mx-auto mt-6 max-w-2xl text-base font-bold leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            Keep it short and honest. No essays or formal CVs needed, just tell
            us who you are and what you want to build with us this year.
          </p>
        </section>

        {/* MODULAR LAYOUT */}
        <section className="py-12 border-t-2 border-slate-800">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* LEFT COLUMN: INDIVIDUAL MODULAR CARDS */}
            <div className="space-y-6 lg:col-span-5">
              {/* APPLICATION STEPS */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-[#FF6B6B]" />
                  <h3 className="text-sm font-mono font-black uppercase text-[#181818] dark:text-slate-300">
                    Application Journey
                  </h3>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                  {APPLICATION_STEPS.map((s) => (
                    <div
                      key={s.step}
                      className={`flex items-start gap-4 rounded-2xl border-2 border-[#090D16] bg-slate-900/90 p-4 ${s.shadow}`}
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-[#090D16] text-xs font-black text-[#090D16]"
                        style={{ backgroundColor: s.color }}
                      >
                        {s.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-black text-white">
                          {s.title}
                        </h4>
                        <p className="mt-0.5 text-xs font-bold text-slate-400">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GUIDELINES CARD */}
              <div className="rounded-3xl border-2 border-[#090D16] bg-slate-900/90 p-6 shadow-[6px_6px_0px_0px_#06D6A0]">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-md border-2 border-[#090D16] bg-[#06D6A0] px-3 py-1 text-[11px] font-black uppercase text-[#090D16]">
                    Tips
                  </span>
                  <ShieldCheck size={20} className="text-[#06D6A0]" />
                </div>
                <h3 className="text-lg font-black text-white">
                  Applicant Guidelines
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {GUIDELINES.map((g, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs font-bold text-slate-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#06D6A0]"
                      />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SUPPORT CARD */}
              <div className="rounded-2xl border-2 border-[#090D16] bg-[#121826] p-5 shadow-[4px_4px_0px_0px_#aca6d6] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase text-white">
                    Need Any Help?
                  </h4>
                  <p className="mt-0.5 text-[11px] font-bold text-slate-400">
                    Reach out to domain leads on Discord
                  </p>
                </div>
                <Link
                  href="/connect"
                  className="rounded-xl border-2 border-[#090D16] bg-[#aca6d6] px-3.5 py-2 text-xs font-black uppercase text-[#090D16] hover:opacity-90"
                >
                  Connect
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM CONTAINER */}
            <div className="lg:col-span-7 space-y-6">
              {/* FORM HEADER BLOCK */}
              <div className="rounded-2xl border-2 border-[#090D16] bg-[#06D6A0] p-6 text-[#090D16] shadow-[5px_5px_0px_0px_#FFFFFF] flex items-center justify-between">
                <div>
                  <span className="inline-block rounded-md border-2 border-[#090D16] bg-[#090D16] px-3 py-1 text-[11px] font-black uppercase text-white">
                    Recruitment 2026–27
                  </span>
                  <h2 className="mt-2 text-2xl font-black text-[#090D16]">
                    Application Form
                  </h2>
                  <p className="text-xs font-bold text-[#090D16]/80 mt-0.5">
                    Select your domain and fill in your details below.
                  </p>
                </div>
                <FileText size={32} className="text-[#090D16]" />
              </div>

              {/* INTEGRATED FORM FIELDS */}
              <div className="pt-2">
                <ApplyForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 text-center">
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#181818] bg-[#fd7d6e] p-8 text-white shadow-[8px_8px_0px_0px_#181818] transition-colors dark:border-white dark:shadow-[8px_8px_0px_0px_#ffffff] sm:p-16">
            <h2 className="font-sans text-3xl font-black sm:text-5xl">
              Questions Before Applying?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm font-bold leading-relaxed text-white/90">
              Check out our FAQs or connect with our team members on Discord or
              WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#181818] bg-[#FF6B6B] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#181818] transition-transform hover:-translate-y-0.5 dark:border-white dark:shadow-[4px_4px_0px_0px_#ffffff]"
              >
                <span>Read FAQs</span>
                <ArrowRight size={16} />
              </Link> */}
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#181818] bg-[#FF6B6B] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#181818] transition-transform hover:-translate-y-0.5 dark:border-[#181818] dark:shadow-[4px_4px_0px_0px_#181818]"
              >
                <span>Connect Channels</span>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-black text-white">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#181818]" /> Zero
                Membership Fee
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake size={16} className="text-[#181818]" />{" "}
                Non-Profit Community
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
