import React, { useState } from 'react';

export default function NewPropertyForm({ objectKeys, updateProperty, setNewPropertyFormOpen }) {
  const [formState, setFormState] = useState({
    key: '',
    value: '',
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const newProperty = {
      [formState.key]: formState.value,
    };
    updateProperty(objectKeys.concat(Object.keys(newProperty)), newProperty);
    setNewPropertyFormOpen(false);
  };

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
      <button className="form-button" onClick={handleSubmit}>Submit</button>
      <button className="form-button" onClick={() => setNewPropertyFormOpen(false)}>Cancel</button>
    </div>
  );
}
