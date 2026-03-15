export const dummyData = {
    resumeType: "",
    personalInfo: {
        name: "Prarthna Awasthi",
        summary: "Aspiring mern stack devloper proficient in React, node and express.",
        githubURL: "github.com/rupadevii",
        linkedInURL: "linkedin.com/abcd",
        email: "prarthnaawasthi@gmail.com",
        phone: "8074765598",
        location: "Hyderabad"
    },
    education: [
        {
            school: "XYZ engineering college",
            degree: "Bachelor of Technology",
            startDate: "Dec 2021",
            endDate: "Jun 2025",
            cgpa: "0.0",
        },
        {
            school: "PQRS Junior College",
            degree: "Intermediate",
            startDate: "Jun 2019",
            endDate: "Sep 2021",
            cgpa: "0.0",
        },
        {
            school: "ABC High School",
            degree: "Secondary School of Certificate",
            startDate: "Jan 2014",
            endDate: "Jun 2019",
            cgpa: "0.0",
        }
    ],
    workExperience: [
        {
            companyName: "Techie Gmbh",
            startDate: "Jan 2025",
            endDate: "Jan 2026",
            designation: "Frontend Developer",
            desc: "Built a content management system. Integrated API",
            isCurrentCompany: false
        },
        {
            companyName: "Solutions Inc",
            startDate: "Jun 2024",
            endDate: "Dec 2024",
            designation: "Frontend stack developer intern",
            desc: "Built an ecommerce platform for a local store. Increased revenue by 200%",
            isCurrentCompany: false
        }
    ],
    projects: [
        {
            title: "E-commerce Platform",
            desc: "built an ecommerce platform using react and expressjs. Included JWT authentication, payment integration",
            technologies: ["react", "node", "express"],
            liveURL: "ecommerce.vercel.app",
            githubURL: "github.com/e-commerce"
        },
        {
            title: "Content management system",
            desc: "Built a content management system using react and node",
            technologies: ["react", "redux"],
            liveURL: "todo.vercel.app",
            githubURL: "github.com/todo"
        },
        {
            title: "resume builder",
            desc: "Built a resume builder using geminiAPI and react",
            technologies: ["react", "tailwind"],
            liveURL: "resume.vercel.app",
            githubURL: "github.com/resume"
        }
    ],
    skills: {
        technical: ["React", "Javascript", "Node", "Express"],
        soft: ["Communication", "Team"],
        tools: ["git", "github", "postman"]
    }
}