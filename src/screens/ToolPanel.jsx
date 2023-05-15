import GraphVisualiser from "../components/graph/GraphVisualiser";
import { useState, useRef, useEffect } from "react";
import InfoPanel from "../components/info_panel/InfoPanel";
import APICaller from "../api/apiCaller";
import EditorPanel from "../components/editor/EditorPanel";

// TODO: FIX UI WITH FLIXBOX

export default function ToolPanel() {
  const api = new APICaller();
  
  const visRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [graphData, setGraphData] = useState(null);
  const [graphDimensions, setGraphDimensions] = useState({ width: 800, height: 400 });
  const [selectedNode, setSelectedNode] = useState("");

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      api.getAllGraphData().then(response => {
        console.log(response)
        setGraphData(response);
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
        <GraphVisualiser data={graphData} dimensions={graphDimensions} focusedNode={selectedNode} />
      </div>
      <div id="InfoPanelContainer">
        <InfoPanel graphData={graphData} selectNode={setSelectedNode} />
      </div>
      <div id="EditorContainer">
        <EditorPanel />
      </div>
    </div>
  );
};