import { pipeline } from "@/data/pipeline";

export default function PipelineStrip({
  active,
}: {
  /** 1-indexed stage to highlight, or omit to show all as equal/neutral */
  active?: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
      {pipeline.map((stage, i) => {
        const isActive = active === i + 1;
        return (
          <div
            key={stage.code}
            className={`flex flex-col gap-1 px-4 py-4 ${
              isActive ? "bg-ink-raised" : "bg-ink-soft"
            }`}
          >
            <span
              className={`font-mono text-[11px] tracking-[0.1em] ${
                isActive ? "text-amber" : "text-muted"
              }`}
            >
              {stage.code} · {stage.verb}
            </span>
            <span className="font-display text-base font-bold text-paper">
              {stage.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
