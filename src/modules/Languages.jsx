import React, { Component } from 'react';
import { map } from 'ramda';
import colours from 'Src/language-colours.json';

/**
 * @param {[string, number]} args - A tuple of a language and its percentage of
 *   use.
 * @returns {object} A React div element showing a language and its percentage
 *   of use, coloured based on the language.
 */
function renderLanguage(args) {
  const [language, percent] = args;
  return (
    <tr
      key={`${language}${percent}`}
      style={{ backgroundColor: colours[language] }}
    >
      <td className="language-td">{language}</td>
      <td className="ranguage-td">{`${percent} %`}</td>
    </tr>
  );
}

class Languages extends Component {

  render() {
    return (
      <table className="language-table">
        {map(renderLanguage, this.props.languages)}
      </table>
    );
  }

}

export default Languages;
