import './App.css'
import UseContext from './basic-hooks/usecontext'
import UseEffect from './basic-hooks/useeffect'
import UseReduce from './additional-hooks/usereduce'
import UseRef from './additional-hooks/useref'
import UseState from './basic-hooks/usestate'
import UseMemo from './basic-hooks/usememo'
// import UseInsertionEffect from './externalstore-sync-hooks/useinsertioneffect'

function App() {

  return (
    <>
      <div className="flex flex-col gap-8 max-w-2/3 mx-auto">
        <UseState />
        <UseEffect />
        <UseReduce />
        <UseRef />
        <UseContext />
        {/* <UseInsertionEffect /> */}
        <UseMemo />
      </div>
    </>
  )
}

export default App
