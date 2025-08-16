// ChildComponent.jsx
import { useContext } from "react";
import { ThemeContext } from "./themecontext";

export default function ChildComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2 className="text-2xl font-bold">Theme: {theme}</h2>
    </div>
  );
}
