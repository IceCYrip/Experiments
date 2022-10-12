import React, { useState } from "react";
import "./AddingInputs.css";

const AddingInputs = () => {
  const [count, setCount] = useState([1]);

  function Adding() {
    setCount((oldElements) => {
      return [...oldElements, count.length + 1];
    });
  }

  function Subtracting() {
    setCount(count.filter((element, index) => index !== count.length - 1));
  }

  function DataHandling(index, value) {
    const temp = count;
    temp[index] = { id: index, name: value };
    setCount(temp);
  }

  function Finish() {
    console.log("Final Array: ", count);
  }

  return (
    <div className="main">
      <div className="buttons">
        <button
          className="click"
          onClick={() => {
            Adding();
          }}
        >
          +
        </button>
        <button
          className="click"
          onClick={() => {
            Subtracting();
          }}
        >
          -
        </button>
      </div>

      {count.map((value, index) => {
        return (
          <div className="inputs">
            <input
              key={index}
              type="text"
              onChange={(e) => {
                DataHandling(index, e.target.value);
              }}
              placeholder={"Input " + (index + 1)}
            />
          </div>
        );
      })}
      <button onClick={Finish}>Submit</button>
    </div>
  );
};

export default AddingInputs;
