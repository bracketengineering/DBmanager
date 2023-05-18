import { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import CustomNode from "./CustomNode";

export default function GraphVisualiser({ selectObject, graphData, dimensions, selectedObject }) {
  const [parsedData, setParsedData] = useState(null);

  // Extract data needed from data returned from Neptune
  useEffect(() => {
    if (graphData) {
      const parsedData = graphData.getGraphData(selectedObject.focusedNodeId);
      setParsedData(parsedData);
    }
  }, [graphData])

  // Focus on a node when clicked in the objects list
  useEffect(() => {
    if (parsedData) {
      let newData = graphData.getGraphData(selectedObject.focusedNodeId);
      setParsedData(newData);
    }
  }, [selectedObject])

  const graphConfig = {
    nodeHighlightBehavior: true,
    width: dimensions.width,
    height: dimensions.height,
    focusAnimationDuration: 0.2,
    initialZoom: 3,
    directed: true,
    staticGraphWithDragAndDrop: true,
    d3: {
      gravity: -50,
    },
    node: {
      fontColor: "white",
      color: "lightgreen",
      highlightStrokeColor: "blue",
      labelProperty: "name",
      viewGenerator: CustomNode,
    },
    link: {
      highlightColor: "lightblue",
    },

  };

  const onClickNode = function (nodeId) {
    const object = graphData.getNodeJSON(nodeId);
    selectObject({focusedNodeId: nodeId, object: object});   
  };

  const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <>
      {parsedData ?
        <Graph
          id="graph-id"
          data={parsedData}
          config={graphConfig}
          onClickNode={onClickNode}
          onClickLink={onClickLink}
        /> : <></>}
    </>
  );
}