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
    <div
      className="language"
      key={`${language}${percent}`}
      style={{ backgroundColor: colours[language] }}
    >
      <span>{language}</span>
      <span>{`${percent} %`}</span>
    </div>
  );
}

class Languages extends Component {

  render() {
    return (
      <div>
        {map(renderLanguage, this.props.languages)}
      </div>
    );
  }

}

export default Languages;
