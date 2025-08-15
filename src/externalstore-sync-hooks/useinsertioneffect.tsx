import React, { useInsertionEffect } from "react";

export default function UseInsertionEffect() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      body { background-color: blue; color: white; }
    `;
    document.head.appendChild(style);
  }, []);

  return <h1>Hello World</h1>;
}
