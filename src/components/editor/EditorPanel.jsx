
import React, { useState, useEffect } from "react";
import "./EditorPanel.css";
import APICaller from "../../api/apiCaller";
import LinkForm from './LinkForm';
import SubPropertyForm from './SubPropertyForm';
import GraphData from "../GraphData";
import ButtonPanel from "./ButtonPanel";


const EditorPanel = ({ data = {}, type = "", setEditingMode, editingMode = false, graphData, setType}) => {
  const api = new APICaller();
  const [dataBeingEdited, setDataBeingEdited] = useState(data);
  const [showAddNodeOrEdgeForm, setShowAddNodeOrEdgeForm] = useState(false);

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
    
    console.log(type);
    //alert(JSON.stringify(dataBeingEdited));
   
      //const response = await api.updateNode(dataBeingEdited);

    if((Object.keys(dataBeingEdited).length) > 0 ) {
      try{
        // true if data is node
        if(dataBeingEdited.properties.name) {
          setType("node");
          dataBeingEdited.incomingEdges = Object.values(dataBeingEdited.incomingEdges);
          dataBeingEdited.outgoingEdges = Object.values(dataBeingEdited.outgoingEdges);
          await api.updateNode(dataBeingEdited);
        } 
        // returns true if data is edge
        else if (dataBeingEdited.source) {
          setType("edge");
          await api.updateNode(dataBeingEdited);
        }
      } catch(error) {
        alert("ERROR Updating Object: " + error);
      } 
    } else { alert("No Object Selected")}
    setEditingMode(false);
  };

  return (
    <div id="EditorPanel">
      <ButtonPanel 
        dataBeingEdited={dataBeingEdited}
        setDataBeingEdited={setDataBeingEdited}
        updateProperty={updateProperty}
        api={api}
        setEditingMode={setEditingMode}
      />
      <h1 className="object-title">{!(Object.keys(dataBeingEdited).length) <= 0 ? 
        (dataBeingEdited.properties.name ? dataBeingEdited.properties.name: "New Object"):''}</h1>
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