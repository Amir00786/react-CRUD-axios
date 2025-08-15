import { useState } from "react"

export default function UseState() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1 className="text-2xl font-bold">UseState</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p className="text-2xl font-bold">Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}


// In react, state refers to an object that holds data and information about the component. State is managed within the component 
// (just like a variables declared in a function). However, unlike regular variables, when state changes React re-renders the component to reflect these 
// changes, keeping the user interface in sync with the data.


// state is dynamic and mutable, meaning it can change over time. usually in response to user actions, server responses, or other events.