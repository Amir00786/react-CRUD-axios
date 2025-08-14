import { useReducer } from "react"

export default function UseReduce() {
    const [count, dispatch] = useReducer((state: number, action: string) => {
        if (action === "increment") {
            return state + 1;
        }
        if (action === "decrement") {
            return state - 1;
        }
        return state;
    }, 0)
    return (
        <div className="w-2/3 mx-auto">
            <h1 className="text-2xl font-bold">UseReduce</h1>
            <p className="text-2xl font-bold">Count: {count}</p>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    )
}