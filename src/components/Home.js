import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
	return (
		<>
			<div className="home">
				<TypeIt
					style={{ fontSize: 40 }}
					options={{
						speed: 50,
						waitUntilVisible: true,
					}}
					getBeforeInit={(instance) => {
						const firstPause = 400;
						const secondPause = 300;
						const thirdPause = 500;
						const delay = 100;
						const extraDelay = 100;

						const totalPaused =
							firstPause +
							secondPause +
							thirdPause +
							delay * 3 +
							extraDelay;

						console.log(totalPaused);
						instance
							.type("Hi, I'n")
							.pause(firstPause)
							.delete(1)
							.pause(secondPause)
							.type("m tasin")
							.pause(thirdPause)
							.delete(2)
							.type("een", { delay })
							.move(-5, { delay })
							.delete(1)
							.type("T")
							.move("END", { delay })
							.type(" :D")
							.type("<br>")
							.type("And I made calculations easy for you");

						// Remember to return it!
						return instance;
					}}
				/>
				<motion.div
					className="rectangle"
					initial={{
						opacity: 0,
						y: 50,
						x: 0,
						width: "100%",
						height: "40px",
					}}
					animate={{
						opacity: 1,
						y: 0,
						x: 0,
						transition: { delay: 7.2 },
					}}
				>
					<Router>
						<Link
							onClick={() => {
								window.location.href = "/factorization-calc";
							}}
							to="/factorization-calc"
						>
							Factorization Calculator
						</Link>
						<Link
							onClick={() => {
								window.location.href = "/bmi-calc";
							}}
							to="/bmi-calc"
						>
							BMI Calculator
						</Link>
					</Router>
				</motion.div>
			</div>
		</>
	);
};

export default Home;
