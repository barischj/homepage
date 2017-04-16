import React, { Component } from 'react';

import FAIconLink from 'FAIconLink';
import Header from 'Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <Header />
        </div>
        <div className="header-content">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
