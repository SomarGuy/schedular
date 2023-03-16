import { useState } from "react";
import Empty from "components/Appointment/Empty";

export default function useVisualMode(initialMode) {
const [mode, setMode] = useState(initialMode);
const [history, setHistory] = useState([initialMode]);

const transition = (newMode, replace = false) => {
setMode(newMode);
setHistory(prevHistory => {
const updatedHistory = replace
? [...prevHistory.slice(0, -1), newMode]
: [...prevHistory, newMode];
return updatedHistory;
});
};

const back = () => {
if (history.length <= 1) return;
const newHistory = [...history.slice(0, -1)];
setHistory(newHistory);
setMode(newHistory[newHistory.length - 1]);
};

return { mode, transition, back };
}