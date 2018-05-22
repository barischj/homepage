import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import request from 'superagent';
// import request from 'Modules/request-mock.js';
import urljoin from 'url-join';
import Languages from 'Modules/Languages';

const repoUrl = repo => `https://api.github.com/repos/barischrooneyj/${repo}`;
const languagesUrl = repo => urljoin(repoUrl(repo), '/languages');

// Take an object in the format {language1: bytes, language2: bytes, ...} and
// return a list like:
//   [
//     {
//       name: "Haskell",
//       bytes: 1000,
//       percentage: 90,
//     },
//     {
//       name: "Python",
//       bytes: 100,
//       percentage: 1,
//     },
//   ...
//   ]
//
const takeLanguages = (response) => {
  const totalBytes = R.sum(R.values(response));
  const f = (bytes, name) => ({
    name,
    bytes,
    percentage: Math.round(100 * bytes / totalBytes),
  });
  const mapped = R.values(R.mapObjIndexed(f, response));
  const sorted = R.reverse(R.sort(R.prop('name'), mapped));
  return R.take(3, sorted);
};


// An element describing a GitHub repo.
// Includes title, description and top languages.
class Repo extends Component {
  static propTypes = {
    repo: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      languages: [],
    };
    // Get description.
    request.get(repoUrl(this.props.repo))
      .end((err, response) => {
        if (err) console.log(err);
        // In development we need to delay setting state in the constructor.
        setTimeout(() => {
          this.setState({ description: JSON.parse(response.text).description });
        }, 10);
      });
    // Get languages.
    request.get(languagesUrl(this.props.repo))
      .end((err, response) => {
        if (err) console.log(err);
        const parsed = JSON.parse(response.text);
        // In development we need to delay setting state in the constructor.
        setTimeout(() => {
          this.setState({ languages: takeLanguages(parsed) });
        }, 10);
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
