export const experienceInitialData = {
    0: {
        id: 0,
        title: '(Root)',
        childIds: [1, 2, 3]
    },
    1: {
        id: 1,
        title: "Resume Worded & Co.",
        startDate: "2017-10",
        endDate: "",
        present: false,
        role: "Financial Data Analyst, Business Development & Operations",
        location: "San Francisco, CA",
        childIds: [100, 101, 102],
    },
    2: {
        id: 2,
        title: "Instamore",
        startDate: "2015-06",
        endDate: "2017-10",
        present: false,
        role: "Associate Product Manager",
        location: "San Francisco, CA",
        childIds: [103, 104, 105],
    },
    3: {
        id: 3,
        title: "Resume Worded & Co.",
        startDate: "2011-06",
        endDate: "2013-05",
        present: false,
        role: "Associate Product Manager",
        location: "Austin, TX",
        childIds: [106, 107],
    },

    100: {
        id: 100,
        content: "Managed cross-functional team of 10 in 3 locations (Dallas, Austin and New York), ranging from entry-level analysts to vice presidents, and collaborated with business development, data analysis, operations and marketing.",
        childIds: [200, 201, 202]
    },
    101: {
        id: 101,
        content: "Achieved $200K reduction in department overspend by establishing ROI metrics and budget controls to improve prioritization in the $4MM department budget.",
        childIds: []
    },
    102: {
        id: 102,
        content: "Spearheaded a major pricing restructure by redirecting focus on consumer willingness to pay instead of product cost; increased average sale 35% and margin 12%.",
        childIds: []
    },
    103: {
        id: 103,
        content: "Promoted within 12 months due to strong performance and organizational impact (1 year ahead of schedule).",
        childIds: []
    },
    104: {
        id: 104,
        content: "Identified steps to reduce return rates by 10% resulting in an eventual $75k cost savings.",
        childIds: []
    },
    105: {
        id: 105,
        content: "Analyzed data from 2500K monthly active users to guide marketing and product strategies; increased engagement time by 2x, 39% drop-off rate, 3x shares on social.",
        childIds: []
    },
    106: {
        id: 106,
        content: "Drove redevelopment of internal tracking system used by 125 employees, resulting in 20+ new features, 21% save/load time reduction, and 15% operation time gain.",
        childIds: []
    },
    107: {
        id: 107,
        content: "",
        childIds: []
    },

    200: {
        id: 200,
        content: "Launched Miami office with lead Director and recruited and managed new team of 10 employees; grew office revenue by 200% in first nine months.",
        childIds: []
    },
    201: {
        id: 201,
        content: "Designed training and peer-mentoring programs for the incoming class of 25 analysts in 2017; reduced onboarding time for new hires by 50%.",
        childIds: []
    },
    202: {
        id: 202,
        content: "Collaborated with business development, operations, and marketing teams across three cities.",
        childIds: []
    }
};