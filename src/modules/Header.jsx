import fontawesome from '@fortawesome/fontawesome';
import React from 'react';
import FAIconLink from 'Modules/FAIconLink';

import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf';

fontawesome.library.add(faGithub);
fontawesome.library.add(faLinkedin);
fontawesome.library.add(faFilePdf);

// The Header is the first main section one sees.
const Header = () => (
  <div className="header">
    <p className="title">Jeremy Barisch-Rooney</p>
    <div>
      <FAIconLink type="fab" icon="fa-github" url="https://github.com/barischrooneyj" />
      <FAIconLink type="fab" icon="fa-linkedin" url="https://linkedin.com/in/jbarischr" />
      <FAIconLink type="fas" icon="fa-file-pdf" url="CV.pdf" />
    </div>
  </div>
);

export default Header;
