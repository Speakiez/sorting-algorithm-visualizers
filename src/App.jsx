import { useState } from "react";

function Visualizer({ columnArray }) {
  const createColumns = columnArray.map(value => {
    let columnHeight = value === 0 ? 2 : value * 5;

    return (
      <li 
        key={`column#${value}`} 
        data-key={`column#${value}`}
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

  function reset() {
    const columnsCopy = Array(75).fill(null).map((_value, index) => index);
    
    setColumnArray(columnsCopy);
  }

  function randomize() {
    // Fisher-Yates Shuffle
    const columnsCopy = columnArray.slice();
    let l = columnsCopy.length, i, j;

    while (l) {
      i = Math.floor(Math.random() * l--);

      j = columnsCopy[l];
      columnsCopy[l] = columnsCopy[i];
      columnsCopy[i] = j;
    }

    setColumnArray(columnsCopy);
  }

  function bubbleSort() {
    const columnsCopy = columnArray.slice();

    for (let i = 1; i < columnsCopy.length; i++) {
      for (let j = 0; j < columnsCopy.length - 1; j++) {
          let a = columnsCopy[j], b = columnsCopy[j + 1];

          if (a > b) {
          columnsCopy[j] = b;
          columnsCopy[j + 1] = a;
          } 
      }
    }

    setColumnArray(columnsCopy);
  }

  return (
    <div id="app">
      <h1>Sorting Algorithms Visualizer</h1>
      <div id="content">
        <div className="btn-list">
          <button className="reset btn" onClick={reset}>Reset</button>
          <button className="randomize btn" onClick={randomize}>Randomize</button>
          <button className="bubble btn" onClick={bubbleSort}>Bubble Sort</button>
          <button className="selection btn">Selection Sort</button>
          <button className="insertion btn">Insertion Sort</button>
        </div>
        <Visualizer columnArray={columnArray} />
      </div>
    </div>
  );
}