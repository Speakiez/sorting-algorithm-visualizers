const numOfColumns = 75;

function Visualizer() {
  const createColumns = Array(numOfColumns).fill(null).map((column, index) => {
    let heightValue = index === 0 ? 2 : index * 5;

    return (
      <li key={heightValue} className="column" style={{ height: `${heightValue}px` }}></li>
    );
  });

  return (
    <ul className="visualizer">{createColumns}</ul>
  );
}

export default function App() {
  return (
    <div id="app-content">
      <h1>Sorting Algorithm Visualizers</h1>
      <Visualizer />
    </div>
  );
}
