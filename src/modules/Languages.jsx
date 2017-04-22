import React, { Component } from 'react';
import { map } from 'ramda';
import colours from 'Src/language-colours.json';

// A coloured language and LOC information.
function renderLanguage(args) {
  const [language, loc] = args;
  return (
    <div className="language" style={{ backgroundColor: colours[language] }}>
      <span>{language}</span>
      <span>{`${loc} %`}</span>
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
