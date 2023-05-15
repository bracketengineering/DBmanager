export default function PropertyForm({ objectKeys, value, updateProperty, editingMode }) {
    const handleInputChange = (input) => {
        updateProperty(objectKeys, input.target.value);
      };
    
      return (
        <div key={objectKeys.join('_')} className="input-block">
          <h3 className="property-form-header">{objectKeys[objectKeys.length - 1]}</h3>
          <input
            className="DataInput"
            type="text"
            value={value}
            disabled={!editingMode} 
            onChange={handleInputChange}
          />
        </div>
      );
}