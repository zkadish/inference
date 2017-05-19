import React from 'react';
import { connect } from 'react-redux';

import InputButton from 'components/InputButton';
import Loader from 'components/Loader';
import CopyButton from 'components/CopyButton';

function App({children, token, placeHolder}) {
  const copyToken = (
    <div className="token">
      <div
        id="value"
        className="token__value"
      >
        {token}
      </div>
      <CopyButton />
    </div>
  );

  const loader = (
    <div className="loader">
      { placeHolder.startsWith('enter') ? null : <Loader />}
    </div>
  );

  return(
    <div>
      <h1 className="title">{children}</h1>
      <div className="interface">
        <form onSubmit={(e) => e.preventDefault()}>
          <InputButton />
        </form>
        {token ? copyToken : loader}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    placeHolder: state.account.placeHolder,
    token: state.account.token,
  }),
)(App);