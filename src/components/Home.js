import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
// import Logo from "./Logo";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <Logo /> */}
        <div className="text-wrapper">
          <TypeIt
            className="animated-text"
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
                firstPause + secondPause + thirdPause + delay * 3 + extraDelay;

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
                .type("!")
                .type("<br>")
                .type("And I made calculations easy for", {
                  delay,
                })
                .move(-4, { delay })
                .delete(4)
                .pause(firstPause)
                .type("<em><strong>easier</strong></em>", {
                  delay,
                })
                .pause(secondPause)
                .move("END")
                .type(" you :D");

              // Remember to return it!
              return instance;
            }}
          />
        </div>

        <motion.div
          className="calc-btn-wrapper"
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
            transition: { delay: 8 }, // delay will be 9
          }}
        >
          <Router>
            {/* <Link
              style={{ marginRight: 10 }}
              className="calc-btn waves-effect waves-light"
              onClick={() => {
                window.location.href = "/factorization-calc";
              }}
              to="/factorization-calc"
            >
              Factorization Calculator
            </Link> */}
            <Link
              className="calc-btn waves-effect waves-light"
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
