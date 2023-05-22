import React, { useState } from 'react';
import Collapsible from './Collapsible';
import PropertyForm from './PropertyForm';
import NewEdgeForm from './NewEdgeForm';
import NewPropertyForm from './NewPropertyForm';

export default function SubPropertyForm({ object = {}, objectKeys = [], updateProperty, editingMode, setSelectedField }) {
  const [newEdgeFormOpen, setNewEdgeFormOpen] = useState(false);
  const [newPropertyFormOpen, setNewPropertyFormOpen] = useState(false);

  const isEdge = ['incomingEdges', 'outgoingEdges'].includes(objectKeys[objectKeys.length - 1]);
  const edgeType = (['incomingEdges'].includes(objectKeys[objectKeys.length - 1]) && isEdge) ? "incomingEdges" : "outgoingEdges";
  const isProperties = objectKeys[objectKeys.length - 1] === 'properties';

  return (
    <div>
      {Object.entries(object).map(([key, value]) => {
        const newObjectKeys = objectKeys.concat(key);
        return (
          <div key={key}>
            <Collapsible title={key}>
              {typeof value === 'object' ? (
                <SubPropertyForm
                  object={value}
                  objectKeys={newObjectKeys}
                  updateProperty={updateProperty}
                  editingMode={editingMode}
                  setSelectedField={setSelectedField}
                />
              ) : (
                <PropertyForm
                  objectKeys={newObjectKeys}
                  value={value}
                  updateProperty={updateProperty}
                  editingMode={editingMode}
                  setSelectedField={setSelectedField}
                />
              )}
            </Collapsible>
          </div>
        );
      })}
      {isEdge && editingMode && !newEdgeFormOpen && <button className="form-button" onClick={() => setNewEdgeFormOpen(true)}>New Item</button>}
      {isEdge && editingMode && newEdgeFormOpen && (
        <NewEdgeForm 
          updateProperty={updateProperty}
          objectKeys={objectKeys}
          setNewEdgeFormOpen={setNewEdgeFormOpen}
          setNewPropertyFormOpen={setNewPropertyFormOpen}
          setSelectedField={setSelectedField}
          edgeType={edgeType}
        />
      )}
      {isProperties && editingMode && !newPropertyFormOpen && <button className="form-button" onClick={() => setNewPropertyFormOpen(true)}>New Property</button>}
      {isProperties && editingMode && newPropertyFormOpen && (
        <NewPropertyForm 
          updateProperty={updateProperty}
          objectKeys={objectKeys}
          setNewPropertyFormOpen={setNewPropertyFormOpen}
          setSelectedField={setSelectedField}
        />
      )}
    </div>
  );
}
