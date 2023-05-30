import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import NewPropertyForm from './NewPropertyForm';
import APICaller from '../../api/apiCaller';
import NewEdgeInputForm from './NewEdgeInputForm'
import NewEdgePropertyForm from './NewEdgePropertyForm';

export default function NewEdgeForm({ setNewEdgeFormOpen, setNewPropertyFormOpen, newPropertyFormOpen, formValue, setNewEdgeMode }) {
  const api = new APICaller();
  const [newEdge, setNewEdge] = useState({});
  const [selectedField, setSelectedField] = useState(null);
  
  const handleSubmit = () => {
    alert(JSON.stringify(newEdge));
    console.log(newEdge);
    api.addEdge(newEdge) 
      .then((response) => alert(JSON.stringify(response)))
      .catch((error) => alert(JSON.stringify("ERROR" + error)));
    setNewEdgeFormOpen(false);
  };


  return (
    <div>
      <NewEdgeInputForm 
        label={'Source'}
        value={''}
        newEdge={newEdge} 
        setNewEdge={setNewEdge} 
        setSelectedField={setSelectedField} 
        selectedField={selectedField}
        formValue={formValue}
        setNewEdgeMode={setNewEdgeMode}
      />
      <NewEdgeInputForm 
        label={'Label'}
        value={''} 
        newEdge={newEdge} 
        setNewEdge={setNewEdge} 
        setSelectedField={setSelectedField} 
        selectedField={selectedField}
        formValue={formValue}
        setNewEdgeMode={setNewEdgeMode}
      />
      <NewEdgeInputForm 
        label={'Target'}
        value='' 
        newEdge={newEdge}
        setNewEdge={setNewEdge} 
        setSelectedField={setSelectedField} 
        selectedField={selectedField}
        formValue={formValue}
        setNewEdgeMode={setNewEdgeMode}
      />
      {!newPropertyFormOpen && <button className="form-button" onClick={() => setNewPropertyFormOpen(true)}>New Property</button>}
      {newPropertyFormOpen && (
        <NewEdgePropertyForm 
          newEdge={newEdge}
          setNewEdge={setNewEdge}
          setNewPropertyFormOpen={setNewPropertyFormOpen}
        />
      )}

      
      <button className="form-button" onClick={handleSubmit}>Submit</button>
      <button className="form-button" onClick={() => {
        newPropertyFormOpen ? setNewPropertyFormOpen(false) : setNewEdgeFormOpen(false); setNewPropertyFormOpen(false);
      }}>Cancel</button>
    </div>
  );
}
