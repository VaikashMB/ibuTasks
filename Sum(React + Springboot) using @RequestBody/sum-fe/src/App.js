import { useState } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState("");

  const handleClick = () => {
    axios.post('http://localhost:8080/sum/calculate', {
      number1: parseInt(number1),
      number2: parseInt(number2),
    })
      .then((response) => {
        setSum(response.data);
      })
      .catch((error) => {
        console.error("Error in calculating sum:", error);
      })
  }




  return (
    <div>
      <div className='numbers'>
        <h1>SUM OF TWO NUMBERS</h1>
        <div>
          <label>Enter Number1:</label>
          <input type='text' value={number1} onChange={(e) => setNumber1(e.target.value)}></input>
        </div>

        <div>
          <label>Enter Number2:</label>
          <input type='text' value={number2} onChange={(e) => setNumber2(e.target.value)}></input>
        </div>
      </div>

      <button type="button" class="btn btn-primary button" onClick={handleClick}>SUBMIT</button>

      <h2 className='sumText' >The Sum is : {sum}</h2>
    </div>
  );
}

export default App;
