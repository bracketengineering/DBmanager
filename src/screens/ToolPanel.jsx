import GraphVisualiser from "../components/graph/GraphVisualiser";
import { useState, useRef, useEffect } from "react";
import FeatureViewer from "../components/viewer/FeatureViewer";
import APICaller from "../api/apiCaller";

// TODO: FIX UI WITH FLIXBOX

export default function ToolPanel() {
  const api = new APICaller();
  
  const visRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [graphData, setGraphData] = useState(null);
  const [graphDimensions, setGraphDimensions] = useState({ width: 800, height: 400 });

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
        <GraphVisualiser data={graphData} dimensions={graphDimensions} />
      </div>
      <div id="ViewerContainer">
        <FeatureViewer />
      </div>
      <div id="EditorContainer"></div>
    </div>
  );
};