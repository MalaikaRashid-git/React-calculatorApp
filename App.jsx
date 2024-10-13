
import './App.css'
import { useState } from 'react';
import {add , sub , mul , div} from './Calculator'
function App() {
  const[num1 , setNum1] = useState(0);
  const[num2 , setNum2] = useState(0);
  const[result , setResult] = useState(null);
  const[operation , setOperation] = useState(' ');

  const handleCalculations = (op) => {
  setOperation(op);
  if(op === 'add') setResult(add(Number(num1) , Number(num2)))
  if(op === 'sub') setResult(sub(Number(num1) , Number(num2)))
  if(op === 'mul') setResult(mul(Number(num1) , Number(num2)))
  if(op === 'div') setResult(div(Number(num1) , Number(num2)))
  }

  const operationDesc = {
    add: 'addition' ,
    sub: 'subtraction' , 
    mul: 'multiplication' ,
    div: 'division'
  };
  return (
    <div className='calculator'>
      <h1> Simple calculator</h1>
      <input type = "number" placeholder='Enter first number'
      value = {num1}
      onChange={(e) => setNum1(e.target.value)} /> 
      
      <input type = "number" placeholder='Enter second number'
      value = {num2}
      onChange={(e) => setNum2(e.target.value)}/> 
  
    <div className='btn'>
      <button onClick={() => handleCalculations('add')}> Add</button>
      <button onClick={() => handleCalculations('sub')}> Subtract</button>
      <button onClick={() => handleCalculations('mul')}> Multiply</button>
      <button onClick={() => handleCalculations('div')}> Divide</button>
    </div>

    <div className='result'>
    {operation && <p>  {`Result of ${operationDesc[operation] } is: ${result}`}</p>}
    </div>

  </div>

  
  );
}

export default App
