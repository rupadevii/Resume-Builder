import { createContext, useContext, useState } from "react";

const InfoContext = createContext()

export const InfoProvider = ({children}) => {
    // const [info, setInfo] = useState({ 
    //     resumeType: "",
    //     score: 0,
    //     personalInfo: {
    //         name: "",
    //         summary: "",
    //         githubURL: "",
    //         linkedInURL: "",
    //         email: "",
    //         phone: "",
    //         location: ""
    //     },
    //     education: [
    //         {
    //             school: "",
    //             degree: "",
    //             startDate: "",
    //             endDate: "",
    //             cgpa: "",
    //         }
    //     ],
    //     workExperience: [
    //         {
    //             companyName: "",
    //             startDate: "",
    //             endDate: "",
    //             designation: "",
    //             desc: "",
    //             isCurrentCompany: false
    //         }
    //     ],
    //     projects: [
    //         {
    //             title: "",
    //             desc: "",
    //             technologies: [],
    //             liveURL: "",
    //             githubURL: ""
    //         }
    //     ],
    //     skills: {
    //         technical: [],
    //         soft: [],
    //         tools: []
    //     }
    // })

    //dummy data
    const [info, setInfo] = useState({
        resumeType: "",
        personalInfo: {
            name: "Random Name",
            summary: "Results-driven Sales Manager with 8+ years of experience in SaaS, consistently exceeding quarterly targets by 20%+. Expert in team leadership, CRM software, and account management, looking to leverage",
            githubURL: "github.com/rupadevii",
            linkedInURL: "linkedin.com/abcd",
            email: "rupadevi@gmail.com",
            phone: "8074765598",
            location: "Hyderabad"
        },
        education: [
            {
                school: "XYZ engineering college",
                degree: "Bachelor of Technology",
                startDate: "",
                endDate: "",
                cgpa: "0.0",
            },
            {
                school: "Narayana Junior College",
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
                startDate: "",
                endDate: "",
                designation: "Product Manager",
                desc: "Improved ticket resolution time by 30% by streamlining support workflows. Created training materials that reduced onboarding time from 10 days to 6. Led weekly sprint planning meetings for a sdfgs sdfgsr sdfgsrg sdgsd.",
                isCurrentCompany: false
            },
            {
                companyName: "Solutions Inc",
                startDate: "",
                endDate: "",
                designation: "Product Specialist",
                desc: "Responsible for managing customer service requests. Helped with updating internal documentation. Worked on a variety of tasks related to marketing. Was Responsible for managing customer service re sdfsdg sdfgsdrgsk sdjfsdk sdftwer",
                isCurrentCompany: false
            }
        ],
        projects: [
            {
                title: "E-commerce Platform",
                desc: "built an ecommerce platform using react and expressjs blah blah blah. built an ecommerce platform using react and expressjs blah blah blah",
                technologies: ["react", "node", "express"],
                liveURL: "ecommerce.vercel.app",
                githubURL: "github.com/e-commerce"
            },
            {
                title: "Todo app",
                desc: "built an ecommerce platform using react and expressjs blah blah blah. built an ecommerce platform using react and expressjs blah blah blah",
                technologies: ["react", "redux"],
                liveURL: "todo.vercel.app",
                githubURL: "github.com/todo"
            },
            {
                title: "resume builder",
                desc: "built an ecommerce platform using react and expressjs blah blah blah. built an ecommerce platform using react and expressjs blah blah blah",
                technologies: ["react", "tailwind"],
                liveURL: "resume.vercel.app",
                githubURL: "github.com/resume"
            }
        ],
        skills: {
            technical: ["React", "Javascript", "Node", "Express"],
            soft: ["Communication", "understanding", "blah blah"],
            tools: ["git", "github", "postman"]
        }
    })
    return (
        <InfoContext.Provider value={{info, setInfo}}>
            {children}
        </InfoContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useInfo = () => useContext(InfoContext)

