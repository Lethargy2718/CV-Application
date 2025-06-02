export const skillInitialData = {
  0: {
    id: 0,
    title: "(Root)",
    childIds: [1, 2, 3, 4]
  },
  1: {
    id: 1,
    category: "Programming Languages",
    childIds: [100, 101, 102, 103]
  },
  2: {
    id: 2,
    category: "Frameworks & Libraries",
    childIds: [104, 105, 106, 107]
  },
  3: {
    id: 3,
    category: "Tools & Platforms",
    childIds: [108, 109, 110, 111]
  },
  4: {
    id: 4,
    category: "Soft Skills",
    childIds: [112, 113, 114]
  },

  100: { id: 100, content: "Python", childIds: [] },
  101: { id: 101, content: "C", childIds: [] },
  102: { id: 102, content: "JavaScript", childIds: [] },
  103: { id: 103, content: "TypeScript", childIds: [] },

  104: { id: 104, content: "React", childIds: [] },
  105: { id: 105, content: "TailwindCSS", childIds: [] },
  106: { id: 106, content: "Express", childIds: [] },
  107: { id: 107, content: "Next.js", childIds: [] },

  108: { id: 108, content: "Git", childIds: [] },
  109: { id: 109, content: "Docker", childIds: [] },
  110: { id: 110, content: "Linux", childIds: [] },
  111: { id: 111, content: "Vercel", childIds: [] },

  112: { id: 112, content: "Leadership", childIds: [] },
  113: { id: 113, content: "Communication", childIds: [] },
  114: { id: 114, content: "Problem Solving", childIds: [] }
};
