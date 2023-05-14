import GraphVisualiser from "../components/graph/GraphVisualiser";
import { useState, useRef, useEffect } from "react";
import FeatureViewer from "../components/viewer/FeatureViewer";

export default function ToolPanel() {
  const visRef = useRef(null);
  const [graphDimensions, setGraphDimensions] = useState({ width: 800, height: 400 });

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
        <GraphVisualiser dimensions={graphDimensions} />
      </div>
      <div id="ViewerContainer">
        <FeatureViewer />
      </div>
      <div id="EditorContainer"></div>
    </div>
  );
};