// App.jsx
import { useState, useEffect } from "react";
import { ThemeContext } from "./themecontext";
import ChildComponent from "./contextchild";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#1a1a1a";
    document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="p-5 w-80 h-40 transition-colors duration-500">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Theme
        </button>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}

// useContext React ka ek hook hai jo tumhe props drilling se bachata hai aur data ko ek component se dusre component me direct share karne deta hai, chahe wo kitni bhi deeply nested ho.
// useContext ka use karna hai jab tumhe ek component se dusre component me data share karna hai, chahe wo kitni bhi deeply nested ho.

//Normally agar tum data parent se child me bhejna chahte ho to props use karte ho:
// Parent → Child → Grandchild → Great-Grandchild ...
// Ye process props drilling kehlata hai, aur bohot irritating hota hai agar chain lambi ho.
// useContext tumhe ek global-like storage deta hai jahan tum data rakh dete ho aur kisi bhi child component se directly access kar sakte ho — beech ke components ko props pass karne ki zaroorat nahi hoti.







