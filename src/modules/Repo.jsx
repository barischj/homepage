import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import request from 'superagent';
import Languages from 'Modules/Languages';

// The most used languages and their percentage of use [[String, Int]].
function takeLanguages(response) {
  const mostUsed = R.take(3, R.sortBy(R.prop(1), R.toPairs(response)));
  const totalBytes = R.sum(R.map(R.prop(1), mostUsed));
  return R.map(R.adjust(x => (x / totalBytes) * 100, 1), mostUsed);
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
        <p>{this.props.repo}</p>
        <hr />
        <p className="repo-card-description">{this.state.description}</p>
        <Languages languages={this.state.languages} />
      </div>
    );
  }

}

export default Repo;
