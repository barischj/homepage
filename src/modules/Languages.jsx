import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colours from 'colours';
import { map } from 'ramda';

// A coloured table row for a language.
function renderLanguage(args) {
  const [language, loc] = args;
  return (
    <tr style={{ backgroundColor: colours[language] }}>
      <td>{language}</td>
      <td>{loc}</td>
    </tr>
  );
}

class Languages extends Component {

  constructor(props) {
    super(props);
    console.log(props.languages);
  }

  static propTypes = {
    languages: PropTypes.array.isRequired,
  }

  render() {
    return (
      <table>
        {map(renderLanguage, this.props.languages)}
      </table>
    );
  }

}

export default Languages;
