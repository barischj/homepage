import React from 'react';
import Repo from 'Modules/Repo';

// A flexbox containing the Repo elements.
const Repos = () => (
  <div className="repos-content">
    <Repo repo="flask-access" />
    <Repo repo="homepage" />
    <Repo repo="threepenny-gui-flexbox" />
    <Repo repo="threepenny-gui-contextmenu" />
    <Repo repo="dotfiles" />
  </div>
);

export default Repos;
