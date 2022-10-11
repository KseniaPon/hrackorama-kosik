import React, { useState } from "react";
import './style.css';

const Amount = () => {
  const [count, setCount] = useState(1);

  const handelIncrement = () => {
    setCount(count + 1);
  }

  const handelDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="amount">
      <button className="amount__btn" onClick={handelDecrement}>–</button>
      <div className="amount__count">{count}</div>
      <button className="amount__btn" onClick={handelIncrement}>+</button>
    </div>
  );
};

export default Amount;