import './styles/GraphObjects.css';

export default function GraphObjects({ data, selectNode }) {
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

  if (data) return (
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
            {data.map((item, index) => (
              <tr onClick={() => selectNode(item.id)} key={index}>
                <td>{item.id.slice(0, 4)}..</td>
                <td>{item.label}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}