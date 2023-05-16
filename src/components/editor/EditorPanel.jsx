
import React, { useState, useEffect } from "react";
import "./EditorPanel.css";
import APICaller from "../../api/apiCaller";
import LinkForm from './LinkForm';
import SubPropertyForm from './SubPropertyForm';


const EditorPanel = ({ data = {}, type, setEditingMode, editingMode = false}) => {
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

  const handleSubmit = () => {
    console.log(dataBeingEdited);
    alert("You will now upload this data");
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
        <button className="form-button" onClick={handleSubmit}>Submit</button> </>) : 
        (<><button className="form-button" onClick={() => setEditingMode(true)}>Edit</button> </>
      )}
    </div>
  );
};
export default EditorPanel;