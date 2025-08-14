import { useState } from "react"

export default function UseState() {
    const [count, setCount] = useState(0)
  return (
    <div className="w-2/3 mx-auto">
        <h1 className="text-2xl font-bold">UseState</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p className="text-2xl font-bold">Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}