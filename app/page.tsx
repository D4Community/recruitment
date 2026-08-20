// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Sparkles,
//   Users,
//   Calendar,
//   MapPin,
//   Code2,
//   Terminal,
//   Cpu,
//   Compass,
//   HelpCircle,
//   ChevronRight,
//   Rocket,
//   Globe,
//   BookOpen,
//   HeartHandshake,
//   CheckCircle2,
// } from "lucide-react";

// // D4 4-Pillar Spectrum
// const D4_PILLARS = [
//   {
//     word: "Discite",
//     meaning: "Learn & Research",
//     color: "#FF6B6B",
//     bgAlpha: "rgba(255, 107, 107, 0.12)",
//     borderColor: "border-[#FF6B6B]/50",
//     glowShadow: "shadow-[0_0_30px_rgba(255,107,107,0.25)]",
//   },
//   {
//     word: "Develop",
//     meaning: "Build & Engineer",
//     color: "#06D6A0",
//     bgAlpha: "rgba(6, 214, 160, 0.12)",
//     borderColor: "border-[#06D6A0]/50",
//     glowShadow: "shadow-[0_0_30px_rgba(6,214,160,0.25)]",
//   },
//   {
//     word: "Debug",
//     meaning: "Refine & Test",
//     color: "#00B4DB",
//     bgAlpha: "rgba(0, 180, 219, 0.12)",
//     borderColor: "border-[#00B4DB]/50",
//     glowShadow: "shadow-[0_0_30px_rgba(0,180,219,0.25)]",
//   },
//   {
//     word: "Deploy",
//     meaning: "Ship & Own",
//     color: "#6C5CE7",
//     bgAlpha: "rgba(108, 92, 231, 0.12)",
//     borderColor: "border-[#6C5CE7]/50",
//     glowShadow: "shadow-[0_0_30px_rgba(108,92,231,0.25)]",
//   },
// ];

// const COMMUNITY_ACTIVITIES = [
//   {
//     title: "Community Meetups",
//     desc: "Networking, live project demos, and developer roundtables.",
//     icon: Users,
//     color: "#FF6B6B",
//   },
//   {
//     title: "Hackathons & Sprints",
//     desc: "24-hour rapid engineering sprees with mentorship and bounties.",
//     icon: Rocket,
//     color: "#06D6A0",
//   },
//   {
//     title: "Technical Bootcamps",
//     desc: "Hands-on workshops on Full-Stack, AI/ML, DevOps, and Mobile stacks.",
//     icon: BookOpen,
//     color: "#00B4DB",
//   },
//   {
//     title: "Open Source Ecosystem",
//     desc: "Public software built and maintained by student developers.",
//     icon: Globe,
//     color: "#6C5CE7",
//   },
// ];

// const DOMAINS = [
//   { name: "Web Development", color: "#FF6B6B" },
//   { name: "AI / Machine Learning", color: "#06D6A0" },
//   { name: "App Development", color: "#00B4DB" },
//   { name: "UI/UX & Product Design", color: "#6C5CE7" },
//   { name: "Cloud & DevOps", color: "#FF6B6B" },
//   { name: "Cybersecurity & Web3", color: "#06D6A0" },
//   { name: "Event Operations", color: "#00B4DB" },
//   { name: "Content & Copywriting", color: "#6C5CE7" },
//   { name: "Social Media & PR", color: "#FF6B6B" },
//   { name: "Video & Media Production", color: "#06D6A0" },
//   { name: "Community Outreach", color: "#00B4DB" },
// ];

// const FAQS = [
//   {
//     q: "What is D4 Community?",
//     a: "D4 is a student-run non-profit developer community operating across four stages: Discite, Develop, Debug, and Deploy. We build software, host hackathons, and run tech workshops.",
//   },
//   {
//     q: "Who can apply for core team recruitment 2026–27?",
//     a: "Any university or diploma student interested in software engineering, design, video, media, or community management can apply. Selection is based on curiosity and commitment.",
//   },
//   {
//     q: "Is prior technical experience mandatory?",
//     a: "No! Beginners are welcome. Senior members and domain leads provide hands-on mentorship throughout the tenure.",
//   },
// ];

