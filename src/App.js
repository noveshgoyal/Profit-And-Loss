import { useState } from "react";
import "./styles.css";

export default function App() {
  const [initial, setInitial] = useState("");
  const [qty, setQty] = useState("");
  const [current, setCurrent] = useState("");
  const [output, setOutput] = useState("");

  function clickHandler(initial, qty, current) {
    if (initial === "" || qty === "" || current === "") {
      // check for empty inputs
      setOutput("Enter valid inputs!");
      document.getElementById("output").style.backgroundColor = "red";
    } else {
      initial = Number(initial);
      qty = Number(qty);
      current = Number(current);
      if (initial < current) {
        const profit = (current - initial) * qty;
        const profitPercent = ((profit / (initial * qty)) * 100).toFixed(2);
        setOutput(
          `Your Profit is ${profit} with a profit percent of ${profitPercent}%`
        );
        document.getElementById("output").style.backgroundColor = "green";
      } else if (current < initial) {
        const loss = (initial - current) * qty;
        const lossPercent = ((loss / (initial * qty)) * 100).toFixed(2);
        document.getElementById("output").style.backgroundColor = "red";
        setOutput(
          `Your Loss is ${loss} with a loss percent of ${lossPercent}%`
        );
      } else {
        document.getElementById("output").style.backgroundColor = "yellow";
        setOutput("No profit No loss!");
      }
    }
  }

  function setInitialPrice(e) {
    setInitial(e.target.value);
  }
  function setCurrentPrice(e) {
    setCurrent(e.target.value);
  }
  function setStocksQty(e) {
    setQty(e.target.value);
  }

  return (
    <div className="App">
      <h1>Profit or Loss</h1>
      <label htmlFor="initial ">Initial Price of the Stock:</label>
      <input
        min={0}
        id="initial"
        type="number"
        placeholder="Initial Price"
        onChange={setInitialPrice}
      />
      <label htmlFor="stocks-qty">No. of Stocks:</label>
      <input
        min={0}
        id="stocks-qty"
        type="number"
        placeholder="Qty. of stocks"
        onChange={setStocksQty}
      />
      <label htmlFor="current">Current Price of the Stock:</label>
      <input
        min={0}
        id="current"
        type="number"
        placeholder="new price"
        onChange={setCurrentPrice}
      />
      <button onClick={() => clickHandler(initial, qty, current)}>
        Calculate
      </button>
      <div id="output">{output}</div>
    </div>
  );
}
