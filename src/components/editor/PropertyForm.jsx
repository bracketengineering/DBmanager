import { useState } from "react";
import APICaller from "../../api/apiCaller";

export default function PropertyForm({ objectKeys, value, updateProperty, editingMode, setSelectedField, updateType }) {
    const api = new APICaller();
    const [header] = useState(objectKeys[objectKeys.length - 1]);

    //alert(objectKeys[objectKeys.length - 1]);
    const handleInputChange = (input) => {
        updateProperty(objectKeys, input.target.value);
      };
    
    const handleInputClick = () => {
      if(editingMode) {
        setSelectedField(objectKeys);
      }
    }

    
      return (
        <div key={objectKeys.join('_')} className="input-block">
          <h3 className="property-form-header">{header}</h3>
          <input
            className="DataInput"
            type="text"
            value={value}
            disabled={((updateType==='updateNode' && ((header === 'id') || (header === 'label')))  ? true :!editingMode)} 
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
          {/* {(editingMode && updateType==='updateNode') ? <button className="form-button" onClick={handleSubmit}>Submit</button> : <></>} */}
        </div>
      );
}