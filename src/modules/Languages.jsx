import React, { Component } from 'react';
import colours from 'Src/language-colours.json';
import { map } from 'ramda';

// A coloured language and LOC information.
function renderLanguage(args) {
  console.log(args);
  const [language, loc] = args;
  return (
    <div className="language" style={{ backgroundColor: colours[language] }}>
      <span className="language-language">{language}</span>
      <span className="language-loc">{`${loc} LOC`}</span>
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
