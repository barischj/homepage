import React, { Component } from 'react';
import Repo from 'Modules/Repo';

class Repos extends Component {

  render() {
    return (
      <div className="repos-content">
        <Repo repo="threepenny-gui-flexbox" />
        <Repo repo="threepenny-gui-contextmenu" />
        <Repo repo="flask-access" />
        <Repo repo="dotfiles" />
      </div>
    );
  }

}

export default Repos;
