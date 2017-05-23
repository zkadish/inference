import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputButton from 'components/InputButton';
import Loader from 'components/Loader';
import CopyButton from 'components/CopyButton';

import Game from 'utils/game';

function App({ token, phoneNumber, placeHolder, konami }) {
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

  const game = () => {
    setTimeout(() => {
      Game();
    }, 1000);

    return (
      <div>
        <div id="info">
          <h1>Canvas Asteroids:</h1>
          <p>Use [A][S][W][D] or [&larr;][&uarr;][&darr;][&rarr;] to MOVE</p>
          <p>Use [SPACE] or [K] to SHOOT</p>
        </div>
        <canvas id="canvas" />
      </div>
    );
  };

  return (
    <div>
      <h1 className="title">inference</h1>
      <div className="interface">
        <form onSubmit={e => e.preventDefault()}>
          <InputButton />
        </form>
        {token ? copyToken : loader}
      </div>
      {konami ? game() : ''}
    </div>
  );
}

App.propTypes = {
  placeHolder: PropTypes.string,
  token: PropTypes.string,
};

export default connect(
  state => ({
    konami: state.account.konami,
    placeHolder: state.account.placeHolder,
    token: state.account.token,
  }),
)(App);
