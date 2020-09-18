import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  const LogoDiv = styled(Link)`
    display: block;
    background-image: url(/favicon.ico);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 11rem;
    height: 5rem;
    margin: 0 auto;
    margin-bottom: 18px;
    /* position: absolute; */
    /* z-index: 1; */
    /* display: block; */
    /* top: 0;
    left: 0; */
  `;

  return (
    <>
      <LogoDiv to="/bmi-calc" />
    </>
  );
};

export default Logo;
