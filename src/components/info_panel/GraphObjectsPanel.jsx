import GraphEdgesList from "./GraphEdgesList";
import GraphNodesList from "./GraphNodesList";
import { useState } from "react";

export default function GraphObjectsPanel({ graphData, selectObject }) {
  const [currentTab, setCurrentTab] = useState("nodes");

  return (
    <div id="ObjectListContainer">
      <div id="PanelTabsContainer">
        <div className={currentTab == "nodes" ? "PanelTab selectedTab": "PanelTab"}
         onClick={() => setCurrentTab('nodes')}>
          <p>Nodes</p>
        </div>
        <div className={currentTab == "edges" ? "PanelTab selectedTab": "PanelTab"}
         onClick={() => setCurrentTab('edges')}>
          <p>Edges</p>
        </div>
      </div>
      { currentTab == "nodes" ? 
      <GraphNodesList graphData={graphData} selectObject={selectObject} />
      : <GraphEdgesList graphData={graphData} selectObject={selectObject} /> }
    </div>
  );
}