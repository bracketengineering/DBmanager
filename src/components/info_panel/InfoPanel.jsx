import "./styles/InfoPanel.css";
import GraphPreferencesPanel from "./GraphPreferencesPanel";
import GraphObjectsPanel from "./GraphObjectsPanel";
import JSONViewer from './JSONViewer';

export default function InfoPanel({ graphData, selectObject }) {
  return (
    <>
      <GraphPreferencesPanel />
      <GraphObjectsPanel graphData={graphData} selectObject={selectObject} />
      <JSONViewer data={graphData}></JSONViewer>
    </>
  );
};
