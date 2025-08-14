import { createContext, useState } from "react"

const ThemeContext = createContext("light")

export default function UseContext() {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={theme}>
            <div className="w-2/3 mx-auto">
                <h1 className="text-2xl font-bold">UseContext</h1>
                <p className="text-2xl font-bold">Theme: {theme}</p>
                <button onClick={() => setTheme("dark")}>Dark</button>
                <button onClick={() => setTheme("light")}>Light</button>
            </div>
        </ThemeContext.Provider>
    )
}   