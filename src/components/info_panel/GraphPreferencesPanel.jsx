import GraphPreferencesList from "./GraphPreferencesList";

export default function GraphPreferencesPanel() {
  return (
    <div id="PreferencesContainer">
      <div id="PanelTabsContainer">
        <div className="PanelTab selectedTab">
          <p>Preferences</p>
        </div>
      </div>
      <GraphPreferencesList />
    </div>
  );
}