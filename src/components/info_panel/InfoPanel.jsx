import "./styles/InfoPanel.css";
import GraphPreferencesPanel from "./GraphPreferencesPanel";
import GraphObjectsPanel from "./GraphObjectsPanel";
import JSONViewer from './JSONViewer';
import React from 'react';
import { select } from "d3";

export default function InfoPanel({ selectedObject, search, graphData, selectObject }) {
  return (
    <>
      <GraphPreferencesPanel graphData={graphData} search={search} selectObject={selectObject}/>
      <GraphObjectsPanel graphData={graphData} selectObject={selectObject} />
      <JSONViewer data={selectedObject}></JSONViewer>
    </>
  );
};
