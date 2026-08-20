"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { pipeline } from "@/data/pipeline";
import DomainGrid from "@/components/DomainGrid";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  GitPullRequest,
  MessageSquare,
  ArrowRight,
  Compass,
  Code2,
  Terminal,
  Cpu,
  ChevronDown,
  CheckCircle2,
  HeartHandshake,
  MousePointer,
} from "lucide-react";

// D4 Brand Spectrum
const PILLARS = [
  {
    code: "01 // DISCITE",
    title: "Learn & Research",
    color: "#FF6B6B",
    bgHighlight: "bg-[#FF6B6B] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#FF6B6B]",
    icon: Compass,
  },
  {
    code: "02 // DEVELOP",
    title: "Build & Engineer",
    color: "#06D6A0",
    bgHighlight: "bg-[#06D6A0] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#06D6A0]",
    icon: Code2,
  },
  {
    code: "03 // DEBUG",
    title: "Refine & Test",
    color: "#00B4DB",
    bgHighlight: "bg-[#00B4DB] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#00B4DB]",
    icon: Terminal,
  },
  {
    code: "04 // DEPLOY",
    title: "Ship & Host",
    color: "#6C5CE7",
    bgHighlight: "bg-[#6C5CE7] text-white",
    shadow: "shadow-[5px_5px_0px_0px_#6C5CE7]",
    icon: Cpu,
  },
];

