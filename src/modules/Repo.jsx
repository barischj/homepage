import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import request from 'superagent';
import urljoin from 'url-join';
import Languages from 'Modules/Languages';

const repoUrl = repo => `https://api.github.com/repos/barischj/${repo}`;
const languagesUrl = repo => urljoin(repoUrl(repo), '/languages');

// Takes an object in the format {languages1: bytes, language2: bytes, ...}
// where bytes is an int saying how many bytes where used by that language for
// a repo. Returns a list of objects, where the following is an example of an
// object:
// {
//  name: "Haskell",
//  bytes: 1000,
//  percentage: 90,
// }
const takeLanguages = (response) => {
  const languages =
    R.map(x => ({ name: x[0], bytes: x[1] }), R.toPairs(response));
  const totalBytes = R.sum(R.values(response));
  const languageWithPercentage = x =>
    ({ ...x, percentage: Math.round((x.bytes / totalBytes) * 100) });
  const topLanguages =
    R.take(3, R.reverse(R.sortBy(R.prop('bytes'), languages)));
  return R.map(languageWithPercentage, topLanguages);
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
          /* if (err) console.log(err);*/
        this.setState({ description: JSON.parse(response.text).description });
      });
    // Get languages.
    request.get(languagesUrl(this.props.repo))
      .end((err, response) => {
          /* if (err) console.log(err);*/
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
