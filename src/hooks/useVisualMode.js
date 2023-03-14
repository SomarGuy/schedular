import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // This line is new!

  function transition(newMode) {
    setMode(newMode);
  }

  function back() {
    // To be implemented
  }

  return { mode, transition, back };
};
