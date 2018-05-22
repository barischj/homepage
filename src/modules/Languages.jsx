import PropTypes from 'prop-types';
import React from 'react';
import * as R from 'ramda';
import colours from 'Src/language-colours.json';

// Return a coloured element containing the language's name and percentage use.
const renderLanguage = language => (
  <tr
    key={`${language.name}${language.percentage}`}
    style={{ backgroundColor: colours[language.name] }}
  >
    <td className="language-td">{language.name}</td>
    <td className="ranguage-td">{`${language.percentage} %`}</td>
  </tr>
);

// A single column table of programming languages.
const Languages = props => (
  <table className="language-table">
    <tbody>
      {R.map(renderLanguage, props.languages)}
    </tbody>
  </table>
);

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};

export default Languages;