// export default function Home() {
//   const [index, setIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRotation((prev) => prev - 90);
//       setIndex((prev) => (prev + 1) % D4_PILLARS.length);
//     }, 2800);

//     return () => clearInterval(timer);
//   }, []);

//   const currentPillar = D4_PILLARS[index];

//   return (
//     <div className="font-sans relative min-h-screen bg-[#090D16] text-slate-100 transition-colors duration-200 antialiased selection:bg-[#06D6A0] selection:text-[#090D16] dark:bg-[#090D16] dark:text-slate-100 light:bg-white light:text-slate-900">
//       {/* GRID OVERLAY MATCHING REFERENCE IMAGE */}
//       {/* <div
//         className="pointer-events-none absolute inset-0 opacity-[0.12]"
//         style={{
//           backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
//           backgroundSize: "48px 48px",
//         }}
//       /> */}

//       {/* HERO SECTION */}
//       <section className="relative overflow-hidden border-b border-slate-800/80 px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
//         {/* Ambient Radial Blur */}
//         <div
//           className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[140px] transition-all duration-700"
//           style={{ backgroundColor: currentPillar.color }}
//         />

//         <div className="relative mx-auto max-w-5xl text-center">
//           {/* Top Pill Announcement Badge */}
//           <Link
//             href="/events"
//             className="group inline-flex items-center gap-2 rounded-full border border-slate-800 bg-[#121826]/80 px-4 py-2 font-mono text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md transition-all hover:border-slate-700 hover:bg-[#182032]"
//           >
//             <Sparkles size={14} className="text-[#FF6B6B]" />
//             <span>Team Recruitment 2026–27 Open</span>
//             <ArrowRight size={13} className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-300" />
//           </Link>

//           {/* MAIN HERO HEADLINE WITH CIRCULAR ROTATING BADGE */}
//           <div className="mt-8 flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:gap-4">
//             <h1 className="font-sans text-4xl font-extrabold tracking-tight text-[#090D16] dark:text-white sm:text-6xl lg:text-7xl">
//               Welcome to D4
//             </h1>

//             {/* 3D CIRCULAR WHEEL ROTATING BOX */}
//             <div className="perspective-1000 my-2 inline-block h-[68px] w-[210px] sm:my-0 sm:h-[82px] sm:w-[250px]">
//               <div
//                 className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: `rotateX(${rotation}deg)`,
//                 }}
//               >
//                 {D4_PILLARS.map((pillar, i) => {
//                   const angle = i * 90;
//                   return (
//                     <div
//                       key={pillar.word}
//                       className={`absolute inset-0 flex items-center justify-center rounded-2xl border ${pillar.borderColor} bg-[#121826] px-6 text-2xl font-extrabold shadow-lg backdrop-blur-md sm:text-4xl ${pillar.glowShadow}`}
//                       style={{
//                         color: pillar.color,
//                         transform: `rotateX(${angle}deg) translateZ(40px)`,
//                         backfaceVisibility: "hidden",
//                       }}
//                     >
//                       {pillar.word}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* COMMUNITY SUBTITLE / QUOTE */}
//           <p className="mx-auto mt-8 max-w-3xl text-base font-normal leading-relaxed text-slate-300 sm:text-xl">
//             D4 Community is an inclusive, open-source initiative driven by passionate individuals from diverse backgrounds. With contributions from a dedicated group of members and continuous input from the wider community.
//           </p>

//           {/* BUTTON ACTIONS */}
//           <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Link
//               href="/apply"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700/80 bg-[#121826] px-7 py-4 font-sans text-sm font-bold text-slate-100 shadow-md transition-all hover:border-slate-500 hover:bg-[#182032] sm:w-auto"
//             >
//               <span>Join Community</span>
//               <Users size={16} className="text-slate-400" />
//             </Link>

//             <Link
//               href="/about"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-100 px-7 py-4 font-sans text-sm font-bold text-[#090D16] shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-white sm:w-auto"
//             >
//               <span>Explore More</span>
//               <ArrowRight size={16} />
//             </Link>
//           </div>

