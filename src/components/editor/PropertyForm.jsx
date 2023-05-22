export default function PropertyForm({ objectKeys, value, updateProperty, editingMode, setSelectedField }) {
    console.log(objectKeys);
    const handleInputChange = (input) => {
        updateProperty(objectKeys, input.target.value);
      };
    
    const handleInputClick = () => {
      if(editingMode) {
        setSelectedField(objectKeys)
      }
    }
    
      return (
        <div key={objectKeys.join('_')} className="input-block">
          <h3 className="property-form-header">{objectKeys[objectKeys.length - 1]}</h3>
          <input
            className="DataInput"
            type="text"
            value={value}
            disabled={!editingMode} 
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
          {}
        </div>
      );
}