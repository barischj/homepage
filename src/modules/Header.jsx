import React from 'react';
import FAIconLink from 'Modules/FAIconLink';

// The Header is the first main section one sees.
const Header = () => (
  <div className="header-content">
    <p className="title">Jeremy Barisch-Rooney</p>
    <div>
      <FAIconLink icon="fa-github" url="https://github.com/barischj" />
      <FAIconLink icon="fa-linkedin" url="https://linkedin.com/in/jbarischr" />
    </div>
  </div>
);

export default Header;