//           {/* TAGS BAR */}
//           <div className="mt-14 flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-medium text-slate-400">
//             <span className="flex items-center gap-1.5">
//               <Calendar size={14} className="text-[#FF6B6B]" /> Session 2026–2027
//             </span>
//             {/* <span className="flex items-center gap-1.5">
//               <MapPin size={14} className="text-[#00B4DB]" /> CGC University Campus
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Sparkles size={14} className="text-[#06D6A0]" /> 11 Active Domains
//             </span> */}
//           </div>
//         </div>
//       </section>

//       {/* PIPELINE SECTION */}
//       <section className="relative border-b border-slate-800/80 bg-[#0c111d]/60 px-5 py-20 sm:px-8">
//         <div className="mx-auto max-w-6xl">
//           <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#00B4DB]">
//             How We Operate
//           </p>
//           <h2 className="mt-3 font-sans text-3xl font-bold text-[#090D16] dark:text-white sm:text-4xl">
//             Discite → Develop → Debug → Deploy.
//           </h2>
//           <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
//             Every project, workshop, and meetup moves through these four stages. It&apos;s also how new team members grow.
//           </p>

//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {D4_PILLARS.map((p) => (
//               <div
//                 key={p.word}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#121826]/70 p-6 transition-all hover:border-slate-700"
//               >
//                 <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: p.color }}>
//                   {p.meaning}
//                 </span>
//                 <h3 className="mt-3 font-sans text-2xl font-bold text-slate-100">
//                   {p.word}
//                 </h3>
//                 <p className="mt-2 text-xs leading-relaxed text-slate-400">
//                   Open-source workflow designed for peer collaboration and hands-on technical learning.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ACTIVITIES */}
//       <section className="relative border-b border-slate-800/80 px-5 py-20 sm:px-8">
//         <div className="mx-auto max-w-6xl">
//           <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#06D6A0]">
//             Community Initiatives
//           </p>
//           <h2 className="mt-3 font-sans text-3xl font-bold text-[#090D16] dark:text-white sm:text-4xl">
//             Meetups, Hackathons & Bootcamps
//           </h2>

//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {COMMUNITY_ACTIVITIES.map((act) => {
//               const Icon = act.icon;
//               return (
//                 <div
//                   key={act.title}
//                   className="rounded-2xl border border-slate-800 bg-[#121826]/50 p-6 transition-all hover:border-slate-700"
//                 >
//                   <div
//                     className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-[#182032]"
//                     style={{ color: act.color }}
//                   >
//                     <Icon size={20} />
//                   </div>
//                   <h3 className="mt-4 font-sans text-base font-bold text-slate-200">
//                     {act.title}
//                   </h3>
//                   <p className="mt-2 text-xs leading-relaxed text-slate-400">
//                     {act.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* DOMAINS */}
//       <section className="relative border-b border-slate-800/80 bg-[#0c111d]/60 px-5 py-20 sm:px-8">
//         <div className="mx-auto max-w-6xl">
//           <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7]">
//             Find Your Fit
//           </p>
//           <h2 className="mt-3 font-sans text-3xl font-bold text-[#090D16] dark:text-white sm:text-4xl">
//             11 Domains, One Community
//           </h2>

//           <div className="mt-10 flex flex-wrap gap-2.5">
//             {DOMAINS.map((domain) => (
//               <div
//                 key={domain.name}
//                 className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-[#121826] px-4 py-2.5 text-xs font-medium text-slate-300"
//               >
//                 <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: domain.color }} />
//                 <span>{domain.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQS */}
//       <section className="relative border-b border-slate-800/80 px-5 py-20 sm:px-8">
//         <div className="mx-auto max-w-4xl">
//           <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B6B]">
//             Recruitment Info
//           </p>
//           <h2 className="mt-3 font-sans text-3xl font-bold text-[#090D16] dark:text-white sm:text-4xl">
//             Frequently Asked
//           </h2>

