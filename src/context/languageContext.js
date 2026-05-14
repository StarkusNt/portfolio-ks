import React, { createContext, useState, useContext } from "react"
import translation from "../translation.js"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("pl")

    const changeLanguage = lng => {
        setLanguage(lng)
    }

    const t = key => {
        return translation[language][key] || key
    }

    
    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
