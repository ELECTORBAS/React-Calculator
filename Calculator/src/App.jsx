import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('');

  function clearDisplay() {
    setDisplay('');
  }

  function appendToDisplay(value) {
    setDisplay(prev => prev + value);
  }

  function equals(){
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay(error)
    }
  }

  return (

    <>
      <div className="container">
        <h1>Calculator App</h1>
        <div className="display">{display}</div>
        <div className="btns">
          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button className='operators' onClick={clearDisplay}>AC</button>
          

          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button className='operators' onClick={() => appendToDisplay('-')}>-</button>

          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button className='operators' onClick={() => appendToDisplay('+')}>+</button>

          <button className='operators' onClick={() => appendToDisplay('/')}>/</button>
          <button onClick={() => appendToDisplay("0")}>0</button>
          <button className='operators' onClick={() => appendToDisplay('*')}>*</button>
          
          <button className='operators' onClick={equals}>=</button>

        </div>
      </div>
    </>
  )
}

export default App