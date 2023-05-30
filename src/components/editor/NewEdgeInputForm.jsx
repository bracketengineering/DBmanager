import React, { useEffect, useState } from 'react';

export default function NewEdgeInputForm({ label, newEdge, setNewEdge, formValue, setNewPropertyFormOpen, selectedField, setSelectedField, setNewEdgeMode }) {
  const [formState, setFormState] = useState({
    key: label.toLowerCase(),
    value: ''
  });



  useEffect( () => {
    //console.log(formValue);
    if (selectedField === label && selectedField !== 'Label') {
        handleInputChange(formValue);
    }
  }, [formValue]);

  // const handleInputChange = (input) => {
  //   setFormState({
  //     ...formState,
  //     value: input
  //   });
  //     console.log("FORMSTATE", formState);
  //     const newProperty = {
  //       [formState.key]: input,
  //     };
  //     console.log("NEW PROP", newProperty);
  //     setNewEdge({...newEdge, newProperty});
  //     console.log("INPUT", newEdge)
  //     //setNewPropertyFormOpen(false);
  // };
  const handleInputChange = (input) => {
    setFormState((prevFormState) => {
      const updatedFormState = {
        ...prevFormState,
        value: input
      };
  
      const newProperty = {
        [updatedFormState.key]: input,
      };
  
      setNewEdge((prevNewEdge) => {
        // Check if the property already exists in newEdge
        if (prevNewEdge[updatedFormState.key]) {
          // If it does, update the value
          return {
            ...prevNewEdge,
            [updatedFormState.key]: input,
          };
        } else {
          // If it doesn't, add the new property
          return {
            ...prevNewEdge,
            ...newProperty
          };
        }
      });
  
      return updatedFormState;
    });
  };
  

  const handleInputClick = () => {
    //setSelectedField(label);
    setSelectedField(label);
    setNewEdgeMode(true);
  }

  return (
    <div className="input-block">
          <h3 className="property-form-header">{label}</h3>
          <input
            className="DataInput"
            type="text"
            value={formState.value}
            onChange={(event) => handleInputChange(event.target.value)}
            onClick={handleInputClick}
          />
          {}
        </div>
  )
   
}
