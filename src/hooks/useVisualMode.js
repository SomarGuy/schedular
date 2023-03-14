import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  function transition(newMode) {
    setMode(newMode);
  }

  function back() {
    // To be implemented
  }

  return { mode, transition, back };
};
