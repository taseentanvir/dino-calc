import React from "react";
import "./factorization-calc.css";
import isPrime from "./isPrime.js";
import primeFactorTree from "./primeFactorTree.js";

const FactorizationCalc = () => {
  let [inputValue, setInputValue] = React.useState(null);
  //   let [factorsArray, setFactorsArray] = React.useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const RenderResult = () => {
    if (isPrime(inputValue) === true) {
      return <div>{inputValue} itself is a prime number</div>;
    } else {
      return (
        <>
          <div>
            {inputValue && (
              <div>
                Factorization tree: {primeFactorTree(inputValue).join(" × ")}
              </div>
            )}
          </div>
        </>
      );
    }
  };

  console.log(primeFactorTree(inputValue).length);

  const shit = () => {
    let n = primeFactorTree(inputValue).length;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (i != j)
          if (
            primeFactorTree(inputValue)[i] * primeFactorTree(inputValue)[j] ===
            225
          )
            return true;
    console.log("shit");
  };
  shit();

  return (
    <div className="wrapper">
      <form>
        <label className="label" htmlFor="number">
          Type a number:
        </label>
        <input
          name="number"
          id="number"
          onChange={handleChange}
          value={inputValue}
          type="number"
          placeholder="Type a composite number"
        />
      </form>
      <RenderResult />
      <button
        onClick={() => {
          window.history.back();
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default FactorizationCalc;
