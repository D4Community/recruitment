export const linkPlatforms = [
  "LinkedIn",
  "GitHub",
  "X (Twitter)",
  "Instagram",
  "Discord",
  "Portfolio",
  "Work sample",
  "Behance",
  "Other",
] as const;

export type LinkPlatform = (typeof linkPlatforms)[number];
