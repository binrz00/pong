import React, { useState, useEffect } from "react";
import "./styles.css";
import Paddle from "./components/paddle";
import Ball from "./components/ball";
export default function App() {
  const [p1PaddleY, setp1PaddleY] = useState(0);
  const [p2PaddleY, setp2PaddleY] = useState(0);
  function handleKey(event) {
    const bottomLimit = window.innerHeight - 378;
    switch (event.keyCode) {
      case 87:
        if (p1PaddleY - 8 < 0) {
          setp1PaddleY(0);
        } else {
          setp1PaddleY(p1PaddleY - 8);
        }
        break;
      case 38:
        if (p2PaddleY - 8 < 0) {
          setp2PaddleY(0);
        } else {
          setp2PaddleY(p2PaddleY - 8);
        }
        break;
      case 83:
        if (p1PaddleY + 8 > bottomLimit) {
          setp1PaddleY(bottomLimit);
        } else {
          setp1PaddleY(p1PaddleY + 8);
        }
        break;
      case 40:
        if (p2PaddleY + 8 > bottomLimit) {
          setp2PaddleY(bottomLimit);
        } else {
          setp2PaddleY(p2PaddleY + 8);
        }
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
