import "./EditorPanel.css";

export default function EditorPanel({editingMode, setEditingMode}) {

  

  /* 
  <PropertyForm key={key} updateProperty={func: updateProperty}> (When user input changes value,
     call updateProperty(key, value))
  <SubPropertyForm object={object} subKey={e.g 'properties'} updateProperty={func: updateProperty}> (
    function updateSubProperty = (key, newValue) => {
      updateProperty(subKey+key, newValue);
    }
    Object.entries(object[subKey]).map((key, value) => {
      <PropertyForm key={key} updateProperty={func: updateSubProperty} />
    })
  )
  */

  /* const object = {id:, label:, ...}
  function updateProperty(key, newValue)
  Object.entries(object).map((key, value) => {
    if(typeof(value) === "object") {
      <SubPropertyForm subKey={key} object, updateProperty>
    } else {
      <PropertyForm ... />
    }
  })*/

  return (
    <div id="EditorPanel">
      <div id="PanelTabsContainer">
        <div className="PanelTab selectedTab halfTab">
          <p>Preferences</p>
        </div>
      </div>
      <div id="ObjectEditor">
        
      </div>
    </div>
  );
};
