import React, { useState, useEffect } from "react";
import "./styles.css";
import Paddle from "./components/paddle";
import Ball from "./components/ball";
export default function App() {
  let [p1PaddleY, setp1PaddleY] = useState(0);
  let [p2PaddleY, setp2PaddleY] = useState(0);
  function handleKey(event) {
    switch (event.keyCode) {
      case 87:
        setp1PaddleY(p1PaddleY - 8);
        break;
      case 38:
        setp2PaddleY(p2PaddleY - 8);
        break;
      case 83:
        setp1PaddleY(p1PaddleY + 8);
        break;
      case 40:
        setp2PaddleY(p2PaddleY + 8);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);
  return (
    <div className="container">
      <Paddle paddleY={p1PaddleY} />
      <Paddle paddleY={p2PaddleY} isPlayerTwo />
      <Ball />
    </div>
  );
}
