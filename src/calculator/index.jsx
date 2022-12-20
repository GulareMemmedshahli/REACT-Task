import React from "react";
import { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [count, setCount] = useState("");
  return (
    <div className="cal">
      <p className="result" style={{ color: "blue", fontSize: "40px" }}>
        {count}
      </p>
      <div className="first">
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 1);
          }}
        >
          1
        </button>
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 2);
          }}
        >
          2
        </button>
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 3);
          }}
        >
          3
        </button>
        <button
          className="btn"
          onClick={(e) => {
            return setCount(count + e.target.innerText);
          }}
        >
          +
        </button>
      </div>

      <div className="second">
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 4);
          }}
        >
          4
        </button>
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 5);
          }}
        >
          5
        </button>
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 6);
          }}
        >
          6
        </button>
        <button
          className="btn"
          onClick={(e) => {
            return setCount(count + e.target.innerText);
          }}
        >
          -
        </button>
      </div>
      <div className="third">
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 7);
          }}
        >
          7
        </button>
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 8);
          }}
        >
          8
        </button>
        <button
          className="btn"
          onClick={() => {
            return setCount(count + 9);
          }}
        >
          9
        </button>

        <button
          className="btn"
          onClick={() => {
            let sum = 0;
            count.split("+").forEach((element) => {
              sum += Number(element);
            });
            setCount(sum);

            //   let cix=0;
            //   count.split("-").forEach((elem)=>{
            //     cix-=Number(elem);
            //   });
            //   setCount(cix);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
