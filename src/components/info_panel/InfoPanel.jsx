import "./styles/InfoPanel.css";
import GraphPreferencesPanel from "./GraphPreferencesPanel";
import GraphNodesList from "./GraphNodesList";
import GraphObjectsPanel from "./GraphObjectsPanel";

export default function InfoPanel({ graphData, selectNode }) {
  return (
    <>
      <GraphPreferencesPanel />
      <GraphObjectsPanel graphData={graphData} selectNode={selectNode} />
      <div id="JSONContainer"> 
        <div className="PanelHeader">
          <p>JSON Viewer</p>
        </div>
      </div>
    </>
  );
};
