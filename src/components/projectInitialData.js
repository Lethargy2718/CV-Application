export const projectInitialData = {
    0: {
        id: 0,
        title: '(Root)',
        childIds: [1, 2]
    },

    1: {
        id: 1,
        title: "Resume Builder App",
        startDate: "2024-02",
        endDate: "2024-04",
        present: false,
        role: "Full Stack Developer",
        location: "Remote",
        childIds: [100, 101]
    },

    2: {
        id: 2,
        title: "Job Application Tracker",
        startDate: "2023-09",
        endDate: "2023-12",
        present: false,
        role: "Frontend Developer",
        location: "Remote",
        childIds: [102, 103]
    },

    100: {
        id: 100,
        content: "Designed and implemented a minimalist resume builder with dark mode, real-time editing, and export-to-PDF functionality.",
        childIds: []
    },
    101: {
        id: 101,
        content: "Created accordion-based UI using React and TailwindCSS, inspired by Refactoring UI principles.",
        childIds: []
    },

    102: {
        id: 102,
        content: "Developed a dashboard to track job applications, status, interview stages, and feedback.",
        childIds: []
    },
    103: {
        id: 103,
        content: "Implemented filter/sort controls, authentication, and local storage persistence for state management.",
        childIds: []
    }
};
