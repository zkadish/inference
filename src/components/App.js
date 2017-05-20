import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputButton from 'components/InputButton';
import Loader from 'components/Loader';
import CopyButton from 'components/CopyButton';

function App({ token, phoneNumber, placeHolder }) {
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

  return (
    <div>
      <h1 className="title">inference</h1>
      <div className="interface">
        <form onSubmit={e => e.preventDefault()}>
          <InputButton />
        </form>
        {token ? copyToken : loader}
      </div>
    </div>
  );
}

App.propTypes = {
  placeHolder: PropTypes.string,
  token: PropTypes.string,
};

export default connect(
  state => ({
    // phoneNumber: state.account.phoneNumber,
    placeHolder: state.account.placeHolder,
    token: state.account.token,
  }),
)(App);