//           <div className="mt-10 space-y-4">
//             {FAQS.map((faq, i) => (
//               <div key={i} className="rounded-2xl border border-slate-800 bg-[#121826]/60 p-6">
//                 <div className="flex items-center gap-2 text-[#06D6A0]">
//                   <HelpCircle size={16} />
//                   <span className="font-mono text-xs uppercase text-slate-500">
//                     Question {i + 1}
//                   </span>
//                 </div>
//                 <h3 className="mt-2 font-sans text-base font-bold text-slate-200">
//                   {faq.q}
//                 </h3>
//                 <p className="mt-2 text-xs leading-relaxed text-slate-400">
//                   {faq.a}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
//         <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-[#121826] via-[#090D16] to-[#0c111d] p-8 text-center sm:p-14">
//           <h2 className="font-sans text-3xl font-bold text-slate-100 sm:text-5xl">
//             Ready to build with D4?
//           </h2>
//           <p className="mx-auto mt-4 max-w-md text-xs text-slate-400 sm:text-sm">
//             Applications take about ten minutes. Tell us what domain you want to work in.
//           </p>

//           <Link
//             href="/apply"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-8 py-4 font-sans text-xs font-bold uppercase tracking-wider text-[#090D16] shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-white"
//           >
//             <span>Apply Now</span>
//             <ArrowRight size={16} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  Users,
  Calendar,
  Rocket,
  Globe,
  BookOpen,
  MousePointer,
} from "lucide-react";

