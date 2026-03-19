import { createContext, useContext, useState } from "react";

const TemplateContext = createContext()

export const TemplateProvider = ({children}) => {
    const [template, setTemplate] = useState("template1")

    return (
        <TemplateContext.Provider value={{template, setTemplate}}>
            {children}
        </TemplateContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTemplate = () => useContext(TemplateContext)