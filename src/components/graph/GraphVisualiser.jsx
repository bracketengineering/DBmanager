import { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import CustomNode from "./CustomNode";

export default function GraphVisualiser({ data, dimensions, focusedNode }) {
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    if (data) {
      const nodes = data.map(nodeInfo => {
        return { id: nodeInfo.id, nodeType: nodeInfo.label, name: nodeInfo.properties.name }
      });
      const links = [];
      data.map(nodeInfo => {
        nodeInfo.outgoingEdges.forEach(edge => links.push(edge));
      })

      const result = {}
      result.nodes = nodes;
      result.links = links;
      console.log(result);
      setParsedData(result);
    }
  }, [data])

  useEffect(() => {
    if (parsedData) {
      console.log(`FOCUSING NODE: ${focusedNode}`);
      let newData = Object.assign({}, parsedData);
      newData.focusedNodeId = focusedNode;
      setParsedData(newData);
    }
  }, [focusedNode])

  const graphConfig = {
    nodeHighlightBehavior: true,
    width: dimensions.width,
    height: dimensions.height,
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
    window.alert(`Clicked node ${nodeId}`);
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