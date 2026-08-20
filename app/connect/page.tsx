"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Globe,
  UserPlus,
} from "lucide-react";

// Full List of Official D4 Community Outlets & Links
const CONNECT_LINKS = [
  {
    label: "WhatsApp Group",
    hint: "Day-to-day community chatter, discussions & real-time updates",
    href: "https://chat.whatsapp.com/Khwy3LEyjdX4Kx8VJ1MXmW",
    color: "#06D6A0",
    bgHighlight: "bg-[#06D6A0] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#06D6A0]",
    brandType: "whatsapp",
  },
  {
    label: "WhatsApp Channel",
    hint: "Official announcements & broadcast notifications",
    href: "https://whatsapp.com/channel/0029Va8QbTU8V0trPdleNl2I",
    color: "#25D366",
    bgHighlight: "bg-[#25D366] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#25D366]",
    brandType: "whatsapp",
  },
  {
    label: "Discord Server",
    hint: "Voice lounges, domain channels, live streams & code reviews",
    href: "https://discord.com/invite/RPpYB8JpUQ",
    color: "#5865F2",
    bgHighlight: "bg-[#5865F2] text-white",
    shadow: "shadow-[5px_5px_0px_0px_#5865F2]",
    brandType: "discord",
  },
  {
    label: "GitHub Organization",
    hint: "Explore open-source repositories & contribute to student projects",
    href: "https://github.com/D4Community",
    color: "#FFFFFF",
    bgHighlight: "bg-white text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#FFFFFF]",
    brandType: "github",
  },
  {
    label: "LinkedIn Page",
    hint: "Professional updates, event highlights & team announcements",
    href: "https://www.linkedin.com/company/d4community",
    color: "#0077B5",
    bgHighlight: "bg-[#0077B5] text-white",
    shadow: "shadow-[5px_5px_0px_0px_#0077B5]",
    brandType: "linkedin",
  },
  {
    label: "Twitter / X",
    hint: "Tech news, threads, event updates & live coverage",
    href: "https://twitter.com/D4community",
    color: "#00B4DB",
    bgHighlight: "bg-[#00B4DB] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#00B4DB]",
    brandType: "twitter",
  },
  {
    label: "Instagram",
    hint: "Behind the scenes, meetup photos, reels & community stories",
    href: "https://www.instagram.com/d4community",
    color: "#E4405F",
    bgHighlight: "bg-[#E4405F] text-white",
    shadow: "shadow-[5px_5px_0px_0px_#E4405F]",
    brandType: "instagram",
  },
  {
    label: "YouTube Channel",
    hint: "Session recordings, workshop replays & tech talks",
    href: "https://www.youtube.com/@d4-community",
    color: "#FF0000",
    bgHighlight: "bg-[#FF0000] text-white",
    shadow: "shadow-[5px_5px_0px_0px_#FF0000]",
    brandType: "youtube",
  },
  {
    label: "Commudle Platform",
    hint: "RSVP for upcoming community events, workshops & hackathons",
    href: "https://www.commudle.com/communities/d4-community",
    color: "#F97316",
    bgHighlight: "bg-[#F97316] text-[#090D16]",
    shadow: "shadow-[5px_5px_0px_0px_#F97316]",
    brandType: "commudle",
  },
  {
    label: "Apply to be a Volunteer",
    hint: "Join our core execution team & domain leads for session 2026–27",
    href: "https://recruitment.d4community.com",
    color: "#FF6B6B",
    bgHighlight: "bg-[#FF6B6B] text-white",
    shadow: "shadow-[5px_5px_0px_0px_#FF6B6B]",
    brandType: "volunteer",
  },
];

// Safe Inline Brand Icon Renderer (Prevents missing Lucide export build errors)
function RenderBrandIcon({ type }: { type: string }) {
  switch (type) {
    case "whatsapp":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.8 11.8 0 005.71 1.487h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      );
    case "github":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.09.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.39-1.305.705-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "discord":
      return (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.722 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case "volunteer":
      return <UserPlus size={20} />;
    default:
      return <Globe size={20} />;
  }
}

export default function ConnectPage() {
  return (
    <div className="font-sans relative min-h-screen bg-white text-[#090D16] antialiased transition-colors duration-200 selection:bg-[#06D6A0] selection:text-[#090D16] dark:bg-black dark:text-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
          
          {/* BADGES ROW */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-[#121826] px-4 py-1.5 font-mono text-xs font-black uppercase text-slate-200 shadow-[3px_3px_0px_0px_#FF6B6B]">
              <Sparkles size={14} className="text-[#FF6B6B]" />
              D4 SOCIAL DIRECTORY
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="mx-auto mt-8 max-w-5xl font-sans text-4xl font-extrabold tracking-tight text-[#090D16] dark:text-white sm:text-6xl lg:text-7xl lg:leading-[1.12]">
            Find Us <em className="font-serif italic font-normal text-slate-600 dark:text-slate-300">across the</em>{" "}
            <span className="inline-block -rotate-1 hover:rotate-1 rounded-2xl border-2 border-[#090D16] bg-[#06D6A0] px-4 py-1 text-[#090D16] shadow-[5px_5px_0px_0px_#FFFFFF]">
              Digital Web
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
            Every official channel D4 shows up, announcements, open-source repositories, community chatter, and team recruitment.
          </p>
        </section>

        {/* CONNECT LINKS GRID */}
        <section className="py-12 border-t-2 border-slate-800">
          <div className="text-center">
            <span className="rounded-lg border-2 border-[#181818] dark:border-[#090D16] bg-[#00B4DB] px-3.5 py-1 text-xs font-black uppercase text-[#090D16] shadow-[3px_3px_0px_0px_#181818] dark:shadow-[3px_3px_0px_0px_#FFFFFF]">
              Official Outlets
            </span>
            <h2 className="mt-4 font-sans text-3xl font-black text-[#090D16] dark:text-white sm:text-5xl">
              Connect & Follow Us
            </h2>
            <p className="mt-3 text-sm font-bold text-slate-400 max-w-xl mx-auto">
              Select any channel below to jump straight into our developer community networks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONNECT_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-between rounded-3xl border-2 border-[#090D16] bg-slate-900/90 p-7 ${l.shadow} transition-transform hover:-translate-y-1.5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#090D16] ${l.bgHighlight}`}>
                      <RenderBrandIcon type={l.brandType} />
                    </div>
                    <span className="inline-block rounded-md border-2 border-[#090D16] bg-slate-800 px-3 py-1 text-[11px] font-black uppercase text-slate-300">
                      Official Channel
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white">{l.label}</h3>
                  <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">
                    {l.hint}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t-2 border-slate-800/80 pt-4 text-xs font-black">
                  <span style={{ color: l.color }}>Join / Open Link</span>
                  <ArrowUpRight
                    size={18}
                    style={{ color: l.color }}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            ))}
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