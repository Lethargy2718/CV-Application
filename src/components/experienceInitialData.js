export const experienceInitialData = {
  0: {
    id: 0,
    title: "(Root)",
    childIds: [1, 2],
  },

  1: {
    id: 1,
    title: "TechNova Inc.",
    startDate: "2021-06",
    endDate: "",
    present: true,
    role: "Software Engineer",
    location: "Remote",
    childIds: [100],
  },

  2: {
    id: 2,
    title: "CloudHive Solutions",
    startDate: "2019-03",
    endDate: "2021-05",
    present: false,
    role: "Backend Developer",
    location: "New York, NY",
    childIds: [110],
  },

  100: {
    id: 100,
    content: "Led rebuild of internal dashboard used by 150+ employees.",
    childIds: [200, 201],
  },

  200: {
    id: 200,
    content: "Reduced average load time by 40% via query optimization.",
    childIds: [],
  },

  201: {
    id: 201,
    content: "Coordinated with design team to ship new UI overhaul.",
    childIds: [300],
  },

  300: {
    id: 300,
    content: "Created component library using Tailwind and Storybook.",
    childIds: [],
  },

  110: {
    id: 110,
    content: "Maintained and scaled microservices handling 1M+ requests/day.",
    childIds: [],
  }
};
