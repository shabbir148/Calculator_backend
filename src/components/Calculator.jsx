import React, {useState,useEffect,useRef} from 'react';
import "../App.css";
import CalculatorService from '../service/CalculatorService'

function Calculator(){
  const [result,setResult]=useState("");
  const inputRef=useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e){
    setResult(result.concat(e.target.name));
  }
  function backspace(){
    setResult(result.slice(0, result.length-1))
  }

  function clear(){
    setResult("")
  }

  function calculate(){
    try{
      setResult(eval(result).toString());
    }
    catch(error){
      setResult("Error");
    }
  }

  const calculateSqroot = () => {
    try {
        CalculatorService.getSqroot(result).then(
            res => {setResult(res.data)})
    } 
    catch(error) {
        setResult("Error")
    }
  }

  const calculateFactorial = () => {
    try {
        CalculatorService.getFactorial(result).then(
            res => {setResult(res.data)})
    } 
    catch(error) {
        setResult("Error")
    }
  }

  const calculateLog = () => {
    try {
        CalculatorService.getLog(result).then(
            res => {setResult(res.data)}
        )
    } 
    catch(error) {
        setResult("Error")
    }
  }

  const calculatePower = () => {
    const nums = result.split("**") 
    try {
        CalculatorService.getPower(nums[0], nums[1]).then(
            res => {setResult(res.data)}
        )
    } catch(error) {
        setResult("Error")
    }
  }


  
  return  (
    <div className="cal-App">
      <form>
        <input type="text" value={result} ref={inputRef}/>
      </form>
      
      <div className="keyboard">
        <button id="clear" onClick = {clear}>Clear</button>
        <button id="backspace" onClick = {backspace}>c</button>
        <button name = "+" onClick = {handleClick}>+</button>
        <button name = "7" onClick = {handleClick}>7</button>
        <button name = "8" onClick = {handleClick}>8</button>
        <button name = "9" onClick = {handleClick}>9</button>
        <button name = "-" onClick = {handleClick}>-</button>
        <button name = "4"  onClick = {handleClick}>4</button>
        <button name = "5" onClick = {handleClick}>5</button>
        <button name = "6" onClick = {handleClick}>6</button>
        <button name = "*" onClick = {handleClick}>&times;</button>
        <button name = "1" onClick = {handleClick}>1</button>
        <button name = "2" onClick = {handleClick}>2</button>
        <button name = "3" onClick = {handleClick}>3</button>
        <button name = "/" onClick = {handleClick}>/</button>
        <button name = "." onClick = {handleClick}>.</button>
        <button name = "0" onClick = {handleClick}>0 </button>
        <button name = "**" onClick = {handleClick}>^</button>
        <button name = "log(" onClick = {calculateLog}>log</button>
        <button name = "!" onClick = {calculateFactorial}>!</button>
        <button name = "&#8730;" onClick = {calculateSqroot}>&#8730;</button>
        <button id = "bracketfront" name = "(" onClick = {handleClick}>(</button>
        <button id="bracket" name = ")" onClick = {handleClick}>) </button>
        <button id="result" onClick={calculatePower} >Result</button>
      </div>
    </div>
  );


}

export default Calculator;