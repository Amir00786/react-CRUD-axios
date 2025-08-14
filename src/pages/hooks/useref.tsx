import { useRef } from "react"

export default function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type something..." className="border-2 border-gray-300 rounded-md p-2 focus:outline-none" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}
