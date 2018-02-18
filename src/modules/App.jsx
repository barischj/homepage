import React from 'react';
import Header from 'Modules/Header';
import Repos from 'Modules/Repos';

// The app consists of two main sections, header and repos.
const App = () => (
  <div>
    <div className="header-container">
      <Header />
    </div>
    <div className="repos-container">
      <Repos />
    </div>
  </div>
);

export default App;
