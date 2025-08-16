// useMemo React ka ek hook hai jo expensive calculations ko optimize karne ke liye use hota hai.

// Socho tumhare component me koi function hai jo heavy calculation karta hai, jaise bohot bada array loop karna ya complex math operation.
// React normally har render me ye function dobara chalata hai, chahe value change na hui ho.

// useMemo ye ensure karta hai ke calculation sirf tab chale jab dependency change ho, warna pehle ka result yaad rakhta hai (memoize karta hai).


import { useState, useMemo } from "react";
import Image from "../../public/assets/1.jpg";

export default function UseMemo() {
  const [hovered, setHovered] = useState(false);

  // Simulated heavy calculation
  const filterStyle = useMemo(() => {
    console.log("Calculating image filter...");
    // Heavy calculation simulation
    let style = hovered
      ? "brightness(1.2) contrast(1.5)"
      : "brightness(1) contrast(1)";
    return style;
  }, [hovered]); // sirf hovered state change hone par calculation chalegi

  return (
    <div className="flex justify-center items-center w-40 h-40 bg-gray-100">
      <div
        className="w-40 h-40 overflow-hidden rounded-xl shadow-lg cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={Image}
          alt="Example"
          className="w-full h-full object-cover transition-all duration-500"
          style={{ filter: filterStyle }}
        />
      </div>
    </div>
  );
}
