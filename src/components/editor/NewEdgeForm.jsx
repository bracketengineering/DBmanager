import React from 'react';
import PropertyForm from './PropertyForm';
import NewPropertyForm from './NewPropertyForm';

export default function NewEdgeForm({ objectKeys, updateProperty, setNewEdgeFormOpen, setNewPropertyFormOpen, newPropertyFormOpen, setSelectedField, edgeType }) {
  
  
  const handleSubmit = () => {
    setNewEdgeFormOpen(false);
  };

  return (
    <div>
      <PropertyForm 
        objectKeys={[`${edgeType}`,'source']} 
        value={''} 
        updateProperty={updateProperty} 
        editingMode={true} 
        setSelectedField={setSelectedField} 
      />
      <PropertyForm 
        objectKeys={[`${edgeType}`,'label']} 
        value={''} 
        updateProperty={updateProperty} 
        editingMode={true}
        setSelectedField={setSelectedField} 
      />
      <PropertyForm 
        objectKeys={[`${edgeType}`,'Target']} 
        value='' 
        updateProperty={updateProperty} 
        editingMode={true} 
        setSelectedField={setSelectedField} 
      />
      {!newPropertyFormOpen && <button className="form-button" onClick={() => setNewPropertyFormOpen(true)}>New Property</button>}
      {newPropertyFormOpen && (
        <NewPropertyForm 
          updateProperty={updateProperty}
          objectKeys={[`${edgeType}`,'Properties']}
          setNewPropertyFormOpen={setNewPropertyFormOpen}
        />
      )}

      
      <button className="form-button" onClick={handleSubmit}>Submit</button>
      <button className="form-button" onClick={() => setNewEdgeFormOpen(false)}>Cancel</button>
    </div>
  );
}
