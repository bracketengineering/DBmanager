import GraphPreferencesList from "./GraphPreferencesList";

export default function GraphPreferencesPanel({ graphData, search, selectObject}) {
  return (
    <div id="PreferencesContainer">
      <div id="PanelTabsContainer">
        <div className="PanelTab selectedTab">
          <p>Preferences</p>
        </div>
      </div>
      <GraphPreferencesList graphData={graphData} search={search} selectObject={selectObject}/>
    </div>
  );
}