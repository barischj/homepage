import React, { Component } from 'react';
import FAIconLink from 'Modules/FAIconLink';

function renderIconLink(icon, url) {
  return (
    <span className="margin-sml">
      <FAIconLink url={url} icon={icon} />
    </span>
  );
}

class Header extends Component {

  render() {
    return (
      <div className="header-content">
        <p className="title">Jeremy Barisch Rooney</p>
        <div>
          {renderIconLink('fa-github', 'https://github.com/barischj')}
          {renderIconLink('fa-linkedin', 'https://linkedin.com/in/jbarischr')}
        </div>
      </div>
    );
  }

}

export default Header;
