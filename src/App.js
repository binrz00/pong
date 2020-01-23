import React, { useState, useEffect } from "react";
import "./styles.css";
import Paddle from "./components/paddle";

export default function App() {
  const [p1PaddleY, setp1PaddleY] = useState(0);
  const [p2PaddleY, setp2PaddleY] = useState(0);
  function handleKey(event) {
    switch (event.keyCode) {
      case 87:
        setp1PaddleY(p1PaddleY + 1);
        break;
      case 38:
        setp2PaddleY(p2PaddleY + 1);
        break;
      case 83:
        setp1PaddleY(p1PaddleY - 1);
        break;
      case 40:
        setp2PaddleY(p2PaddleY - 1);
        break;
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
  }, [p1PaddleY, p2PaddleY, handleKey]);
  return (
    <div className="container">
      <Paddle paddleY={p1PaddleY} />
      <Paddle paddleY={p2PaddleY} isPlayerTwo />
    </div>
  );
}
