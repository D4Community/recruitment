export type EventItem = {
  title: string;
  meta: string;
  note: string;
  photoUrl?: string; // put a real image path (e.g. "/events/photo1.jpg") in /public
  tone: "amber" | "teal" | "coral";
};

// Sample placeholders only — swap in real titles, dates and photos from
// /public/events/*.jpg once you have them. Set photoUrl to show a real photo
// instead of the generated placeholder tile.
export const events: EventItem[] = [
  { title: "Build Weekend", meta: "48-hour build sprint", note: "Teams shipped working prototypes from zero in two days.", tone: "amber" },
  { title: "Campus Meetup", meta: "Cross-campus session", note: "Members from multiple campuses met for the first time in person.", tone: "teal" },
  { title: "Design Jam", meta: "Half-day workshop", note: "Hands-on session on visual systems for community branding.", tone: "coral" },
  { title: "Sponsor Showcase", meta: "Partner demo day", note: "Teams presented finished work to community partners.", tone: "teal" },
  { title: "Onboarding Bootcamp", meta: "New-member track", note: "First-week orientation for the incoming recruitment batch.", tone: "amber" },
  { title: "Debug Night", meta: "Open review session", note: "Live code review and Q&A across ongoing projects.", tone: "coral" },
];
