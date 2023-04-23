import React, { useState } from 'react';
import "../../App.css";

function Calculator() {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (value === '.' && currentValue.includes('.')) {
      return;
    }
    setCurrentValue(currentValue + value);
  };

  const handleClearButtonClick = () => {
    setCurrentValue('');
    setHistory([]);
  };

  const handleBackspaceButtonClick = () => {
    setCurrentValue(currentValue.toString().slice(0, -1));
  };

  const handleOperationButtonClick = (value) => {
    setHistory([...history, currentValue, value]);
    setPreviousValue(currentValue);
    setCurrentValue('');
    setOperation(value);
  };

  const handleEqualsButtonClick = () => {
    let result = 0;
    switch (operation) {
      case '+':
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case '-':
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case '*':
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case '/':
        if (parseFloat(currentValue) === 0) {
          setErrorMessage('Cannot divide by zero');
          return;
        }
        result = parseFloat(previousValue) / parseFloat(currentValue);
        break;
      default:
        result = parseFloat(currentValue);
        break;
    }
    setCurrentValue(result);
    setPreviousValue('');
    setOperation('');
    setErrorMessage('');
    if (history[history.length - 2] === '-') {
      setHistory([...history.slice(0, -2), currentValue, '=', result]);
    } else {
      setHistory([...history, currentValue, '=', result]);
    }
  };

  return (
    <div className="calculator">
      <div className="screen">{errorMessage || currentValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleOperationButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleOperationButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleOperationButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleOperationButtonClick('+')}>+</button>
        <button onClick={() => handleClearButtonClick()}>C</button>
        <button onClick={handleBackspaceButtonClick}><i className="fas fa-backspace"></i></button>
        <button onClick={handleEqualsButtonClick}>=</button>
      </div>
      <div className="history">
        <h2>History:</h2>
        {history.map((item, index) => (
          <span key={index}>{item} </span>
        ))}
      </div>
    </div>
  );
}

export default Calculator;