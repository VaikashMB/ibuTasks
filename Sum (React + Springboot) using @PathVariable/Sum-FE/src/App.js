import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const handleSubmit = () => {



    axios.get(`http://localhost:8080/sum/${number1},${number2}`)
      .then(response => {
        setSum(response.data);
      })
      .catch(error => {
        console.error('Error calculating sum:', error);
      });
  };

  return (
    <div>
      <div className='numbers'>
        <h1>SUM OF TWO NUMBERS</h1>
        <div>
          <label>Enter Number1:</label>
          <input
            type='text'
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </div>

        <div>
          <label>Enter Number2:</label>
          <input
            type='text'
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
      </div>

      <button type="button" className="btn btn-primary button" onClick={handleSubmit}>
        SUBMIT
      </button>

      <h2 className='sumText'>The Sum is: {sum}</h2>
    </div>
  );
}

export default App;
