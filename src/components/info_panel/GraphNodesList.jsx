import './styles/GraphObjects.css';

export default function GraphNodesList({ graphData, selectObject }) {
  if (graphData) return (
    <div id="GraphObjects">
        <table id="GraphObjectsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {graphData.getNodes().map((item, index) => (
              <tr onClick={() => selectObject(
                {focusedNodeId: item.id,
                 object: graphData.getNodeJSON(item.id)}
              )} key={index}>
                <td>{item.id.slice(0, 4)}..</td>
                <td>{item.nodeType}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}