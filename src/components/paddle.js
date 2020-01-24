import React from "react";
import "./paddle.css";
export default function Paddle({ isPlayerTwo, paddleY }) {
  return (
    <div
      className={isPlayerTwo ? "paddle player2" : "paddle"}
      // style={{ transform: `translateY(calc(-50% + ${paddleY}px))` }}
      style={{ top: `${paddleY}px` }}
    />
  );
}
