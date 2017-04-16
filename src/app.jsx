import React, { Component } from 'react';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title />
        <div>
          <a href="https://github.com/barischj">
            <i className="fa fa-github" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
