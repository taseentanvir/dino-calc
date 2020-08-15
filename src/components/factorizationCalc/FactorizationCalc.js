import React from "react";
import "./factorization-calc.css";
import isPrime from "./isPrime.js";
import primeFactorTree from "./primeFactorTree.js";

const FactorizationCalc = () => {
	let [inputValue, setInputValue] = React.useState(0);
	let [factorsArray, setFactorsArray] = React.useState([]);

	const handleSubmit = (e) => {
		setInputValue(0);
		e.preventDefault();
	};

	const handleClick = () => {
		setFactorsArray(prime_factors(inputValue));
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	function prime_factors(num) {
		function checkIsPrime(num) {
			for (let i = 2; i <= Math.sqrt(num); i++) {
				if (num % i === 0) return false;
			}
			return true;
		}
		const result = [];
		for (let i = 2; i <= num; i++) {
			while (checkIsPrime(i) && num % i === 0) {
				if (!result.includes(i)) result.push(i);
				num /= i;
			}
		}
		return result;
	}

	console.log(prime_factors(inputValue));

	const renderResult = () => {
		if (isPrime(inputValue) === true) {
			return <div>`${inputValue} is a prime number`</div>;
		} else {
			return (
				<>
					<div>
						Factorization without factor repetition: {factorsArray}
					</div>
					<div>
						Factorization with factor repetition:{" "}
						{primeFactorTree(inputValue)}
					</div>
				</>
			);
		}
	};

	return (
		<div className="wrapper">
			<form onSubmit={handleSubmit}>
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
				<button onClick={handleClick} className="search" type="submit">
					Submit
				</button>
			</form>
			{renderResult()}
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
