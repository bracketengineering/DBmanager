import './styles/GraphObjects.css';

export default function GraphEdgesList({ graphData, selectObject }) {
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
              <tr onClick={() => selectObject(
                {focusedNodeId: item.target,
                 object: item}
              )} key={index}>
                <td>{item.id.slice(0, 4)}..</td>
                <td>{item.sourceName}</td>
                <td>{item.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}