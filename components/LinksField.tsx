"use client";

import { linkPlatforms } from "@/data/linkPlatforms";
import { Trash2, Plus } from "lucide-react";

export type LinkRow = { id: string; platform: string; url: string };

export function newLinkRow(): LinkRow {
  return {
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9),
    platform: linkPlatforms[0] || "LinkedIn",
    url: "",
  };
}

const FIELD_INPUT_CLS =
  "w-full rounded-2xl border-2 border-slate-800 bg-[#121826] px-4 py-3.5 font-sans text-xs font-bold text-slate-100 placeholder-slate-500 shadow-[3px_3px_0px_0px_#090D16] transition-all focus:border-[#06D6A0] focus:outline-none";

export default function LinksField({
  rows,
  onChange,
}: {
  rows: LinkRow[];
  onChange: (rows: LinkRow[]) => void;
}) {
  function update(id: string, patch: Partial<LinkRow>) {
    onChange(rows.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }

  function remove(id: string) {
    if (rows.length === 1) return;
    onChange(rows.filter((r) => r.id !== id));
  }

  function add() {
    onChange([...rows, newLinkRow()]);
  }

  return (
    <div className="space-y-4 w-full">
      {rows.length === 0 && (
        <p className="font-mono text-xs font-bold text-slate-400">
          No links added yet, totally optional.
        </p>
      )}

      {rows.map((row) => (
        <div
          key={row.id}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
        >
          {/* Mobile Top Row: Dropdown + Delete Button */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={row.platform}
              onChange={(e) => update(row.id, { platform: e.target.value })}
              className={`${FIELD_INPUT_CLS} flex-1 sm:w-44 shrink-0`}
              aria-label="Link platform"
            >
              {linkPlatforms.map((p) => (
                <option key={p} value={p} className="bg-[#121826] text-white">
                  {p}
                </option>
              ))}
            </select>

            {/* Mobile Delete Button */}
            {rows.length > 1 && (
              <button
                type="button"
                onClick={() => remove(row.id)}
                className="flex sm:hidden h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] text-white shadow-[2px_2px_0px_0px_#FFFFFF] hover:opacity-90"
                title="Remove link"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>

          {/* URL Input */}
          <input
            type="url"
            value={row.url}
            onChange={(e) => update(row.id, { url: e.target.value })}
            placeholder="https://"
            className={`${FIELD_INPUT_CLS} flex-1 min-w-0`}
            aria-label={`${row.platform} URL`}
          />

          {/* Desktop Delete Button */}
          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => remove(row.id)}
              className="hidden sm:flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] text-white shadow-[2px_2px_0px_0px_#FFFFFF] hover:opacity-90"
              title="Remove link"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#06D6A0] hover:underline"
      >
        <Plus size={14} /> Add another link
      </button>
    </div>
  );
}