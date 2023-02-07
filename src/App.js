import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [text, setText] = useState("Starting...");
  const [speed, setSpeed] = useState(300);
  const [index, setIndex] = useState(1);
  const textContent = "I Love Coding!";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(textContent.slice(0, index));
      setIndex(index + 1);
      if (index > textContent.length) {
        setIndex(1);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [index, speed, textContent]);

  return (
    <div className="app">
      <h1 className="text">{text}</h1>
      <div className="controls">
        <label htmlFor="speed">Speed:</label>
        <input
          className="input"
          type="number"
          name="speed"
          id="speed"
          value={300 / speed}
          min="1"
          max="10"
          step="1"
          onChange={(e) => setSpeed(300 / e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
