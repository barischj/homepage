import React, { Component } from 'react';
import Header from 'Modules/Header';
import Repos from 'Modules/Repos';

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
