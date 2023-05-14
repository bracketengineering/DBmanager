import GraphVisualiser from "../components/graph/GraphVisualiser";
import { useEffect, useRef } from "react";

export default function ToolPanel() {
  const visRef = useRef(null);

  useEffect(() => {}, [visRef.current]);

  return (
    <div id="ToolPanel">
      <div ref={visRef} id="VisualiserContainer">
        {visRef.current ? <GraphVisualiser dimensions={{
          width: visRef.current.offsetWidth,
          height: visRef.current.offsetHeight,
        }} /> : <></>}
      </div>
      <div id="ViewerContainer"></div>
      <div id="EditorContainer"></div>
    </div>
  );
}
;