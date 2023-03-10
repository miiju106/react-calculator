import "./index.css";
import Main from "./main.js";
import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState("");
  const [final, setFinal] = useState("");

  return (
    <div className="App">
      <Main result={result} setResult={setResult} final={final} setFinal={setFinal} />
    </div>
  );
}

export default App;
