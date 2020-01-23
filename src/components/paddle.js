import React from "react";
import "./paddle.css";
function Paddle(isPlayerTwo) {
  return <div className={isPlayerTwo ? "paddle player2" : "paddle"} />;
}
export default Paddle;
