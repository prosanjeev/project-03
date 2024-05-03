// GeneralSettings.js
import React, { useState } from 'react';

function GeneralSettings() {
  const [siteTitle, setSiteTitle] = useState('Your Site Title');
  const [tagline, setTagline] = useState('Your Tagline');
  const [timezone, setTimezone] = useState('Your Timezone');

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <div>
      <h2>General Settings</h2>
      <label>
        Site Title:
        <input
          type="text"
          value={siteTitle}
          onChange={(e) => setSiteTitle(e.target.value)}
        />
      </label>
      <label>
        Tagline:
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
      </label>
      <label>
        Timezone:
        <input
          type="text"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default GeneralSettings;
