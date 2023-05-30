import "./styles/InfoPanel.css";
import GraphPreferencesPanel from "./GraphPreferencesPanel";
import GraphObjectsPanel from "./GraphObjectsPanel";
import JSONViewer from './JSONViewer';
import React from 'react';

export default function InfoPanel({ selectedObject, setGraphData, search, graphData, selectObject }) {
  return (
    <>
      <GraphPreferencesPanel setGraphData={setGraphData} graphData={graphData} search={search}/>
      <GraphObjectsPanel graphData={graphData} selectObject={selectObject} />
      <JSONViewer data={selectedObject}></JSONViewer>
    </>
  );
};
