import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import request from 'superagent';
import urljoin from 'url-join';
import Languages from 'Modules/Languages';

/**
 * @param {Object} response - The JSON response from GitHub's language API. Each
 *   key is a language e.g. Haskell and the value is the number of bytes written
 *   in that language.
 * @returns {[[string, number]]} A list of the two most used languages and
 *   respective percentage of use, in ascending order.
 */
function takeLanguages(response) {
  const mostUsed =
    R.take(2, R.reverse(R.sortBy(R.prop(1), R.toPairs(response))));
  const totalBytes = R.sum(R.values(response));
  return R.map(R.adjust(x => Math.round((x / totalBytes) * 100), 1), mostUsed);
}

function repoUrl(repo) {
  return `https://api.github.com/repos/barischj/${repo}`;
}

function languagesUrl(repo) {
  return urljoin(repoUrl(repo), '/languages');
}

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
        this.setState({ description: JSON.parse(response.text).description });
      });
    // Get languages.
    request.get(languagesUrl(this.props.repo))
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
