import './App.css'
import UseEffect from './pages/hooks/useeffect'
import UseReduce from './pages/hooks/usereduce'
import UseRef from './pages/hooks/useref'
import UseState from './pages/hooks/usestae'
import UseContext from './pages/hooks/usecontext'

function App() {

  return (
    <>
      <div className="flex flex-col gap-8">
        <UseState />
        <UseEffect />
        <UseReduce />
        <UseRef />
        <UseContext />
      </div>
    </>
  )
}

export default App
