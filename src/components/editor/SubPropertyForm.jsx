import React from 'react';
import Collapsible from './Collapsible';
import PropertyForm from './PropertyForm';

export default function SubPropertyForm({ object = {}, objectKeys = [], updateProperty, editingMode, setSelectedField }) {
  return (
    <div>
      {Object.entries(object).map(([key, value]) => {
        const newObjectKeys = objectKeys.concat(key);
        return (
          <Collapsible key={key} title={key}>
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
        );
      })}
    </div>
  );
}
