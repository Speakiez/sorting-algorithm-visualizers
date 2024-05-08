import { useState } from "react";

function Visualizer({ columnArray }) {
  const createColumns = columnArray.map(value => {
    let columnHeight = value === 0 ? 2 : value * 5;

    return (
      <li key={`column#${value}`} className="column" style={{ height: `${columnHeight}px` }}></li>
    );
  });

  return (
    <ul className="visualizer">{createColumns}</ul>
  );
}

export default function App() {
  const [columnArray, setColumnArray] = useState(Array(75).fill(null).map((_value, index) => index));

  return (
    <div id="app">
      <h1>Sorting Algorithm Visualizers</h1>
      <main id="content">
        <button>Randomize</button>
        <Visualizer columnArray={columnArray} />
      </main>
    </div>
  );
}
