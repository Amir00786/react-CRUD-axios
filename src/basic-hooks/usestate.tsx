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

// Why React?

// It's because those are normal variables and React.js doesn't know that it's going to be changed.
// - And that react should respond or update dom based on that.
// - Those values are aleady rendered on DOM, there is no way they wil be re-rendered.
// - For that React.js Provides a function called useState.
// - This type of function which starts with 'use' and it is called hook.
// - This is a special function which has some features provided by react.js.
// - we will learn about other hooks later in future.

// const [count, setCount] = useState(0)

// const is a variable(key).
// count is a state variable. (The current value of the state).
// setCount A function that updates the state variable.
// (0) is the initial value of the state variable.
// useState(0) initial value jo hai ye hmaray count state variable ki hai..


// Dynamic UI Updates: State allows your components to update dynamically in response to user input or other events. For example, in a form, the state might hold the current value of the input fields, updating in real-time as the user types.
// Interactivity: State makes your application interactive. By maintaining state, you can create components that respond to user actions, such as clicks, form submissions, or keyboard inputs.
// Data Management: State helps manage data within a component. For instance, you can fetch data from an API and store it in the state, which will then be used to render the UI.
// Component Communication: State can be lifted up to parent components to manage state across multiple child components, ensuring consistent data flow and synchronization.