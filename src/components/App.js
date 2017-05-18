import React from 'react';
import { connect } from 'react-redux';

import InputButton from 'components/InputButton';
import Loader from 'components/Loader';
import CopyButton from 'components/CopyButton';

function App({children, token}) {

  return(
    <div>
      <h1 className="title">{children}</h1>
      <div className="interface">
        <form onSubmit={(e) => e.preventDefault()}>
          <InputButton />
        </form>
        {/*<Loader />*/}
        <div
          id="token"
          className="interface__token"
        >
          {token}
        </div>
        <CopyButton />
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    token: state.account.token,
  }),
)(App);