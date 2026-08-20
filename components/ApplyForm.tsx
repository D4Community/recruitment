"use client";

import { useState, useEffect, type FormEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { domains } from "@/data/domains";
import { CheckCircle2, Trash2, Plus, Send, X } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export type LinkRow = {
  id: string;
  platform: string;
  url: string;
};

export function newLinkRow(): LinkRow {
  return {
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9),
    platform: "LinkedIn",
    url: "",
  };
}

const currentYears = [
  "1st year",
  "2nd year",
  "3rd year",
  "4th year",
  "Postgraduate",
  "Recent graduate",
  "Other",
];

const campuses = [
  "Chandigarh / Mohali",
  "Ludhiana",
  "Jalandhar",
  "Bangalore",
  "LPU",
  "NITTE",
  "Other / Independent",
];

const teamRoles = [
  "Leader",
  "Executor",
  "Problem solver",
  "Strategist",
  "Communicator",
  "Coordinator",
  "Depends on the situation",
];

const commitments = [
  "2–4 hours / week",
  "4–6 hours / week",
  "6–8 hours / week",
  "8+ hours / week",
];

const FIELD_INPUT_CLS =
  "w-full rounded-2xl border-2 border-slate-800 bg-[#121826] px-4 py-3.5 font-sans text-xs font-bold text-slate-100 placeholder-slate-500 shadow-[3px_3px_0px_0px_#090D16] transition-all focus:border-[#06D6A0] focus:outline-none";

