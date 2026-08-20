import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

const REQUIRED_FIELDS = [
  "name",
  "email",
  "phone",
  "college",
  "currentYear",
  "primaryDomain",
  "why",
  "commitment",
] as const;

const REQUIRED_AGREEMENTS = [
  "agreeAccurate",
  "agreeProcess",
  "agreeRoleEval",
  "agreeCriteria",
] as const;

type LinkRow = { platform: string; url: string };

// Every field the form can send. Only REQUIRED_FIELDS above are mandatory —
// everything else is optional and simply stored as an empty string if unset.
const OPTIONAL_STRING_FIELDS = [
  "whatsapp",
  "degree",
  "branch",
  "gradYear",
  "campus",
  "secondaryDomain",
  "hasExperience",
  "expOrg",
  "expRole",
  "expDuration",
  "expOwned",
  "expContribution",
  "expOutcome",
  "proudProject",
  "uniqueContribution",
  "ownershipStory",
  "failureStory",
  "teamRole",
  "scenario",
  "availabilityFullYear",
  "meetingPref",
  "crossCampus",
  "preferredDays",
  "buildIdea",
] as const;

function str(v: unknown) {
  return typeof v === "string" ? v : "";
}

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown>;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((f) => !str(payload[f]).trim());
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const missingAgreements = REQUIRED_AGREEMENTS.filter((f) => !payload[f]);
  if (missingAgreements.length) {
    return NextResponse.json(
      { error: "Please confirm all the agreement checkboxes before submitting." },
      { status: 400 }
    );
  }

  const links: LinkRow[] = Array.isArray(payload.links)
    ? (payload.links as unknown[])
        .filter(
          (l): l is LinkRow =>
            !!l &&
            typeof l === "object" &&
            typeof (l as LinkRow).url === "string" &&
            (l as LinkRow).url.trim() !== ""
        )
        .map((l) => ({ platform: str(l.platform) || "Other", url: l.url.trim() }))
    : [];

  const application: Record<string, string> & { links: LinkRow[] } = {
    submittedAt: new Date().toISOString(),
    links,
  } as never;

  for (const f of REQUIRED_FIELDS) application[f] = str(payload[f]).trim();
  for (const f of OPTIONAL_STRING_FIELDS) application[f] = str(payload[f]).trim();

  const supabase = getSupabaseAdmin();
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  // 1. Preferred: Supabase, if configured.
  if (supabase) {
    const { error } = await supabase.from("applications").insert({
      name: application.name,
      email: application.email,
      phone: application.phone,
      whatsapp: application.whatsapp || null,
      college: application.college,
      current_year: application.currentYear,
      degree: application.degree || null,
      branch: application.branch || null,
      grad_year: application.gradYear || null,
      campus: application.campus || null,
      primary_domain: application.primaryDomain,
      secondary_domain: application.secondaryDomain || null,
      has_experience: application.hasExperience || null,
      exp_org: application.expOrg || null,
      exp_role: application.expRole || null,
      exp_duration: application.expDuration || null,
      exp_owned: application.expOwned || null,
      exp_contribution: application.expContribution || null,
      exp_outcome: application.expOutcome || null,
      proud_project: application.proudProject || null,
      why: application.why,
      unique_contribution: application.uniqueContribution || null,
      ownership_story: application.ownershipStory || null,
      failure_story: application.failureStory || null,
      team_role: application.teamRole || null,
      commitment: application.commitment,
      scenario: application.scenario || null,
      availability_full_year: application.availabilityFullYear || null,
      meeting_pref: application.meetingPref || null,
      cross_campus: application.crossCampus || null,
      preferred_days: application.preferredDays || null,
      build_idea: application.buildIdea || null,
      links,
    });

    if (error) {
      console.error("Supabase insert failed:", error);
      return NextResponse.json(
        { error: "Could not save your application right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  // 2. Fallback: Google Sheets, via an Apps Script Web App.
  if (webhookUrl) {
    try {
      const sheetRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...application,
          links: JSON.stringify(links),
        }),
      });

      if (!sheetRes.ok) throw new Error(`Sheet webhook responded with ${sheetRes.status}`);

      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Failed to forward application to Google Sheets:", err);
      return NextResponse.json(
        { error: "Could not save your application right now. Please try again shortly." },
        { status: 502 }
      );
    }
  }

  // 3. Local dev fallback only — see README before deploying.
  try {
    const filePath = path.join(process.cwd(), "data", "submissions.local.json");
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await fs.readFile(filePath, "utf-8"));
    } catch {
      existing = [];
    }
    existing.unshift(application);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
    console.warn(
      "No SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY or GOOGLE_SHEETS_WEBHOOK_URL set - application saved locally to data/submissions.local.json. See README.md."
    );
    return NextResponse.json({ ok: true, dev: true });
  } catch (err) {
    console.error("Failed to save application locally:", err);
    return NextResponse.json(
      { error: "Application storage isn't configured yet. See README.md." },
      { status: 500 }
    );
  }
}
