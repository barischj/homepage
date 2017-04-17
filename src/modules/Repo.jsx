import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import { prop, sortBy, take, toPairs } from 'ramda';

import Languages from 'Languages';

// Take the three most popular languages.
function takeLanguages(response) {
  return take(3, sortBy(prop(1), toPairs(response)));
}

class Repo extends Component {

  static propTypes = {
    repo: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      description: 'Flexbox layouts for Threepenny-gui',
      languages: [],
    };
    request.get(`https://api.github.com/repos/barischj/${this.props.repo}/languages`)
      .end((err, response) => {
        if (err) console.log(err);
        this.setState({ languages: takeLanguages(JSON.parse(response.text)) });
      });
  }

  render() {
    return (
      <div className="repo-card">
        <p>
          {this.props.repo}
        </p>
        <hr />
        <p>
          {this.state.description}
        </p>
        <Languages languages={this.state.languages} />
      </div>
    );
  }

}

export default Repo;
