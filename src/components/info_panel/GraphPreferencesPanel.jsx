import GraphPreferencesList from "./GraphPreferencesList";

export default function GraphPreferencesPanel({setGraphData, graphData, search, selectObject}) {
  return (
    <div id="PreferencesContainer">
      <div id="PanelTabsContainer">
        <div className="PanelTab selectedTab">
          <p>Preferences</p>
        </div>
      </div>
      <GraphPreferencesList setGraphData={setGraphData} graphData={graphData} search={search} selectObject={selectObject}/>
    </div>
  );
}