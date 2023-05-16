
import React, { useState, useEffect } from "react";
import "./EditorPanel.css";
import APICaller from "../../api/apiCaller";
import LinkForm from './LinkForm';
import SubPropertyForm from './SubPropertyForm';
import GraphData from "../GraphData";


const EditorPanel = ({ data = {}, type = {}, setEditingMode, editingMode = false, graphData}) => {
  const api = new APICaller();
  const [dataBeingEdited, setDataBeingEdited] = useState(data);

  useEffect(() => {
    setDataBeingEdited(data);
  }, [data]);

  /**
   * Iterates through array of objectKeys (the path to property). 
   * For each key, if that key exists in the object -> updates the objectToUpdate reference to move down a level in the object
   * if not it saves it as `{}` to maintain nested strucutre.
   * when it gets to the final layer a.k.a the object within the node or edge that is being updated it sets the value of the key at that point to `newValue`
   * It then uses `...` to copy the node/edge object with the updated value in the place of the key specified and sets it to the value `dataBeingUpdated`
   * `dataBeingUpdated` is what we send to the api request as the new node or edge.
   * @param {Array} objectKeys - array of objectKeys representing path to property being updated
   * @param {String} newValue - new value
   */
  const updateProperty = (objectKeys, newValue) => {
    let objectToUpdate = dataBeingEdited;
    objectKeys.slice(0, -1).forEach((key) => {
      if (!objectToUpdate[key]) {
        objectToUpdate[key] = {}
      };
      objectToUpdate = objectToUpdate[key];
    });
    objectToUpdate[objectKeys[objectKeys.length - 1]] = newValue;
    setDataBeingEdited({ ...dataBeingEdited });
  };

  const handleCancel = () => {
    setDataBeingEdited(data);
    setEditingMode(false);
  };

  const handleSubmit = async () => {
    console.log("data to edit", dataBeingEdited);
    console.log("data to edit", dataBeingEdited.properties.name);
    console.log(type);
    alert(JSON.stringify(dataBeingEdited));
   
      //const response = await api.updateNode(dataBeingEdited);
    
    /**
     * API call works, however cannot read edge data for a node as each edge in the incoming and outgoing edges array is assigned a key of its index in the array and then the edge object as the value of the key
     * therefore need to alter how we are storing edges in graphData or change the adminNeptuneClient.
     * 
     * we also need to check whether the type of the currently selected object is a node or edge. 
     * Could do this by checking label (could be annoying when we add new labels) 
     * or by something similar to the following 
     * 
     * if(graphData.getNodes().forEach((object) => {dataBeingEdited.id === object.id})) {
     *    await api.updateNode(dataBeingEdited);
     * }
     * else if (graphData.getEdges().forEach((object) => {dataBeingEdited.id === object.id})) {
     *    await api.updateEdge(dataBeingEdited);
     * }
     *
     * 
     * e.g. 
     * 0: {
        "id": "8cc39c21-c7d5-7e1c-6dc5-d8159f3dff8a",
        "source": "a4c39bc0-3fb6-ec2f-139d-49b59a506f2f",
        "label": "hasViewed",
        "target": "fcc39bed-9895-9f3a-fd68-105a883bcf82",
        "properties": {
          "lastViewed": 1680276164497
        },
        "targetName": "Lebanese"
        }
     */
  
    
    setEditingMode(false);
  };

  return (
    <div id="EditorPanel">
      <h1 className="object-title">{!(Object.keys(data).length) <= 0 ? data.properties.name:''}</h1>
      {type === 'edge' ? (
        <LinkForm edge={dataBeingEdited} updateProperty={updateProperty} />
      ) : (
        <SubPropertyForm object={dataBeingEdited} updateProperty={updateProperty} editingMode={editingMode}/>
      )}
      {editingMode ?(
        <> <button className="form-button" onClick={handleCancel}>Cancel</button>
        <button className="form-button" onClick={() => handleSubmit()}>Submit</button> </>) : 
        (<><button className="form-button" onClick={() => setEditingMode(true)}>Edit</button> </>
      )}
    </div>
  );
};
export default EditorPanel;