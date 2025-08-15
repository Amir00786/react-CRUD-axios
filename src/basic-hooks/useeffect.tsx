import { useEffect, useState } from "react"

export default function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("count", count)
    }, [count])
    return (
        <div>
            <h1 className="text-2xl font-bold">UseEffect</h1>
            <p className="text-2xl font-bold">Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}