import GraphPreferences from "./GraphPreferences";

export default function FeatureViewer() {
  return (
    <div id="FeatureViewer">
      <div id="PreferencesContainer">
        <h1>Preferences</h1>
        <GraphPreferences />
      </div>
      <div id="FeatureListContainer"></div>
      <div id="JSONViewer"></div>
    </div>
  );
};
