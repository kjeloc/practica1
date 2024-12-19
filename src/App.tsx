import './App.css'
import LoginPage from './components/LoginPage'
import ToDoList from './components/ToDoList'
import UserPage from './components/UserPage'
import { AuthProvider } from './context/AuthContext'
//import Counter from './components/Counter'
// import BasicFunctions from './typescript/BasicFunctions'
//import ObjectLiterals from './typescript/ObjectLiterals'
//import BasicTypes from './typescript/BasicTypes'

function App() {
  return (
    <AuthProvider>
      <div className='flex flex-col items-center h-svh'>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/*<BasicTypes />*/}
        {/* <Counter /> */}
        <LoginPage/>
      </div>
    </AuthProvider>
  )
}

export default App