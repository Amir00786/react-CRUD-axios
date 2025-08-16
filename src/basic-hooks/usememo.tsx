// import { useState, useMemo } from "react";
// import Image from "../../public/assets/1.jpg";

// export default function UseMemo() {
//   const [hovered, setHovered] = useState(false);

//   // Simulated heavy calculation
//   const filterStyle = useMemo(() => {
//     console.log("Calculating image filter...");
//     // Heavy calculation simulation
//     let style = hovered
//       ? "brightness(2.8) contrast(1.5)"
//       : "brightness(1) contrast(1)";
//     return style;
//   }, [hovered]); // sirf hovered state change hone par calculation chalegi

//   return (
//     <div className="flex justify-center items-center w-40 h-40 bg-gray-100">
//       <div
//         className="w-40 h-40 overflow-hidden rounded-xl shadow-lg cursor-pointer"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <img
//           src={Image}
//           alt="Example"
//           className="w-full h-full object-cover transition-all duration-500"
//           style={{ filter: filterStyle }}
//         />
//       </div>
//     </div>
//   );
// }

// import { useState, useMemo } from "react";

// export default function UseMemo() {
//   const [count, setCount] = useState(0);
//   const [other, setOther] = useState(0);

//   // Heavy calculation
//   const doubleCount = useMemo(() => {
//     console.log("Calculating doubleCount...");
//     return count * 2;
//   }, [count]); // sirf count change hone par calculation chalegi

//   return (
//     <div className="p-5">
//       <h2>Double Count: {doubleCount}</h2>
//       <button onClick={() => setCount(count + 1)} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">
//         Increase Count
//       </button>
//       <p>Count: {count}</p>
//       <button onClick={() => setOther(other + 1)} className="px-3 py-1 bg-gray-500 text-white rounded">
//         Increase Other
//       </button>
//       <p>Other: {other}</p>
//     </div>
//   );
// }


import { useState, useMemo } from "react";

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // Heavy Calculation Example: Find largest prime less than count * 10000
    const largestPrime = useMemo(() => {
        console.log("🔄 Heavy calculation running...");
        let num = count * 10000;
        while (num > 1) {
            if (isPrime(num)) return num;
            num--;
        }
        return 1;
    }, [count]); // Sirf count change hone par chalegi

    function isPrime(n: number) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    }

    return (
        <div className="p-5">
            <h2>Largest Prime: {largestPrime}</h2>
            <button
                onClick={() => setCount(count + 1)}
                className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
            >
                Increase Count
            </button>
            <p>Count: {count}</p>
            <button
                onClick={() => setOther(other + 1)}
                className="px-3 py-1 bg-gray-500 text-white rounded"
            >
                Increase Other
            </button>
            <p>Other: {other}</p>
        </div>
    );
}




// useMemo React ka ek hook hai jo expensive calculations ko optimize karne ke liye use hota hai.

// Socho tumhare component me koi function hai jo heavy calculation karta hai, jaise bohot bada array loop karna ya complex math operation.
// React normally har render me ye function dobara chalata hai, chahe value change na hui ho.

// useMemo ye ensure karta hai ke calculation sirf tab chale jab dependency change ho, warna pehle ka result yaad rakhta hai (memoize karta hai).


