import React, { Component } from 'react';

import FAIconLink from 'FAIconLink';
import Header from 'Header';
import Repos from 'Repos';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <Header />
        </div>
        <div className="repos-container">
          <Repos />
        </div>
      </div>
    );
  }
}

export default App;
