import GraphVisualiser from "../components/graph/GraphVisualiser";
import React, { useState, useRef, useEffect } from "react";
import InfoPanel from "../components/info_panel/InfoPanel";
import APICaller from "../api/apiCaller";
import EditorPanel from "../components/editor/EditorPanel";
import GraphData from "../components/GraphData";
import Fuse from 'fuse.js';
import Lottie from 'lottie-react'
import {loadingScreen} from "../components/93857-abstract-modular-cube-1.js";

// TODO: FIX UI WITH FLIXBOX

export default function ToolPanel() {
  const api = new APICaller();
  
  const visRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [graphData, setGraphData] = useState(null);
  const [search, setSearch] = useState(null);
  //const [refresh, setRefresh] = useState(false);
  const [graphDimensions, setGraphDimensions] = useState({ width: 800, height: 400 });
  const [selectedObject, setSelectedObject] = useState({});
  const [editingMode, setEditingMode] = useState(false);
  const [typeOfSelectedObject, setTypeOfSelectedObject] = useState("");
  const [selectedField, setSelectedField] = useState([]);
  const [fieldInput, setFieldInput] = useState("");

  
  function selectObject(newObject) {
    if (!editingMode) {
      setSelectedObject(newObject);
    } else {
      setFieldInput(newObject.nodeId);
    }
  }//

  useEffect(() => {
    if (loading) {
      
      api.getAllGraphData().then(response => {
        const data = new GraphData(response);
        setGraphData(data);
        setLoading(false);
      }).catch(err => console.log(err))
    }

  }, [/*refresh*/]);

  useEffect(() => {
    function handleWindowResize() {
      if (visRef.current) {
        setGraphDimensions({
          width: visRef.current.offsetWidth,
          height: visRef.current.offsetHeight
        })
      }
    }
    

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [loading])

  return (
    <>
    {loading ? <div id="animationContainer"><Lottie id="animation" animationData={loadingScreen}/></div>:
    <div id="ToolPanel">
      <div ref={visRef} id="VisualiserContainer">
        <GraphVisualiser graphData={graphData} selectedObject={selectedObject}
         dimensions={graphDimensions} focusedNode={selectedObject} selectObject={selectObject} />
      </div>
      <div id="InfoPanelContainer">
        <InfoPanel 
          setGraphData={setGraphData}
          graphData={graphData} 
          search={search}
          selectObject={selectObject}
          selectedObject={selectedObject}
        />
      </div>
      <div id="EditorContainer">
        <EditorPanel 
          editingMode={editingMode} 
          setEditingMode={setEditingMode} 
          data={selectedObject.object} 
          setType={setTypeOfSelectedObject} 
          type={typeOfSelectedObject} 
          graphData={graphData}
          setGraphData={setGraphData}
          GraphData={GraphData}
          setSelectedField={setSelectedField}
          selectedField={selectedField}
          fieldInput={fieldInput}
          setLoading={setLoading}
        />
      </div>
    </div>
    }</>
  );
};