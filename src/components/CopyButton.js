import React from 'react';

import Clipboard from 'utils/clipboard.min';

class CopyButton extends React.Component {
  componentDidMount() {
    new Clipboard('.copy-button');
  }

  render() {
    return(
      <button
        className="copy-button"
        data-clipboard-target="#token"
      >
        copy
      </button>
    );
  }
}

export default CopyButton;
