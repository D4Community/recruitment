import { domains } from "@/data/domains";

const DOMAIN_ACCENTS = [
  {
    color: "#FF6B6B",
    shadow: "shadow-[5px_5px_0px_0px_#FF6B6B]",
    bg: "bg-[#FF6B6B] text-[#090D16]",
  },
  {
    color: "#06D6A0",
    shadow: "shadow-[5px_5px_0px_0px_#06D6A0]",
    bg: "bg-[#06D6A0] text-[#090D16]",
  },
  {
    color: "#00B4DB",
    shadow: "shadow-[5px_5px_0px_0px_#00B4DB]",
    bg: "bg-[#00B4DB] text-[#090D16]",
  },
  {
    color: "#aca6d6",
    shadow: "shadow-[5px_5px_0px_0px_#aca6d6]",
    bg: "bg-[#aca6d6] text-[#090D16]",
  },
];

export default function DomainGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((d, i) => {
        const accent = DOMAIN_ACCENTS[i % DOMAIN_ACCENTS.length];
        return (
          <div
            key={d.name}
            className={`group flex flex-col justify-between rounded-3xl border-2 border-[#090D16] bg-slate-900/90 p-6 ${accent.shadow} transition-transform hover:-translate-y-1.5`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-block rounded-md border-2 border-[#090D16] px-2.5 py-0.5 font-mono text-[11px] font-black uppercase ${accent.bg}`}
                >
                  DOMAIN {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-sans text-lg font-black text-white">
                {d.name}
              </h3>
              <p className="mt-2 text-xs font-bold leading-relaxed text-slate-300">
                {d.blurb}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}