import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

function Calculator() {
  const [history, setHistory] = useState([]);
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setCurrentValue((prev) => (prev === "0" ? number : prev + number));
  };

  const handleDotClick = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue((prev) => prev + ".");
    }
  };

  const handleOperatorClick = (op) => {
    setPreviousValue(currentValue);
    setCurrentValue("0");
    setOperator(op);
  };

  const handleEqualClick = () => {
    if (operator && previousValue !== null) {
      const result = calculate(
        Number(previousValue),
        Number(currentValue),
        operator
      );
      const operation = `${previousValue} ${operator} ${currentValue} = ${result}`;
      setCurrentValue(String(result));
      setPreviousValue(null);
      setOperator(null);
      setHistory((prev) => [...prev, operation]);
    }
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };
  const handleDelete = () => {
    setCurrentValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };
  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Error";
      default:
        return b;
    }
  };

  return (
    <div className="calculate">
      <Display value={currentValue} />
      <Buttons
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualsClick={handleEqualClick}
        onClear={handleClear}
        onDelete={handleDelete}
      />
      <div className="history">
        <h3>History:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
