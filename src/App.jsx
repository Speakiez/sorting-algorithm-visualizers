import { useState } from "react";

function Visualizer({ columnArray }) {
  const createColumns = columnArray.map(value => {
    let columnHeight = value === 0 ? 2 : value * 5;

    return (
      <li 
        key={`column#${value}`} 
        className="column" 
        style={{ height: `${columnHeight}px` }}
      ></li>
    );
  });

  return (
    <ul className="visualizer">{createColumns}</ul>
  );
}

export default function App() {
  const [columnArray, setColumnArray] = useState(Array(75).fill(null).map((_value, index) => index));

  function randomize() {
    let columnsCopy = columnArray.slice();
    let m = columnsCopy.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = columnsCopy[m];
      columnsCopy[m] = columnsCopy[i];
      columnsCopy[i] = t;
    }

    setColumnArray(columnsCopy);
  }

  return (
    <div id="app">
      <h1>Sorting Algorithm Visualizers</h1>
      <main id="content">
        <button className="randomize-btn" onClick={randomize}>Randomize</button>
        <Visualizer columnArray={columnArray} />
      </main>
    </div>
  );
}