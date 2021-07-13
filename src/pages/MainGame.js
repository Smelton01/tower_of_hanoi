import React, { useState, useEffect } from "react";
import Game from "../components/Game";
import Timer from "../components/Timer";

export default function MainGame() {
  const [end, setEnd] = useState(false);
  const [state, setState] = useState({
    name: "Anon",
    time: { min: 0, sec: 0, hr: 0 }, // Log result
  });

  return (
    <div>
      <Timer getTime={setState} timeState={state} gameEnd={end} />
      <Game gameEnd={setEnd} end={end} />
      <button onClick={() => console.log(state)}>testing</button>
    </div>
  );
}
