import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory(prevHistory => [...prevHistory.slice(0, -1), newMode]);
    } else {
      setHistory(prevHistory => [...prevHistory, newMode]);
    }
  }

  function back() {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };
}
