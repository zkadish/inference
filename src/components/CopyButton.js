import React from 'react';

import Clipboard from 'utils/clipboard.min';

class CopyButton extends React.Component {
  componentDidMount() {
    new Clipboard('.token__copy');
  }

  render() {
    return (
      <button
        className="token__copy"
        data-clipboard-target="#value"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 896 960">
          <path d="M128,768H384v64H128V768ZM448,384H128v64H448V384ZM576,576V448L384,640,576,832V704H896V576H576ZM288,512H128v64H288V512ZM128,704H288V640H128v64Zm576,64h64V896c-1,18-7,33-19,45s-27,18-45,19H64c-35,0-64-29-64-64V192c0-35,29-64,64-64H256a128,128,0,0,1,256,0H704c35,0,64,29,64,64V512H704V320H64V896H704V768ZM128,256H640c0-35-29-64-64-64H512c-35,0-64-29-64-64s-29-64-64-64-64,29-64,64-29,64-64,64H192C157,192,128,221,128,256Z"/>
        </svg>
      </button>
    );
  }
}

export default CopyButton;
