// SecuritySettings.js
import React, { useState } from 'react';

function SecuritySettings() {
  const [userRoles, setUserRoles] = useState([]);
  const [accessControls, setAccessControls] = useState([]);

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <div>
      <h2>Security Settings</h2>
      <label>
        User Roles:
        <input
          type="text"
          value={userRoles.join(', ')}
          onChange={(e) => setUserRoles(e.target.value.split(',').map(role => role.trim()))}
        />
      </label>
      <label>
        Access Controls:
        <textarea
          value={accessControls.join('\n')}
          onChange={(e) => setAccessControls(e.target.value.split('\n').map(control => control.trim()))}
        />
      </label>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default SecuritySettings;
