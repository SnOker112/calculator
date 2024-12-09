import React from "react";

function Buttons({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClear,
  onDelete,
}) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="buttons">
      <div className="number-buttons">
        {numbers.map((num) => (
          <button key={num} onClick={() => onNumberClick(num)}>
            {num}
          </button>
        ))}
      </div>
      <div className="operator-buttons">
        {operators.map((op) => (
          <button key={op} onClick={() => onOperatorClick(op)}>
            {op}
          </button>
        ))}
      </div>
      <button onClick={onEqualsClick}>=</button>
      <button onClick={onDelete}>Удалить последний</button>
      <button onClick={onClear}>C</button>
    </div>
  );
}

export default Buttons;
