import './App.css';
import React, {useState} from 'react';

function App() {
  const [placeholderText, setPlaceholderText] = useState('');
  const [equation, setEquation] = useState('');
  const [operatorPressed, setOperatorPressed] = useState(false);


  const handleButtonClick = (value) => {
    if (operatorPressed) {
      setPlaceholderText(value);
      setOperatorPressed(false);
    }
    else if(placeholderText.length < 10) {
      if (placeholderText === '0' && value !== '.') {
        setPlaceholderText(value);
        setEquation(value);
      }
      else {
        setPlaceholderText((prev) => prev + value);
        setEquation((prev) => prev + value);
      }
    }
  };
  const handleClear = () => {
    setPlaceholderText('0');
    setEquation('0');
  }
  const handlePercent = () => {
    setPlaceholderText((prev) => {
      const result = parseFloat(prev) / 100;
      const resultString = result.toString();
      if (Math.abs(result) < 0.0000001) {
        return '0';
      }
      return resultString.length <= 10 ? resultString : resultString.substring(0, 10);
    });
  };
    
  const handleDP = () => {
    setPlaceholderText((prev) => {
      if (!prev.includes('.')) {
        if (prev === '') {
          return '0.';
        }
        else {
          return prev + '.';
        }
      }
      return prev;
    });
    setEquation((prev) => {
      if (!prev.includes('.')) {
        if (prev === '') {
          return '0.';
        }
        else {
          return prev + '.';
        }
      }
      return prev;
    }
    );
  }
  const handleZero = () => {
    setPlaceholderText((prev) => {
      if (prev !== '') {
        return prev + '0';
      }
      return prev;
    });
  }
  const handlePlus = () => {
    setEquation((prev) => {placeholderText + '+'});
    console.log('Operator pressed is ', operatorPressed);
    setOperatorPressed(true);
    console.log('Operator pressed is ', operatorPressed);

    console.log('Equation is ', equation);
  }
  const handleMinus = () => {
    setEquation((prev) => {placeholderText + '-'});
  }
  const handleMultiply = () => {
    setEquation((prev) => {placeholderText + '*'});
  }
  const handleDivide = () => {
    setEquation((prev) => {placeholderText + '/'});
  }
  const handlePlusMinus = () => {
    setPlaceholderText((prev) => {
      if (prev !== '0') {
        console.log('prev is ', prev);
        return (parseFloat(prev) * -1).toString();
      }
      else {
        console.log('Value of prev: ', prev);
        return ('-0');
      }
    }
    );
  }
  
  const handleEquals = () => {
    const replacedText = placeholderText.replace(/÷/g, '/').replace(/×/g, '*');
    try {
      const result = eval(replacedText);
      const resultString = result.toString();
      if (Math.abs(result) < 0.0000001) {
        setPlaceholderText('0');
      } else {
        setPlaceholderText(resultString.length <= 10 ? resultString : resultString.substring(0, 10));
      }
    } catch (error) {
      setPlaceholderText('Error');
    }
  }
  
  return (
    <>
      <div className="flex">
        <div className="answerField">{placeholderText || '0'}</div>
      </div>
      <div className="flex">
        <button className="button-light-gray" onClick={() => handleClear()}>C</button>
        <button className="button-light-gray" onClick={() => handlePlusMinus()}>+/-</button>
        <button className="button-light-gray" onClick={() => handlePercent()}>%</button>
        <button className="button-orange" onClick={() => handleButtonClick('÷')}>÷</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button-orange" onClick={() => handleButtonClick('×')}>×</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button-orange" onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className="flex">
        <button className="button-dark-gray" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button-dark-gray" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button-orange" onClick={() => handlePlus()}>+</button>
      </div>
      <div className="flex">
        <button className="button-big" onClick={() => handleZero()}>0</button>
        <button className="button-dark-gray" onClick={() => handleDP()}>.</button>
        <button className="button-orange" onClick={() => handleEquals()}>=</button>
      </div>  
      
    </>

  )
}

export default App
