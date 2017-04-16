import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';

class Repo extends Component {

  static propTypes = {
    repo: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { languages: '' };
    request.get(`https://api.github.com/repos/barischj/${this.props.repo}/languages`)
      .end((err, res) => {
        if (err) throw err;
        this.languages = res;
      });
  }

  render() {
    return (
      <div className="repo">
        {this.state.languages}
      </div>
    );
  }
}

export default Repo;
