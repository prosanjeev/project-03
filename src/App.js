import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralSettings from './components/GeneralSettings';
import SecuritySettings from './components/SecuritySettings';
import PreferencesSettings from './components/PreferencesSettings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/settings/general" element={<GeneralSettings />} />
        <Route path="/settings/security" element={<SecuritySettings />} />
        <Route path="/settings/preferences" element={<PreferencesSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
