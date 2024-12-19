import { useAuthContext } from "../context/AuthContext"
import ToDoList from "./ToDoList"
import ApiDebounced from "./ApiDebounced"
import CalculatorPage from "./CalculatorPage"

export default function LoginPage() {
    const { state, currentView, loginEmailWithPassword, logOut, changeView } = useAuthContext()
    console.log(state)

    if (state === 1) {
        switch(currentView){
            case "To do List":
               return ( <>
                <button
                    onClick={() => changeView("home")}
                    className="bg-gray-500 text-white rounded-xl mt-2 p-2"
                >
                    Volver
                </button>
                <ToDoList />
            </>
               );

               case "API":
                return ( <>
                 <button
                     onClick={() => changeView("home")}
                     className="bg-gray-500 text-white rounded-xl mt-2 p-2"
                 >
                     Volver
                 </button>
                 <ApiDebounced/>
             </>
                );
                case "Calculator":
                    return ( <>
                    <CalculatorPage/>
                    <br/>
                     <button
                         onClick={() => changeView("home")}
                         className="bg-gray-500 text-white rounded-xl mt-2 p-2"
                     >
                         Volver
                     </button>
                 
                 </>
                    );
               
            default:
            return (<>
                <h3>Bienvenido</h3>
                <br />
                <br />
                <button onClick={() => changeView("To do List")} className='bg-red-500 text-white rounded-xl mt-2 p-2'>To Do List
                </button>
                <br />
                <br />
                <button onClick={() => changeView("API")} className='bg-red-500 text-white rounded-xl mt-2 p-2'>API
                </button>
                <br />
                <br />
                <button onClick={() => changeView("Calculator")} className='bg-red-500 text-white rounded-xl mt-2 p-2'>Calculator
                </button>
                <br />
                <br />
                <button onClick={() => logOut()} className='bg-red-500 text-white rounded-xl mt-2 p-2'>Cerrar Sesion
                </button>
            </>)
        }
        
    }

    return (
        <>
            <h3>Bienvenido a la pagina</h3>
            <h3>Inicio de sesion</h3>
            <input type="email" placeholder="Email"></input>
            <br />
            <input type="password" placeholder="Password"></input>
            <br />
            <button onClick={() => loginEmailWithPassword('kjeloc@gmail.com', '123456')} className='bg-blue-500 text-white rounded-xl mt-2 p-2'>Ingresar</button>
        </>
    )
}
