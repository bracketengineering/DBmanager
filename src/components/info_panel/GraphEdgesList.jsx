import './styles/GraphObjects.css';

export default function GraphEdgesList({ graphData, selectObject }) {
  const TEST_DATA = [
    { id: 0, name: "Will" },
    { id: 1, name: "Xav" },
    { id: 2, name: "George" },
    { id: 0, name: "Will" },
    { id: 1, name: "Xav" },
    { id: 2, name: "George" },
    { id: 0, name: "Will" },
    { id: 1, name: "Xav" },
    { id: 2, name: "George" },
    { id: 0, name: "Will" },
    { id: 1, name: "Xav" },
    { id: 2, name: "George" },
    { id: 0, name: "Will" },
    { id: 1, name: "Xav" },
    { id: 2, name: "George" },
  ]

  if (graphData) return (
    <div id="GraphObjects">
        <table id="GraphObjectsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Source</th>
              <th>Target</th>
            </tr>
          </thead>
          <tbody>
            {graphData.getEdges().map((item, index) => (
              <tr onClick={() => selectObject(item.id)} key={index}>
                <td>{item.id.slice(0, 4)}..</td>
                <td>{item.source}</td>
                <td>{item.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}