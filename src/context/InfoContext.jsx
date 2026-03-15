import { createContext, useContext, useState } from "react";

const InfoContext = createContext()

export const InfoProvider = ({children}) => {
    const [info, setInfo] = useState({ 
        resumeType: "",
        personalInfo: {
            name: "",
            summary: "",
            githubURL: "",
            linkedInURL: "",
            email: "",
            phone: "",
            location: ""
        },
        education: [
            {
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
                cgpa: "",
            }
        ],
        workExperience: [
            {
                companyName: "",
                startDate: "",
                endDate: "",
                designation: "",
                desc: "",
                isCurrentCompany: false
            }
        ],
        projects: [
            {
                title: "",
                desc: "",
                technologies: [],
                liveURL: "",
                githubURL: ""
            }
        ],
        skills: {
            technical: [],
            soft: [],
            tools: []
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

