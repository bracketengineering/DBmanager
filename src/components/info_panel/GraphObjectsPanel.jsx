import GraphNodesList from "./GraphNodesList";

export default function GraphObjectsPanel({ graphData, selectNode }) {

  return (
    <div id="ObjectListContainer">
      <div id="PanelTabsContainer">
        <div className="PanelTab">
          <p>G</p>
        </div>
        <div className="PanelTab">
          <p>G</p>
        </div>
      </div>
      <GraphNodesList data={graphData} selectNode={selectNode} />
    </div>
  );
}