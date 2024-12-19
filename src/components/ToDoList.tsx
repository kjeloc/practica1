import { useState } from "react";


export default function ToDoList() {
  const [inputValue, setInputValue]=useState("");
  const handleOnChange = (e)=> {
    setInputValue(e.target.value)
  }
   const [All, setAll] = useState([])
   
   const handleOnClick = () => {
    setAll ([...All, inputValue])
    setInputValue("")
}
   const handleDelete = (index)=> {
    const updateAll = All.filter((All,i)=> i !== index)
    setAll(updateAll)
   }
   
    return (
    <>
    <div className='container'>
    <h2>To do List</h2>
    <div className='container_input'>
        <input type="text" value={inputValue} onChange={handleOnChange}/>
        <button onClick={handleOnClick}>Add</button>
    </div>
    <ul>
    {
            All.length > 0 ? All.map ((All, index)=>{
                return(
                    <li key={index}>{All} <span></span><span></span><button className='btn-delete' onClick={()=>{handleDelete(index)}}>Delete</button></li>
                )
            })
            : 
            <span>No hay tareas aun</span>
        } 

    </ul>
      

    </div>
    

    </>
  )
}
