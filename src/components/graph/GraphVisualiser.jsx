import { Graph } from "react-d3-graph";
import { useEffect } from "react";
import APICaller from "../../api/apiCaller";

export default function GraphVisualiser({ dimensions }) {
  const api = new APICaller();

  useEffect(() => {
    api.getAllGraphData().then(response => console.log(JSON.stringify(response))).catch(err => console.log(err))
  }, [])

  const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }, { id: "Xav" }, { id: "Will" }, { id: "George" }, { id: "Poo" }, { id: "Cum" }, { id: "L" }],
    links: [
      { source: "Harry", target: "Sally" },
      { source: "Harry", target: "Alice" },
      { source: "Harry", target: "Xav" },
      { source: "Harry", target: "Poo" },
      { source: "George", target: "Cum" },
      { source: "George", target: "Poo" },
      { source: "George", target: "L" },
      { source: "Xav", target: "George" },
      { source: "Xav", target: "Sally" },
      { source: "Will", target: "Poo" },
      { source: "Will", target: "Alice" },
      { source: "Alice", target: "Poo" },
    ],
  };

  const graphConfig = {
    nodeHighlightBehavior: true,
    width: dimensions.width,
    height: dimensions.height,
    initialZoom: 3,
    d3: {
      gravity: -50,
    },
    node: {
      fontColor: "white",
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "blue",
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
      {console.log(dimensions)}
      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={graphConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
    </>
  );
}