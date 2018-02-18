import PropTypes from 'prop-types';
import React from 'react';

// A Font Awesome icon link.
const FAIconLink = props => (
  <a href={props.url} className="share-dialog">
    <i className={`fa ${props.icon}`} />
  </a>
);

FAIconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FAIconLink;
