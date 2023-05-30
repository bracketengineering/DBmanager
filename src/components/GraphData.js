//import Fuse from "fuse.js";

export default class GraphData {
  constructor(data) {
    console.log(data);
    this._originalData = data;
    this._nodes = data.map(nodeInfo => {
      return { id: nodeInfo.id, nodeType: nodeInfo.label, name: nodeInfo.properties.name }
    });
    const links = [];
    data.forEach(nodeInfo => {
      nodeInfo.outgoingEdges.forEach(edge => { 
        edge.sourceName = nodeInfo.properties.name;
        let targetNode = this.getNodeJSON(edge.target);
        if (targetNode) {edge.targetName = targetNode.properties.name}
        links.push(edge);
      })
    })

    this._links = links;
  }

  getNodes() {
    return this._nodes;
  }

  getEdges() {
    return this._links;
  }

  getGraphData(focusedNode) {
    return {
      nodes: this._nodes,
      links: this._links,
      focusedNodeId: focusedNode,
    }
  }

  getNodeJSON(nodeID) {
    return this._originalData.find((value, number, index) => value.id === nodeID)
  }


}