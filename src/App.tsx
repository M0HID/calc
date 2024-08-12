import './App.css';
import React, { useState } from 'react';

function App() {
  const [placeholderText, setPlaceholderText] = useState('0');
  const [equation, setEquation] = useState('');
  const [operatorPressed, setOperatorPressed] = useState(false);
  const [activeOperator, setActiveOperator] = useState<string | null>(null);
  const [clearState, setClearState] = useState(false);

  const handleButtonClick = (value) => {
    if (placeholderText === 'Error') {
      setPlaceholderText(value);
    }
    if (operatorPressed) {
      setPlaceholderText(value);
      setOperatorPressed(false);
    } else {
      setPlaceholderText((prev) => prev + value);
    }
    if (placeholderText === '0') {
      setPlaceholderText(value);
    }
    if (placeholderText === '-0') {
      setPlaceholderText('-' + value);
    }
    setClearState('C');
  };

  const handleClear = () => {
    setPlaceholderText('0');
    setEquation('');
    setActiveOperator(null);
    setOperatorPressed(false);
    setClearState((prev) => !prev);
  };

  const handlePercent = () => {
    setPlaceholderText((prev) => {
      const result = parseFloat(prev) / 100;
      return result.toString();
    });
  };

  const handleDP = () => {
    if (!placeholderText.includes('.')) {
      setPlaceholderText((prev) => prev + '.');
    }
  };

  const handleZero = () => {
    if (placeholderText !== '0') {
      setPlaceholderText((prev) => prev + '0');
    }
  };

  const handleOperator = (operator) => {
    setActiveOperator(operator);
    if (operatorPressed) {
      setEquation((prev) => prev.slice(0, -1) + operator);
      setOperatorPressed(true);
    } else {
      setEquation((prev) => prev + placeholderText + operator);
      setOperatorPressed(true);
    }
    // Change the background and text color for the operator button
    console.log('Operator is:', operator);

  };

  const handlePlusMinus = () => {
    setPlaceholderText((prev) => {
      if (operatorPressed) {
        return '-0';
      } else if (prev === '0') {
        return '-0';
      } else {
        return (parseFloat(prev) * -1).toString();
      }
    });
  };

  const handleEquals = () => {
    try {
      const finalEquation = equation + placeholderText;
      const result = eval(finalEquation);
      setPlaceholderText(result.toString());
      setEquation('');
      setOperatorPressed(false);
      setActiveOperator(null);
    } catch (error) {
      setPlaceholderText('Error');
      setEquation('');
    }
  };

  return (
    <>
      <div className="flex">
        <div className="answerField">{placeholderText}</div>
      </div>
      <div className="flex">
        <button className="button-light-gray" onClick={handleClear}>{clearState === 'C' ? 'C' : 'AC'}</button>
        <button className="button-light-gray" onClick={handlePlusMinus}>+/-</button>
        <button className="button-light-gray" onClick={handlePercent}>%</button>
        <button className={`button-orange ${activeOperator === '/' ? 'operator-active' : ''}`} onClick={() => handleOperator('/')}>÷</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('9')}>9</button>
        <button className={`button-orange ${activeOperator === '*' ? 'operator-active' : ''}`} onClick={() => handleOperator('*')}>×</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('6')}>6</button>
        <button className={`button-orange ${activeOperator === '-' ? 'operator-active' : ''}`} onClick={() => handleOperator('-')}>-</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('3')}>3</button>
        <button className={`button-orange ${activeOperator === '+' ? 'operator-active' : ''}`} onClick={() => handleOperator('+')}>+</button>
      </div>
      <div className="flex">
        <button className="button-big" onClick={handleZero}>0</button>
        <button className="button-dark-gray" onClick={handleDP}>.</button>
        <button className="button-orange" onClick={handleEquals}>=</button>
      </div>  
    </>
  );
}

export default App;
