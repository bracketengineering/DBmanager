import "./styles/InfoPanel.css";
import GraphPreferencesPanel from "./GraphPreferencesPanel";
import GraphNodesList from "./GraphNodesList";
import GraphObjectsPanel from "./GraphObjectsPanel";

export default function InfoPanel({ graphData, selectObject }) {
  return (
    <>
      <GraphPreferencesPanel />
      <GraphObjectsPanel graphData={graphData} selectObject={selectObject} />
      <JsonViewer data={graphData}></JsonViewer>
    </>
  );
};
