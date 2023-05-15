export default class GraphData {
  constructor(data) {
    this._originalData = data;
    this._nodes = data.map(nodeInfo => {
      return { id: nodeInfo.id, nodeType: nodeInfo.label, name: nodeInfo.properties.name }
    });
    const links = [];
    data.map(nodeInfo => {
      nodeInfo.outgoingEdges.forEach(edge => links.push(edge));
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
    this._originalData.forEach(node => {
      if (node.id == nodeID) {
        return node;
      }
    })
    return {};
  }

}