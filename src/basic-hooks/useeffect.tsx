// import { useState, useEffect } from "react";
// import image from "../../public/assets/1.jpg";

// export default function ImageBox() {
//   const [fadeIn, setFadeIn] = useState(false);

//   useEffect(() => {
//     // Page load hone ke 500ms baad image ka fade-in effect start hoga
//     const timer = setTimeout(() => {
//       setFadeIn(true);
//     }, 500);

//     // Cleanup (jab component remove ho)
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex justify-center items-center w-40 h-40 bg-gray-100">
//       <div
//         className={`w-20 h-20 overflow-hidden rounded-full shadow-lg transition-all duration-1000 ${
//           fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
//         }`}
//       >
//         <img
//           src={image}
//           alt="Example"
//           className="w-full h-full object-cover rounded-full"
//         />
//       </div>
//     </div>
//   );
// }

//useState(false) → Shuru me image hidden + chhoti size me hai.
// useEffect → Component load hone ke baad 500ms ka delay lagata hai, phir fadeIn ko true karta hai.
// Jab fadeIn true hota hai → Tailwind classes opacity-100 scale-100 lag jati hain, jo image ko smoothly show kar deti hain.
// Ye tumhe clearly dikhayega ke useEffect render ke baad trigger hota hai.

// import { useState, useEffect } from "react";

// export default function HoverImageEffect() {
//   const [hovered, setHovered] = useState(false);
//   const [imageSrc, setImageSrc] = useState("https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png");

//   useEffect(() => {
//     if (hovered) {
//       // Jab hover karein to 0.5s delay ke baad dusri image load ho
//       const timer = setTimeout(() => {
//         setImageSrc("https://img.freepik.com/free-photo/young-woman-eye-reflects-colorful-summer-nature-generated-by-ai_188544-18407.jpg?size=626&ext=jpg");
//       }, 500);

//       return () => clearTimeout(timer);
//     } else {
//       // Hover remove hone par wapas pehli image
//       setImageSrc("https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=600&h=400");
//     }
//   }, [hovered]);

//   return (
//     <div className="flex justify-center items-center w-40 h-40 bg-gray-100">
//       <div
//         className="w-20 h-20 overflow-hidden rounded-full shadow-lg transition-all duration-500 cursor-pointer"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <img
//           src={imageSrc}
//           alt="Example"
//           className="w-full h-full object-cover transition-opacity duration-500"
//         />
//       </div>
//     </div>
//   );
// }

// hovered state → Track karta hai mouse hover ki condition.
// useEffect → Jab hovered true hota hai, 0.5 second ke delay se dusri image set hoti hai.
// Jab hover hata dete ho → turant pehli image wapas aa jati hai.
// Ye clearly dikhata hai ke useEffect render ke baad ya state change hone par kaam karta hai.

import { useState, useEffect } from "react";

export default function HoverImageAdvanced() {
  const firstImage = "data:image/jpeg;base64,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";
  const secondImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNLmszPJINMjHpSZ4yWEHH_yiWyOdLX_HW1iPwp9GOt6BlnEjqE3hbg&s";

  const [hovered, setHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(firstImage);
  const [fade, setFade] = useState(true);

  // Preload second image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = secondImage;
  }, []);

  useEffect(() => {
    if (hovered) {
      setFade(false); // fade out
      const timer = setTimeout(() => {
        setImageSrc(secondImage);
        setFade(true); // fade in
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setFade(false);
      const timer = setTimeout(() => {
        setImageSrc(firstImage);
        setFade(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [hovered]);

  return (
    <div className="flex justify-center items-center w-40 h-40 bg-gray-100">
      <div
        className="w-20 h-20 overflow-hidden rounded-full shadow-lg cursor-pointer relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={imageSrc}
          alt="Example"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}


// First useEffect → Page load par dusri image ko background me preload karta hai (taa ke hover pe koi delay na ho).
// Second useEffect →
// Jab hovered true hota hai → Pehle fade-out hoti hai, phir dusri image lagti hai, phir fade-in hoti hai.
// Jab hover hatata hai → Wapas pehli image aati hai same smooth transition ke saath.




