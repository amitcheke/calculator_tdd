import { useState } from "react";
import add from "./calculator";
import "./App.css";

function App() {
  const [result, setRsult] = useState("");
  const [numberString, setnumberString] = useState("");

  const handleStringInput = (e) => {
    setnumberString(e.target.value);
  };

  const calculate = () => {
    const sum = add(numberString);
    setRsult(sum);
  };

  return (
    <div className="App">
      <header className="App-header">String Calculator</header>
      <main>
        <div className="calculator-container">
          <textarea
            placeholder="Please enter number string"
            onChange={handleStringInput}
          />
          <button onClick={calculate}>Calculate</button>
        </div>
        {result && <h2>Result: {result}</h2>}
      </main>
    </div>
  );
}

export default App;
