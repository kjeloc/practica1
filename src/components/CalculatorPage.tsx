import React, { useState } from 'react'



export default function CalculatorPage() {
  
  const [value, setValue] = useState ("")
  
  const deleteValue = () => {
    if (value.slice(-1)=== " "){
        setValue(value.substring(0, value.length - 3))
    } else if (value.slice(-2) === "0."){
        setValue(value.substring(0, value.length -2))
    } else {
        setValue(value.substring(0, value.length -1))
    }
  }

  const addSymbol = (dot: string) => {
   if (dot === "." && value.includes(".")) return
    if(value.slice(-1) !== " " && value.slice(-1) !== "."){
        setValue(value + dot)
    }
  }

  const calc = () => {
    if (value.length >=5 && value.slice(-1) !== " "){
        setValue(eval(value).toString());
    }
  }

    return (
    <>
    <h1>CALCULATOR</h1>
    <br />
    <input value={value}/>
    <br />
    <br />
    <div>
    <button onClick={() => setValue(value + "7")}>7</button>
    <button onClick={() => setValue(value + "8")}>8</button>
    <button onClick={() => setValue(value + "9")}>9</button>
    <button onClick={() => value.length >=1 && deleteValue()}>DEL</button>
    <br />
    <button onClick={() => setValue(value + "4")}>4</button>
    <button onClick={() => setValue(value + "5")}>5</button>
    <button onClick={() => setValue(value + "6")}>6</button>
    <button onClick={() => value.length >= 1 && addSymbol(" + ")}>+</button>
    <br />
    <button onClick={() => setValue(value + "1")}>1</button>
    <button onClick={() => setValue(value + "2")}>2</button>
    <button onClick={() => setValue(value + "3")}>3</button>
    <button onClick={() => value.length >= 1 && addSymbol(" - ")}>-</button>
    <br />
    <button onClick={() => value.length >=1 && addSymbol(".")}>.</button>
    <button onClick={() => setValue(value + "0")}>0</button>
    <button onClick={() => value.length >= 1 && addSymbol(" / ")}>/</button>
    <button onClick={() => value.length >= 1 && addSymbol(" * ")}>X</button>
    <br />
    <button onClick={()=> setValue("")}>RESET</button>
    <button onClick={calc}>=</button>
    </div>

    </>
  )
}
