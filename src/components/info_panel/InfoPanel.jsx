import "./styles/InfoPanel.css";
import GraphPreferences from "./GraphPreferences";
import GraphObjects from "./GraphObjects";

export default function InfoPanel({ graphData, selectNode }) {
  return (
    <>
      <div id="PreferencesContainer">
        <div className="PanelHeader">
          <p>Preferences</p>
        </div>
        <GraphPreferences />
      </div>
      <div id="ObjectListContainer">
        <div id="ObjectListTabs">
          <div className="PanelTab">
            <p>G</p>
          </div>
          <div className="PanelTab">
            <p>G</p>
          </div>
        </div>
        <GraphObjects data={graphData} selectNode={selectNode} />
      </div>
      <div id="JSONContainer">
        <div className="PanelHeader">
          <p>JSON Viewer</p>
        </div>
      </div>
    </>
  );
};
