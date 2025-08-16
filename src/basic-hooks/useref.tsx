// import { useRef } from "react";

// export default function UseRefExample() {
//   const inputRef = useRef<HTMLInputElement>(null); // Reference bana liya

//   const handleFocus = () => {
//     if (inputRef.current) {
//       inputRef.current.focus(); // Direct DOM access -> focus input
//     }
//   };

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-3">🎯 useRef Example</h2>

//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Type something..."
//         className="border px-3 py-1 rounded mr-2"
//       />
      
//       <button
//         onClick={handleFocus}
//         className="px-3 py-1 bg-blue-500 text-white rounded"
//       >
//         Focus Input
//       </button>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function UseRefPreviousValue() {
  const [count, setCount] = useState(69);
  const prevCountRef = useRef<number | null>(null); // Ref banaya

  // Har render pe current count ko ref me save kar dena
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">🔙 useRef Previous Value Example</h2>
      
      <p className="mb-2">Current Count: {count}</p>
      <p className="mb-4">
        Previous Count: {prevCountRef.current !== null ? prevCountRef.current : "N/A"}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Increase
      </button>
    </div>
  );
}


//👉 Flow:
// useRef ek reference object return karta hai ({ current: ... }).
// Humne inputRef ko <input> ke ref prop me diya → iska matlab inputRef.current us input ka direct DOM element hoga.
// Jab button click hota hai → inputRef.current.focus() call hoti hai → input me cursor chala jata hai automatically.

// Perfect 👌 ab mai aapko useRef ka dusra example deta hoon jisme hum previous value track karenge.
// useRef ka ek bada use-case ye hota hai ke ye value ko re-render ke baad bhi hold karke rakhta hai bina component ko dobara render kiye.

//🔑 Difference between re-render aur reload

// Re-render 👉 React apne component ko dobara render karta hai jab state/props change hote hain.

// Is waqt useRef ki value wipe nahi hoti, ye wahi rehti hai.

// Reload (page refresh) 👉 Jab aap browser ka page reload karte ho to poora React app dobara start hota hai.

// Matlab saara memory, state, ref reset ho jaata hai (kyunki component dubara se scratch se mount hota hai).  