// D4 4-Pillar Spectrum
const D4_PILLARS = [
  {
    word: "Discite",
    meaning: "01 // Learn & Research",
    color: "#FF6B6B",
    bgHighlight: "bg-[#FF6B6B] text-[#090D16]",
    borderColor: "border-[#FF6B6B]",
    shadow: "shadow-[5px_5px_0px_0px_#FF6B6B]",
    icon: Compass,
  },
  {
    word: "Develop",
    meaning: "02 // Build & Engineer",
    color: "#06D6A0",
    bgHighlight: "bg-[#06D6A0] text-[#090D16]",
    borderColor: "border-[#06D6A0]",
    shadow: "shadow-[5px_5px_0px_0px_#06D6A0]",
    icon: Code2,
  },
  {
    word: "Debug",
    meaning: "03 // Refine & Test",
    color: "#00B4DB",
    bgHighlight: "bg-[#00B4DB] text-[#090D16]",
    borderColor: "border-[#00B4DB]",
    shadow: "shadow-[5px_5px_0px_0px_#00B4DB]",
    icon: Terminal,
  },
  {
    word: "Deploy",
    meaning: "04 // Ship & Host",
    color: "#6C5CE7",
    bgHighlight: "bg-[#6C5CE7] text-white",
    borderColor: "border-[#6C5CE7]",
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

const COMMUNITY_ACTIVITIES = [
  {
    title: "Community Meetups",
    desc: "Networking, live project demos, and developer roundtables.",
    icon: Users,
    color: "#FF6B6B",
    bgHighlight: "bg-[#FF6B6B] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#FF6B6B]",
  },
  {
    title: "Hackathons & Sprints",
    desc: "24-hour rapid engineering sprees with mentorship and bounties.",
    icon: Rocket,
    color: "#06D6A0",
    bgHighlight: "bg-[#06D6A0] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#06D6A0]",
  },
  {
    title: "Technical Bootcamps",
    desc: "Hands-on workshops on Full-Stack, AI/ML, DevOps, and Mobile stacks.",
    icon: BookOpen,
    color: "#00B4DB",
    bgHighlight: "bg-[#00B4DB] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#00B4DB]",
  },
  {
    title: "Open Source Ecosystem",
    desc: "Public software built and maintained by student developers.",
    icon: Globe,
    color: "#6C5CE7",
    bgHighlight: "bg-[#6C5CE7] text-white",
    shadow: "shadow-[5px_5px_0px_0px_#6C5CE7]",
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

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [searchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((prev) => prev - 90);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
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
              TEAM RECRUITMENT 2026–27 OPEN
            </span>
          </div>

          {/* MAIN HEADLINE WITH 3D ROLLING BOX */}
          <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-[#090D16] dark:text-white sm:text-6xl lg:text-7xl">
              Welcome to D4
            </h1>

            {/* 3D CIRCULAR WHEEL ROTATING BOX */}
            <div className="perspective-1000 my-2 inline-block h-[68px] w-[210px] sm:my-0 sm:h-[82px] sm:w-[260px]">
              <div
                className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${rotation}deg)`,
                }}
              >
                {D4_PILLARS.map((pillar, i) => {
                  const angle = i * 90;
                  return (
                    <div
                      key={pillar.word}
                      className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-[#090D16] bg-[#121826] px-6 text-2xl font-extrabold shadow-[4px_4px_0px_0px_#FFFFFF] sm:text-4xl"
                      style={{
                        color: pillar.color,
                        transform: `rotateX(${angle}deg) translateZ(40px)`,
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {pillar.word}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SMILEY ICON */}
            {/* <span className="inline-flex items-center align-middle">
              <Image
                src="/assets/smiley.webp"
                alt="Smiley"
                width={52}
                height={52}
                className="h-10 w-10 object-contain sm:h-14 sm:w-14"
              />
            </span> */}
          </div>

          {/* COMMUNITY SUBTITLE */}
          <p className="mx-auto mt-8 max-w-3xl text-base font-bold leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            D4 Community is an inclusive, open-source initiative driven by
            passionate individuals from diverse backgrounds. With contributions
            from a dedicated group of members and continuous input from the
            wider community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#090D16]/20 bg-[#FF6B6B] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#00B4DB] transition-transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>Join Community</span>
              <Users size={16} className="text-white" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-black/20 bg-[#06D6A0] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#6C5CE7] transition-transform hover:-translate-y-1"
            >
              <span>Explore More</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* FOOTER TAGS */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 font-mono text-xs font-black text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-[#FF6B6B]" /> Session
              2026–27
            </span>
            <span className="flex items-center gap-1.5">
              <MousePointer size={15} className="text-[#06D6A0]" /> Open
              Recruitment
            </span>
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
              Titles don&apos;t build software, dedicated people do. Here is
              what defines a D4 contributor.
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
                      <span
                        className={`inline-block rounded-md border-2 border-[#090D16] px-3 py-1 text-[11px] font-black uppercase ${v.bgHighlight}`}
                      >
                        Core Ethos
                      </span>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white">{v.title}</h3>
                    <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">
                      {v.text}
                    </p>
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
              Every event, open-source tool, and campaign moves through the same
              four stages.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((stage, i) => {
              const p = D4_PILLARS[i % D4_PILLARS.length];
              const Icon = p.icon;
              return (
                <div
                  key={stage.code}
                  className={`flex flex-col justify-between rounded-3xl border-2 border-[#090D16] bg-slate-900/90 p-7 ${p.shadow} transition-transform hover:-translate-y-1.5`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-block rounded-md border-2 border-[#090D16] px-3 py-1 text-[11px] font-black uppercase ${p.bgHighlight}`}
                      >
                        {stage.code}
                      </span>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* COMMUNITY ACTIVITIES SECTION */}
        <section className="py-20 border-t-2 border-slate-800">
          <div className="text-center">
            <span className="rounded-lg border-2 border-[#181818] dark:border-[#090D16] bg-[#00B4DB] px-3.5 py-1 text-xs font-black uppercase text-[#090D16] shadow-[3px_3px_0px_0px_#181818] dark:shadow-[3px_3px_0px_0px_#FFFFFF]">
              Community Culture
            </span>
            <h2 className="mt-4 font-sans text-3xl font-black text-[#090D16] dark:text-white sm:text-5xl">
              Meetups, Hackathons & Bootcamps
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-400 max-w-xl mx-auto">
              Bridging academic learning with real engineering through active
              peer events.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {COMMUNITY_ACTIVITIES.map((act) => {
              const Icon = act.icon;
              return (
                <div
                  key={act.title}
                  className={`flex flex-col justify-between rounded-3xl border-2 border-[#090D16] bg-slate-900/90 p-7 ${act.shadow} transition-transform hover:-translate-y-1.5`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-block rounded-md border-2 border-[#090D16] px-3 py-1 text-[11px] font-black uppercase ${act.bgHighlight}`}
                      >
                        Initiative
                      </span>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white">
                      {act.title}
                    </h3>
                    <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">
                      {act.desc}
                    </p>
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
              Find Your Fit
            </span>
            <h2 className="mt-4 font-sans text-3xl font-black text-[#090D16] dark:text-white sm:text-5xl">
              Eleven Domains, One Community
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-400 max-w-xl mx-auto">
              Choose the domain where you actually want to build and contribute.
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
              Everything you need to know about the D4 Community and how we
              operate.
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

        {/* CTA BANNER */}
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
