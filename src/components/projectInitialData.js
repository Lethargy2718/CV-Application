export const projectInitialData = {
  0: {
    id: 0,
    title: "(Root)",
    childIds: [1, 2, 3],
  },

  1: {
    id: 1,
    title: "Internal Design System Revamp",
    startDate: "2023-01",
    endDate: "2023-06",
    present: false,
    role: "UI/UX Engineer",
    location: "Remote",
    childIds: [100, 101],
  },

  2: {
    id: 2,
    title: "Automated Data Quality Pipeline",
    startDate: "2022-07",
    endDate: "2022-12",
    present: false,
    role: "Data Engineer",
    location: "New York, NY",
    childIds: [102, 103],
  },

  3: {
    id: 3,
    title: "AI-Powered Resume Matcher",
    startDate: "2024-02",
    endDate: "2024-04",
    present: false,
    role: "Machine Learning Engineer",
    location: "San Francisco, CA",
    childIds: [104, 105],
  },

  100: {
    id: 100,
    content: "Led the migration from legacy design tokens to a scalable Figma-based system integrated with Tailwind.",
    childIds: [],
  },
  101: {
    id: 101,
    content: "Developed custom component libraries with full accessibility and theming support for light/dark modes.",
    childIds: [],
  },

  102: {
    id: 102,
    content: "Built a Spark-based pipeline for anomaly detection across distributed telemetry data from 12+ sources.",
    childIds: [],
  },
  103: {
    id: 103,
    content: "Implemented data validation rules using Great Expectations with real-time Slack/Email alerting.",
    childIds: [],
  },

  104: {
    id: 104,
    content: "Trained and deployed a BERT-based model to extract job-relevant phrases from applicant resumes.",
    childIds: [],
  },
  105: {
    id: 105,
    content: "Integrated with third-party ATS platforms and reduced recruiter screening time by 40%.",
    childIds: [],
  },
};
