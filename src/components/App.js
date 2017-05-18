import React from 'react';
import { connect } from 'react-redux';

import InputButton from 'components/InputButton';
import Loader from 'components/Loader';
import CopyButton from 'components/CopyButton';

function App({children, token}) {
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
      <Loader />
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
    token: state.account.token,
  }),
)(App);