import React, { useState, useEffect } from 'react';

export default function NewEdgePropertyForm({ setNewPropertyFormOpen, setNewEdge, newEdge, setSelectedField }) {
  const [formState, setFormState] = useState({
    key: '',
    value: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
        ...formState,
        [name]: value
      });
    
  };
  useEffect(() => {
      const newProperty = {
      properties: {
        [formState.key]: Number(formState.value),
      }
    };
    console.log("FORM STATE", formState);
    setNewEdge({...newEdge, ...newProperty});
    //alert(JSON.stringify(newEdge));
  }, [formState]);


  return (
    <div>
      <label>
        Key:
        <input type="text" name="key" value={formState.key} onChange={handleInputChange} />
      </label>
      <label>
        Value:
        <input type="text" name="value" value={formState.value} onChange={handleInputChange} />
      </label>
    </div>
  );
}
