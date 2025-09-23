import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{seconds} seconds</h1>
      <button onClick={() => setIsActive(true)}>Start</button>
      <button onClick={() => setIsActive(false)}>Stop</button>
      <button onClick={() => { setIsActive(false); setSeconds(0); }}>Reset</button>
    </div>
  );
}

export default App;