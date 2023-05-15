import GraphNodesList from "./GraphNodesList";
import { useState } from "react";

export default function GraphObjectsPanel({ graphData, selectNode }) {
  const [currentTab, setCurrentTab] = useState("nodes");

  return (
    <div id="ObjectListContainer">
      <div id="PanelTabsContainer">
        <div className="PanelTab">
          <p>Nodes</p>
        </div>
        <div className="PanelTab">
          <p>Edges</p>
        </div>
      </div>
      <GraphNodesList graphData={graphData} selectNode={selectNode} />
    </div>
  );
}