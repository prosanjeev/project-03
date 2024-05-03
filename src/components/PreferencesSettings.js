// PreferencesSettings.js
import React, { useState } from 'react';

function PreferencesSettings() {
  const [displayOptions, setDisplayOptions] = useState({
    darkMode: false,
    fontSize: 'medium',
  });
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <div>
      <h2>Preferences Settings</h2>
      <label>
        Dark Mode:
        <input
          type="checkbox"
          checked={displayOptions.darkMode}
          onChange={(e) => setDisplayOptions({ ...displayOptions, darkMode: e.target.checked })}
        />
      </label>
      <label>
        Font Size:
        <select
          value={displayOptions.fontSize}
          onChange={(e) => setDisplayOptions({ ...displayOptions, fontSize: e.target.value })}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>
        Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </label>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default PreferencesSettings;
