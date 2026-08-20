const lines: { tag: string; tone: "ok" | "run"; text: string }[] = [
  { tag: "discite", tone: "ok", text: "learning tracks open to every member" },
  { tag: "develop", tone: "ok", text: "member-led projects in active build" },
  { tag: "debug", tone: "ok", text: "weekly review sessions, open critique" },
  { tag: "deploy", tone: "run", text: "recruitment 2026–27 - applications open" },
];

export default function BuildLog() {
  return (
    <div className="w-full max-w-md rounded-xl border border-line bg-ink-soft font-mono text-[13px] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
        <span className="ml-3 text-[11px] uppercase tracking-[0.14em] text-muted">
          d4 --status
        </span>
      </div>
      <div className="space-y-2.5 px-4 py-4">
        {lines.map((line, i) => (
          <p
            key={line.tag}
            className="rise flex flex-wrap items-baseline gap-2"
            style={{ animationDelay: `${i * 160}ms` }}
          >
            <span className={line.tone === "ok" ? "text-teal" : "text-amber"}>
              [{line.tone}]
            </span>
            <span className="text-paper">{line.tag}</span>
            <span className="text-muted">— {line.text}</span>
          </p>
        ))}
        <p className="flex items-center gap-1.5 pt-1 text-muted">
          <span>$</span>
          <span className="caret inline-block h-3.5 w-2 bg-teal/80" />
        </p>
      </div>
    </div>
  );
}
