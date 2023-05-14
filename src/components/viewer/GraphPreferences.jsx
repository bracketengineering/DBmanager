
export default function GraphPreferences() {
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

  return (
    <div id="PreferencesListContainer">
      <table className="PreferencesList">
        <thead>
          <tr>
            <th>Option</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {TEST_DATA.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}