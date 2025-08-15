import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext("light")

function ChildComponent() {
  const theme = useContext(ThemeContext)
  return <p className="text-2xl font-bold">Theme: {theme}</p>
}

export default function UseContext() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.body.className = ""  // pehle saari classes remove
    document.body.classList.add(theme === "dark" ? "bg-black" : "bg-white")
    document.body.style.color = theme === "dark" ? "white" : "black"
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="py-10">
        <h1 className="text-2xl font-bold">UseContext</h1>
        <ChildComponent />
        <button
          onClick={() => setTheme("dark")}
          className="px-3 py-1 bg-black text-white rounded mt-4"
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("light")}
          className="px-3 py-1 bg-gray-200 text-black rounded ml-2 mt-4"
        >
          Light
        </button>
      </div>
    </ThemeContext.Provider>
  )
}
