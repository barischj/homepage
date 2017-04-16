import React, { Component } from 'react';

import Repo from 'Repo';

class Repos extends Component {
  render() {
    return (
      <div className="repos-content">
        <Repo repo="threepenny-gui-flexbox" />
      </div>
    );
  }
}

export default Repos;
