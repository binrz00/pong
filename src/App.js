import React from "react";
import "./styles.css";
import Paddle from "./components/paddle";

export default function App() {
  return (
    <div className="App">
      <Paddle />
      <Paddle player-two />
    </div>
  );
}
