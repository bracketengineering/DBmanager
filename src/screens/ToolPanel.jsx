import GraphVisualiser from "../components/graph/GraphVisualiser";
import { useState, useRef, useEffect } from "react";
import InfoPanel from "../components/info_panel/InfoPanel";
import APICaller from "../api/apiCaller";
import EditorPanel from "../components/editor/EditorPanel";
import GraphData from "../components/GraphData";

// TODO: FIX UI WITH FLIXBOX

export default function ToolPanel() {
  const api = new APICaller();
  
  const visRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [graphData, setGraphData] = useState(null);
  const [graphDimensions, setGraphDimensions] = useState({ width: 800, height: 400 });
  const [selectedObject, setSelectedObject] = useState({});
  const [editingMode, setEditingMode] = useState(false);
  const [typeOfSelectedObject, setTypeOfSelectedObject] = useState("");

  function selectObject(newObject) {
    if (!editingMode) {
      setSelectedObject(newObject);
    }
  }

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      api.getAllGraphData().then(response => {
        const data = new GraphData(response);
        setGraphData(data);
      }).catch(err => console.log(err))
    }
  }, [])

  useEffect(() => {
    function handleWindowResize() {
      setGraphDimensions({
        width: visRef.current.offsetWidth,
        height: visRef.current.offsetHeight
      })
    }

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  return (
    <div id="ToolPanel">
      <div ref={visRef} id="VisualiserContainer">
        <GraphVisualiser graphData={graphData} selectedObject={selectedObject}
         dimensions={graphDimensions} focusedNode={selectedObject} selectObject={selectObject} />
      </div>
      <div id="InfoPanelContainer">
        <InfoPanel 
          selectedObject={selectedObject.object} 
          graphData={graphData} 
          selectObject={setSelectedObject} 
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
        />
      </div>
    </div>
  );
};