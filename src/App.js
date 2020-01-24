import React, { useReducer, useEffect } from "react";
import "./styles.css";
import Paddle from "./components/paddle";
import Ball from "./components/ball";

const initialState = {
  p1Paddle: {
    Y: 0
  },
  p2Paddle: {
    Y: 0
  },
  ball: {
    x: 0,
    y: 0,
    dx: 5,
    dy: 5
  }
};
function reducer(state, action) {
  switch (action.type) {
    case "Move_PaddleP1":
      return { ...state, p1Paddle: action.payload };
    case "Move_PaddleP2":
      return { ...state, p2Paddle: action.payload };
    case "MOVE_BALL":
      return { ...state, ball: action.payload };
    default:
      throw new Error();
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleKeyP1(event) {
    const bottomLimit = window.innerHeight - 378;
    let boundedY;
    if (event.keyCode === 87) {
      if (state.p1Paddle.Y - 8 < 0) {
        boundedY = 0;
      } else {
        boundedY = state.p1Paddle.Y - 8;
      }
      dispatch({
        type: "Move_PaddleP1",
        payload: { Y: boundedY }
      });
    }
    if (event.keyCode === 83) {
      if (state.p1Paddle.Y + 8 > bottomLimit) {
        boundedY = bottomLimit;
      } else {
        boundedY = state.p1Paddle.Y + 8;
      }
      dispatch({
        type: "Move_PaddleP1",
        payload: { Y: boundedY }
      });
    }
  }
  function handleKeyP2(event) {
    const bottomLimit = window.innerHeight - 378;
    let boundedY;
    if (event.keyCode === 38) {
      if (state.p2Paddle.Y - 8 < 0) {
        boundedY = 0;
      } else {
        boundedY = state.p2Paddle.Y - 8;
      }
      dispatch({
        type: "Move_PaddleP2",
        payload: { Y: boundedY }
      });
    }
    if (event.keyCode === 40) {
      if (state.p2Paddle.Y + 8 > bottomLimit) {
        boundedY = bottomLimit;
      } else {
        boundedY = state.p2Paddle.Y + 8;
      }
      dispatch({
        type: "Move_PaddleP2",
        payload: { Y: boundedY }
      });
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyP1);
    window.addEventListener("keydown", handleKeyP2);
    return () => {
      window.removeEventListener("keydown", handleKeyP1);
      window.removeEventListener("keydown", handleKeyP2);
    };
  }, [state]);
  useEffect(() => {
    const handle = setTimeout(() => {
      let dx = state.ball.dx;
      let dy = state.ball.dy;
      if (
        state.ball.x + state.ball.dx > 400 - 20 ||
        state.ball.x + state.ball.dx < 0
      ) {
        dx = -dx;
      }
      if (
        state.ball.y + state.ball.dy > 300 - 20 ||
        state.ball.y + state.ball.dy < 0
      ) {
        dy = -dy;
      }
      dispatch({
        type: "MOVE_BALL",
        payload: {
          dx,
          dy,
          x: state.ball.x + dx,
          y: state.ball.y + dy
        }
      });
    }, 50);
    return () => clearTimeout(handle);
  }, [state.ball]);
  return (
    <div className="container">
      <Paddle paddleY={state.p1Paddle.Y} />
      <Paddle paddleY={state.p2Paddle.Y} isPlayerTwo />
      <Ball pos={state.ball} />
    </div>
  );
}
