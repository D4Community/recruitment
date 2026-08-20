export type Stage = {
  code: string;
  title: string;
  verb: string;
  description: string;
};

// D4 = Discite -> Develop -> Debug -> Deploy. This is real, named content
// (it's on the community's own footer/tagline), so it's used as a structural
// device across the site rather than a decorative numbered list.
export const pipeline: Stage[] = [
  {
    code: "01",
    title: "Discite",
    verb: "learn",
    description:
      "Workshops, study groups and open resources so members can pick up the skills their track needs, at their own pace.",
  },
  {
    code: "02",
    title: "Develop",
    verb: "build",
    description:
      "Real projects with real owners, tools, campaigns, events and content that the community actually ships.",
  },
  {
    code: "03",
    title: "Debug",
    verb: "iterate",
    description:
      "Feedback loops, reviews and retros. Work gets critiqued in the open, and it gets better because of it.",
  },
  {
    code: "04",
    title: "Deploy",
    verb: "ship",
    description:
      "Finished work goes out to campuses and the wider community, an event runs, a tool launches, a partnership lands.",
  },
];