const VALUES = [
  {
    title: "Ownership over titles",
    text: "We're not looking for people who want a role on paper. We're looking for builders who take something from zero and see it through.",
    icon: ShieldCheck,
    color: "#FF6B6B",
    bgHighlight: "bg-[#FF6B6B] text-[#090D16]",
    shadow: "shadow-[6px_6px_0px_0px_#FF6B6B]",
  },
  {
    title: "Consistency over intensity",
    text: "A few honest hours every week beats a single burst of effort that disappears after two weeks.",
    icon: Zap,
    color: "#06D6A0",
    bgHighlight: "bg-[#06D6A0] text-[#090D16]",
    shadow: "shadow-[6px_6px_0px_0px_#06D6A0]",
  },
  {
    title: "Contribution over credentials",
    text: "Your campus, degree or year doesn't decide your fit. What you build and how you show up inside the community does.",
    icon: GitPullRequest,
    color: "#00B4DB",
    bgHighlight: "bg-[#00B4DB] text-[#090D16]",
    shadow: "shadow-[6px_6px_0px_0px_#00B4DB]",
  },
  {
    title: "Open critique",
    text: "Work gets reviewed in the open. Feedback is direct and constructive because that's how software actually gets better.",
    icon: MessageSquare,
    color: "#6C5CE7",
    bgHighlight: "bg-[#6C5CE7] text-white",
    shadow: "shadow-[6px_6px_0px_0px_#6C5CE7]",
  },
];

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What exactly is the D4 Community?",
    answer:
      "D4 is an inclusive, non-profit developer community run by students across multiple campuses. We bring together developers, designers, open-source contributors, and tech enthusiasts to collaborate, learn in public, and build real-world software.",
  },
  {
    id: 2,
    question: "What is the core concept behind D4?",
    answer:
      "D4 operates on our four-pillar engineering lifecycle: Discite (Learn & Research) → Develop (Build & Engineer) → Debug (Refine & Test) → Deploy (Ship & Own). Every project, workshop, and meetup follows this continuous growth loop.",
  },
  {
    id: 3,
    question: "What does the D4 Community do?",
    answer:
      "We host campus hackathons, technical bootcamps, architectural code reviews, and developer meetups. Additionally, our domains build and maintain real open-source products that serve student developers.",
  },
  {
    id: 4,
    question: "How can I contribute to D4 projects?",
    answer:
      "You can apply to join our core team across 11 specialized domains during recruitment, or participate in our open public hackathons, workshops, and open-source GitHub repositories.",
  },
  {
    id: 5,
    question: "Are there any membership fees?",
    answer:
      "No! D4 Community is 100% free for all students. There are zero membership fees, application costs, or hidden charges.",
  },
  {
    id: 6,
    question: "Do you host physical or virtual events?",
    answer:
      "We host both! Physical meetups, workshops, and 24-hour hackathons take place on college campuses, complemented by virtual bootcamps, Discord discussions, and live stream code reviews.",
  },
  {
    id: 7,
    question: "What kind of help can I expect from the community?",
    answer:
      "You get direct access to peer mentorship, architectural feedback, team collaborations for hackathons, career guidance from senior builders, and hands-on domain experience.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [searchQuery] = useState("");

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans relative min-h-screen bg-white text-[#090D16] antialiased transition-colors duration-200 selection:bg-[#06D6A0] selection:text-[#090D16] dark:bg-black dark:text-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
          {/* BADGES ROW */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black uppercase text-slate-200 shadow-[3px_3px_0px_0px_#FF6B6B]">
              <Sparkles size={14} className="text-[#FF6B6B]" />
              ABOUT D4 COMMUNITY
            </span>
            {/* <span className="rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black text-[#06D6A0] shadow-[3px_3px_0px_0px_#06D6A0]">
              ✦ 100% Student-Led Non-Profit
            </span>
            <span className="rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black text-[#00B4DB] shadow-[3px_3px_0px_0px_#00B4DB]">
              ✦ 11 Active Domains
            </span> */}
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="mx-auto mt-8 max-w-5xl font-sans text-4xl font-extrabold tracking-tight text-[#090D16] dark:text-white sm:text-6xl lg:text-7xl lg:leading-[1.12]">
            A Developer Community <br />
            Built <em className="font-serif italic font-normal text-slate-600 dark:text-slate-300">by the</em>{" "}
            <span className="inline-block -rotate-1 hover:rotate-1 rounded-2xl border-2 border-[#090D16] bg-[#7c9ff2] px-4 py-1 text-[#090D16] shadow-[5px_5px_0px_0px_#FFFFFF]">
              People Inside It
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
            D4 is a student-run developer community spanning multiple campuses. There&apos;s no single college that owns it, it&apos;s a network of builders learning in public and shipping real-world software together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#00B4DB] transition-transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>Join Community</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#values"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-slate-900 px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#6C5CE7] transition-transform hover:-translate-y-1"
            >
              <span>Our Ethos</span>
              <MousePointer size={16} className="text-[#06D6A0]" />
            </Link>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section id="values" className="py-20 border-t-2 border-slate-800">
          <div className="text-center">
            <span className="rounded-lg border-2 border-[#181818] dark:border-[#090D16] bg-[#00B4DB] px-3.5 py-1 text-xs font-black uppercase text-[#090D16] shadow-[3px_3px_0px_0px_#181818] dark:shadow-[3px_3px_0px_0px_#FFFFFF]">
              What We Look For
            </span>
            <h2 className="mt-4 font-sans text-3xl font-black text-[#090D16] dark:text-white sm:text-5xl">
              Skills, Mindset, Consistency.
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-400 max-w-xl mx-auto">
              Titles don&apos;t build software, dedicated people do. Here is what defines a D4 contributor.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className={`flex flex-col justify-between rounded-3xl border-2 border-[#090D16] bg-slate-900/90 p-7 ${v.shadow} transition-transform hover:-translate-y-1.5`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-block rounded-md border-2 border-[#090D16] px-3 py-1 text-[11px] font-black uppercase ${v.bgHighlight}`}>
                        Core Ethos
                      </span>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white">{v.title}</h3>
                    <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WORKFLOW PIPELINE SECTION */}
        <section className="py-20 border-t-2 border-slate-800">
          <div className="text-center">
            <span className="rounded-lg border-2 border-[#181818] dark:border-[#090D16] bg-[#FF6B6B] px-3.5 py-1 text-xs font-black uppercase text-white shadow-[3px_3px_0px_0px_#181818] dark:shadow-[3px_3px_0px_0px_#FFFFFF]">
              Lifecycle
            </span>
            <h2 className="mt-4 font-sans text-3xl font-black text-[#090D16] dark:text-white sm:text-5xl">
              Discite → Develop → Debug → Deploy.
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-400 max-w-xl mx-auto">
              Every event, open-source tool, and campaign moves through the same four stages.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((stage, i) => {
              const p = PILLARS[i % PILLARS.length];
              const Icon = p.icon;
              return (
                <div
                  key={stage.code}
                  className={`flex flex-col justify-between rounded-3xl border-2 border-[#090D16] bg-slate-900/90 p-7 ${p.shadow} transition-transform hover:-translate-y-1.5`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-block rounded-md border-2 border-[#090D16] px-3 py-1 text-[11px] font-black uppercase ${p.bgHighlight}`}>
                        {stage.code}
                      </span>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white">{stage.title}</h3>
                    <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* DOMAINS SECTION */}
        <section className="py-20 border-t-2 border-slate-800">
          <div className="text-center">
            <span className="rounded-lg border-2 border-[#181818] dark:border-[#090D16] bg-[#6C5CE7] px-3.5 py-1 text-xs font-black uppercase text-white shadow-[3px_3px_0px_0px_#181818] dark:shadow-[3px_3px_0px_0px_#FFFFFF]">
              Specialized Domains
            </span>
            <h2 className="mt-4 font-sans text-3xl font-black text-[#090D16] dark:text-white sm:text-5xl">
              Eleven Ways To Contribute.
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-400 max-w-xl mx-auto">
              Every application is evaluated against the domain you choose as your primary interest, not your college or degree.
            </p>
          </div>

          <div className="mt-12">
            <DomainGrid />
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="py-20 border-t-2 border-slate-800">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-lg border-2 border-[#181818] dark:border-[#090D16] bg-[#06D6A0] px-3.5 py-1 text-xs font-black uppercase text-[#090D16] shadow-[3px_3px_0px_0px_#181818] dark:shadow-[3px_3px_0px_0px_#FFFFFF]">
              Questions?
            </span>
            <h2 className="mt-4 font-sans text-4xl font-black tracking-tight text-[#090D16] dark:text-white sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-500 dark:text-slate-400">
              Everything you need to know about the D4 Community and how we operate.
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border-2 border-[#FF6B6B] bg-slate-900 p-6 shadow-[5px_5px_0px_0px_#FF6B6B]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between text-left font-sans text-base sm:text-lg font-black text-white"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[#06D6A0]" : "text-slate-400"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm font-bold leading-relaxed text-slate-300 border-t border-slate-800 pt-3">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA BANNER (BLACK BG IN LIGHT THEME / WHITE BG IN DARK THEME) */}
        <section className="py-20 text-center">
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#181818] bg-[#fd7d6e] p-8 text-white shadow-[8px_8px_0px_0px_#181818] transition-colors dark:border-white dark:shadow-[8px_8px_0px_0px_#ffffff] sm:p-16">
            <h2 className="font-sans text-3xl font-black sm:text-5xl">
              Ready to build with D4?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm font-bold leading-relaxed text-white/90">
              Applications take about ten minutes. Pick your domain and show us
              what you want to work on.
            </p>

            <Link
              href="/apply"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-[#181818] bg-[#06D6A0] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#181818] transition-transform hover:-translate-y-0.5 dark:border-[#181818] dark:shadow-[4px_4px_0px_0px_#181818]"
            >
              <span>Apply to join</span>
              <ArrowRight size={16} />
            </Link>

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