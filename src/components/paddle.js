import React, { useEffect, useState } from "react";
import "./paddle.css";
export default function Paddle({ isPlayerTwo paddleY}) {
  let [paddleY, setPaddleY] = useState(0);
  // if (paddleY <= 32) {
  //   paddleY = 32;
  // }
  // if (paddleY >= 235) {
  //   paddleY = 235;
  // }

  // function handleMouse(e) {
  //   if (e.keycode === 38) {
  //     setPaddleY(paddleY + 1);
  //   }
  //   if (e.keycode === 40) {
  //     setPaddleY(paddleY - 1);
  //   }
  // }

  useEffect(() => {
    window.addEventListener("keydown", handleMouse);
  });
  console.log(paddleY);
  return (
    <div
      className={isPlayerTwo ? "paddle player2" : "paddle"}
      style={{ top: `${paddleY}px` }}
    />
  );
}