export default function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasExperience, setHasExperience] = useState<"Yes" | "No" | "">("");
  const [links, setLinks] = useState<LinkRow[]>([newLinkRow()]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scrolling when success modal is active
  useEffect(() => {
    if (status === "success") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const payload = {
      ...data,
      hasExperience,
      links: links
        .filter((l) => l.url.trim())
        .map((l) => ({ platform: l.platform, url: l.url.trim() })),
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      form.reset();
      setLinks([newLinkRow()]);
      setHasExperience("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* 01 — ABOUT YOU */}
        <FormSection
          eyebrow="01: About you"
          title="Start with you"
          color="#FF6B6B"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full name" required>
              <input
                required
                name="name"
                className={FIELD_INPUT_CLS}
                placeholder="Jordan Lee"
              />
            </Field>
            <Field label="Email address" required>
              <input
                required
                type="email"
                name="email"
                className={FIELD_INPUT_CLS}
                placeholder="you@college.edu"
              />
            </Field>
            <Field label="Phone number" required>
              <input
                required
                type="tel"
                name="phone"
                className={FIELD_INPUT_CLS}
                placeholder="+91 98765 43210"
              />
            </Field>
            <Field label="WhatsApp number" hint="Optional, if different">
              <input
                type="tel"
                name="whatsapp"
                className={FIELD_INPUT_CLS}
                placeholder="+91 98765 43210"
              />
            </Field>
            <Field label="College / university" required>
              <input
                required
                name="college"
                className={FIELD_INPUT_CLS}
                placeholder="Your campus name"
              />
            </Field>
            <Field label="Current year" required>
              <select
                required
                name="currentYear"
                className={FIELD_INPUT_CLS}
                defaultValue=""
              >
                <option value="" disabled>
                  Select year
                </option>
                {currentYears.map((y) => (
                  <option key={y} value={y} className="bg-[#121826] text-white">
                    {y}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Degree / program" hint="Optional">
              <input
                name="degree"
                className={FIELD_INPUT_CLS}
                placeholder="B.Tech, BCA, etc."
              />
            </Field>
            <Field label="Branch / specialization" hint="Optional">
              <input
                name="branch"
                className={FIELD_INPUT_CLS}
                placeholder="CSE, ECE, etc."
              />
            </Field>
            <Field label="Graduation year" hint="Optional">
              <input
                type="number"
                name="gradYear"
                className={FIELD_INPUT_CLS}
                placeholder="2028"
              />
            </Field>
            <Field label="Campus / community association" hint="Optional">
              <select name="campus" className={FIELD_INPUT_CLS} defaultValue="">
                <option value="" className="bg-[#121826] text-white">
                  Select location
                </option>
                {campuses.map((c) => (
                  <option key={c} value={c} className="bg-[#121826] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </FormSection>

        {/* 02 — LINKS */}
        <FormSection
          eyebrow="02: Links"
          title="Where can we see your work?"
          color="#06D6A0"
          lead="Totally optional, add LinkedIn, GitHub, X, Instagram, Discord, or work samples."
        >
          <LinksField rows={links} onChange={setLinks} />
        </FormSection>

        {/* 03 — DOMAIN */}
        <FormSection
          eyebrow="03: Your domain"
          title="Where do you want to build?"
          color="#aca6d6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Primary domain"
              required
              hint="Your evaluation focuses on this"
            >
              <select
                required
                name="primaryDomain"
                className={FIELD_INPUT_CLS}
                defaultValue=""
              >
                <option value="" disabled className="bg-[#121826] text-white">
                  Select a primary domain
                </option>
                {domains.map((d) => (
                  <option
                    key={d.name}
                    value={d.name}
                    className="bg-[#121826] text-white"
                  >
                    {d.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Secondary domain" hint="Optional">
              <select
                name="secondaryDomain"
                className={FIELD_INPUT_CLS}
                defaultValue=""
              >
                <option value="" className="bg-[#121826] text-white">
                  None
                </option>
                {domains.map((d) => (
                  <option
                    key={d.name}
                    value={d.name}
                    className="bg-[#121826] text-white"
                  >
                    {d.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </FormSection>

        {/* 04 — EXPERIENCE */}
        <FormSection
          eyebrow="04: Experience"
          title="Show us what you've done"
          color="#FF6B6B"
        >
          <div className="space-y-6">
            <Field
              label="Worked with a community, club, org, or startup before?"
              hint="Optional"
            >
              <div className="flex gap-4 pt-1">
                {(["Yes", "No"] as const).map((v) => (
                  <label
                    key={v}
                    className={`flex cursor-pointer items-center gap-2 rounded-2xl border-2 border-slate-800 bg-[#121826] px-5 py-3 text-xs font-black text-white transition-colors ${
                      hasExperience === v
                        ? "border-[#FF6B6B] bg-[#FF6B6B]/10"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="hasExperienceRadio"
                      value={v}
                      checked={hasExperience === v}
                      onChange={() => setHasExperience(v)}
                      className="accent-[#FF6B6B]"
                    />
                    {v}
                  </label>
                ))}
              </div>
            </Field>

            {hasExperience === "Yes" && (
              <div className="grid gap-6 border-l-2 border-[#FF6B6B] pl-4 sm:grid-cols-2">
                <Field label="Organization / community" hint="Optional">
                  <input
                    name="expOrg"
                    className={FIELD_INPUT_CLS}
                    placeholder="Org name"
                  />
                </Field>
                <Field label="Your role" hint="Optional">
                  <input
                    name="expRole"
                    className={FIELD_INPUT_CLS}
                    placeholder="Lead / Member"
                  />
                </Field>
                <Field label="Duration" hint="Optional">
                  <input
                    name="expDuration"
                    className={FIELD_INPUT_CLS}
                    placeholder="e.g. 6 months"
                  />
                </Field>
                <Field label="Biggest thing you owned" hint="Optional">
                  <input
                    name="expOwned"
                    className={FIELD_INPUT_CLS}
                    placeholder="Event / App"
                  />
                </Field>
                <Field
                  label="What did you actually contribute?"
                  hint="Optional"
                  full
                >
                  <textarea
                    name="expContribution"
                    className={`${FIELD_INPUT_CLS} min-h-[90px]`}
                    placeholder="Describe your core contribution..."
                  />
                </Field>
                <Field label="What was the outcome?" hint="Optional" full>
                  <textarea
                    name="expOutcome"
                    className={`${FIELD_INPUT_CLS} min-h-[90px]`}
                    placeholder="Impact or results..."
                  />
                </Field>
              </div>
            )}

            <Field
              label="A project or achievement you're genuinely proud of"
              hint="Optional"
            >
              <textarea
                name="proudProject"
                className={`${FIELD_INPUT_CLS} min-h-[110px]`}
                placeholder="Tell us why it matters to you..."
              />
            </Field>
          </div>
        </FormSection>

        {/* 05 — MINDSET */}
        <FormSection
          eyebrow="05: D4 mindset"
          title="What drives you?"
          color="#06D6A0"
        >
          <div className="space-y-6">
            <Field label="Why D4?" required>
              <textarea
                required
                name="why"
                className={`${FIELD_INPUT_CLS} min-h-[120px]`}
                placeholder="What makes you want to build with this community?"
              />
            </Field>
            <Field
              label="What could you contribute that most applicants may not?"
              hint="Optional"
            >
              <textarea
                name="uniqueContribution"
                className={`${FIELD_INPUT_CLS} min-h-[90px]`}
                placeholder="Unique skills or perspectives..."
              />
            </Field>
            <Field
              label="A time you took ownership without being asked"
              hint="Optional"
            >
              <textarea
                name="ownershipStory"
                className={`${FIELD_INPUT_CLS} min-h-[90px]`}
                placeholder="Share a brief situation..."
              />
            </Field>
            <Field
              label="Something that didn't work out & what you learned"
              hint="Optional"
            >
              <textarea
                name="failureStory"
                className={`${FIELD_INPUT_CLS} min-h-[90px]`}
                placeholder="What happened and what changed?"
              />
            </Field>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Natural role in a team" hint="Optional">
                <select
                  name="teamRole"
                  className={FIELD_INPUT_CLS}
                  defaultValue=""
                >
                  <option value="" className="bg-[#121826] text-white">
                    Select role
                  </option>
                  {teamRoles.map((r) => (
                    <option key={r} value={r} className="bg-[#121826] text-white">
                      {r}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Realistic weekly commitment" required>
                <select
                  required
                  name="commitment"
                  className={FIELD_INPUT_CLS}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#121826] text-white">
                    Select hours
                  </option>
                  {commitments.map((c) => (
                    <option key={c} value={c} className="bg-[#121826] text-white">
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </div>
        </FormSection>

        {/* 06 — SCENARIO */}
        <FormSection
          eyebrow="06: Scenario"
          title="Pressure reveals ownership"
          color="#aca6d6"
          lead="You're responsible for an important D4 initiative. The deadline is tomorrow, one teammate stopped responding, and another submitted incomplete work. What would you do?"
        >
          <Field label="Your answer" hint="Optional">
            <textarea
              name="scenario"
              className={`${FIELD_INPUT_CLS} min-h-[130px]`}
              placeholder="How would you handle this situation?"
            />
          </Field>
        </FormSection>

        {/* 07 — AVAILABILITY */}
        <FormSection
          eyebrow="07: Availability"
          title="Can we count on you?"
          color="#FF6B6B"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field
              label="Willing to contribute through the academic year?"
              hint="Optional"
            >
              <select
                name="availabilityFullYear"
                className={FIELD_INPUT_CLS}
                defaultValue=""
              >
                <option value="" className="bg-[#121826] text-white">
                  Select
                </option>
                <option value="Yes" className="bg-[#121826] text-white">
                  Yes
                </option>
                <option value="No" className="bg-[#121826] text-white">
                  No
                </option>
              </select>
            </Field>
            <Field label="Online / offline meetings" hint="Optional">
              <select
                name="meetingPref"
                className={FIELD_INPUT_CLS}
                defaultValue=""
              >
                <option value="" className="bg-[#121826] text-white">
                  Select preference
                </option>
                <option
                  value="Comfortable with both"
                  className="bg-[#121826] text-white"
                >
                  Comfortable with both
                </option>
                <option value="Mostly online" className="bg-[#121826] text-white">
                  Mostly online
                </option>
                <option
                  value="Mostly offline"
                  className="bg-[#121826] text-white"
                >
                  Mostly offline
                </option>
              </select>
            </Field>
            <Field label="Cross-campus collaboration" hint="Optional">
              <select
                name="crossCampus"
                className={FIELD_INPUT_CLS}
                defaultValue=""
              >
                <option value="" className="bg-[#121826] text-white">
                  Select
                </option>
                <option value="Yes" className="bg-[#121826] text-white">
                  Yes
                </option>
                <option value="Maybe" className="bg-[#121826] text-white">
                  Maybe
                </option>
                <option value="No" className="bg-[#121826] text-white">
                  No
                </option>
              </select>
            </Field>
            <Field label="Preferred working days / time" hint="Optional">
              <input
                name="preferredDays"
                className={FIELD_INPUT_CLS}
                placeholder="e.g. Weekday evenings"
              />
            </Field>
          </div>
        </FormSection>

        {/* 08 — FINAL */}
        <FormSection
          eyebrow="08: One last thing"
          title="What will you build?"
          color="#06D6A0"
        >
          <div className="space-y-6">
            <Field
              label="If selected, what's one thing you want to build or improve in D4?"
              hint="Optional"
            >
              <textarea
                name="buildIdea"
                className={`${FIELD_INPUT_CLS} min-h-[110px]`}
                placeholder="Share an event, tool, or initiative idea..."
              />
            </Field>

            <div className="space-y-3 pt-2">
              <Check
                name="agreeAccurate"
                label="The information I've provided is accurate."
              />
              <Check
                name="agreeProcess"
                label="I understand this is community team recruitment, not a placement or internship."
              />
              <Check
                name="agreeRoleEval"
                label="I understand I will be evaluated primarily for my selected domain."
              />
              <Check
                name="agreeCriteria"
                label="I understand selection depends on skills, consistency, and role fit."
              />
            </div>
          </div>
        </FormSection>

        {status === "error" && (
          <p className="rounded-2xl border-2 border-[#FF6B6B] bg-[#FF6B6B]/10 px-5 py-3.5 font-mono text-xs font-bold text-[#FF6B6B]">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] px-8 py-4 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#06D6A0] transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? (
            "Submitting Application..."
          ) : (
            <>
              <span>Submit Application</span>
              <Send size={16} />
            </>
          )}
        </button>
      </form>

      {/* SUCCESS MODAL POP-UP */}
      {status === "success" &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#090D16]/80 backdrop-blur-md p-4 select-none animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-3xl border-2 border-[#090D16] bg-[#121826] p-8 text-center shadow-[8px_8px_0px_0px_#06D6A0] dark:border-white">
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-white text-[#090D16] shadow-[2px_2px_0px_0px_#FF6B6B] transition-all hover:bg-[#FF6B6B] hover:text-white dark:border-white"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* SUCCESS ICON */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-[#06D6A0] text-[#090D16] shadow-[4px_4px_0px_0px_#FFFFFF]">
                <CheckCircle2 size={36} />
              </div>

              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#06D6A0]">
                Application received ✓
              </span>

              {/* REQUESTED STYLING HEADING */}
              <h2 className="mt-3 font-sans text-3xl font-black text-white sm:text-4xl">
                Thanks for applying to D4!
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm font-bold text-slate-300">
                If shortlisted, our leads will reach out via email or
                WhatsApp for the next conversation.
              </p>

              {/* CLOSE CTA BUTTON */}
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-white bg-[#FF6B6B] px-8 py-3.5 font-mono text-xs font-black uppercase text-white shadow-[4px_4px_0px_0px_#06D6A0] transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Done / Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function LinksField({
  rows,
  onChange,
}: {
  rows: LinkRow[];
  onChange: (rows: LinkRow[]) => void;
}) {
  const platforms = [
    "LinkedIn",
    "GitHub",
    "X / Twitter",
    "Instagram",
    "Discord",
    "Portfolio",
    "Work Sample",
    "Other",
  ];

  const updateRow = (id: string, field: "platform" | "url", value: string) => {
    onChange(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const removeRow = (id: string) => {
    if (rows.length === 1) return;
    onChange(rows.filter((row) => row.id !== id));
  };

  const addRow = () => {
    onChange([...rows, newLinkRow()]);
  };

  return (
    <div className="space-y-4 w-full">
      {rows.map((row) => (
        <div
          key={row.id}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
        >
          {/* Top row on small screens: Dropdown + Delete Button */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={row.platform}
              onChange={(e) => updateRow(row.id, "platform", e.target.value)}
              className={`${FIELD_INPUT_CLS} flex-1 sm:w-44 shrink-0`}
            >
              {platforms.map((p) => (
                <option key={p} value={p} className="bg-[#121826] text-white">
                  {p}
                </option>
              ))}
            </select>

            {/* Mobile Delete Button */}
            {rows.length > 1 && (
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                className="flex sm:hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] text-white shadow-[2px_2px_0px_0px_#FFFFFF] hover:opacity-90"
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
            onChange={(e) => updateRow(row.id, "url", e.target.value)}
            placeholder="https://..."
            className={`${FIELD_INPUT_CLS} flex-1 min-w-0`}
          />

          {/* Desktop Delete Button */}
          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => removeRow(row.id)}
              className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[#090D16] bg-[#FF6B6B] text-white shadow-[2px_2px_0px_0px_#FFFFFF] hover:opacity-90"
              title="Remove link"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="inline-flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#06D6A0] hover:underline"
      >
        <Plus size={14} /> Add another link
      </button>
    </div>
  );
}

function FormSection({
  eyebrow,
  title,
  lead,
  color,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t-2 border-slate-800 pt-8 first:border-0 first:pt-0">
      <span
        className="inline-block rounded-md border-2 border-[#090D16] px-3 py-1 font-mono text-[11px] font-black uppercase text-[#090D16]"
        style={{ backgroundColor: color }}
      >
        {eyebrow}
      </span>
      <h2 className="mt-3 font-sans text-2xl font-black text-[#181818] sm:text-3xl dark:text-white">
        {title}
      </h2>
      {lead && (
        <p className="mt-1 max-w-xl text-xs font-bold leading-relaxed text-slate-400">
          {lead}
        </p>
      )}
      <div className="mt-6 w-full">{children}</div>
    </div>
  );
}

function Field({
  label,
  hint,
  required,
  full,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="flex items-center justify-between font-sans text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
        <span>
          {label}
          {required && <span className="ml-1 text-[#FF6B6B]">*</span>}
        </span>
        {hint && (
          <span className="font-mono text-[10px] font-normal normal-case text-slate-400">
            {hint}
          </span>
        )}
      </span>
      <span className="mt-2 block w-full">{children}</span>
    </label>
  );
}

function Check({ name, label }: { name: string; label: string }) {
  return (
    <label className="flex items-start gap-3 font-sans text-xs font-bold text-[#181818] dark:text-slate-300">
      <input
        required
        type="checkbox"
        name={name}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-[#181818] bg-white accent-[#06D6A0] dark:border-slate-800 dark:bg-[#121826]"
      />
      <span>{label}</span>
    </label>
  );
}