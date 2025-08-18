import './App.css'
import { CrudData } from './crud-data';
// import UseContext from './basic-hooks/usecontext'
// import UseEffect from './basic-hooks/useeffect'
// import UseReduce from './additional-hooks/usereduce'
// import UseState from './basic-hooks/usestate'
// import UseMemo from './basic-hooks/usememo'
// import UseRefExample from './basic-hooks/useref'
// // import UseInsertionEffect from './externalstore-sync-hooks/useinsertioneffect'

function App() {

  return (
    <>
      <div className="flex flex-col gap-8 max-w-[1280px] mx-auto py-6">
        {/* <UseState />
        <UseEffect />
        <UseReduce />
        <UseRefExample />
        <UseContext />
        <UseInsertionEffect />
        <UseMemo /> */}
        <CrudData />
      </div>
    </>
  )
}

export default App
