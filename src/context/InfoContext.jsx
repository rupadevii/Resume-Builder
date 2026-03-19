import { createContext, useContext, useEffect, useState } from "react";

const InfoContext = createContext()

export const InfoProvider = ({children}) => {
    const initialState = { 
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
    }

    const [info, setInfo] = useState(() => {
        return JSON.parse(localStorage.getItem("info")) || initialState
    })

    const [template, setTemplate] = useState("template1")

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("info", JSON.stringify(info))
            console.log("saved...")
        }, 2000)

        return () => clearTimeout(timer)

    }, [info])

    function clearMockData(){
        localStorage.removeItem("info")
        setInfo(initialState)
    }

    return (
        <InfoContext.Provider value={{info, setInfo, clearMockData, template, setTemplate}}>
            {children}
        </InfoContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useInfo = () => useContext(InfoContext)

