import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import cx from 'classnames';

import * as action from 'redux/actions/actions';

function InputButton({
  clearToken,
  enterNumber,
  error,
  escape,
  getToken,
  message,
  phoneNumber,
  placeHolder,
  token,
  secret,
}) {
  const onSubmit = () => {
    clearToken();
    getToken(phoneNumber);
    placeHolder(phoneNumber);
    enterNumber('');
  };

  const validateNum = (e) => {
    const index = e.target.value.length - 1;
    if (e.key === 'Enter' && token) {
      clearToken();
      placeHolder('enter a phone number');
      return;
    }

    if (e.key === 'Backspace') {
      enterNumber(phoneNumber.slice(0, index), true);
      return;
    }

    if (index >= 13) return;

    if (/\d$/.test(e.key)) {
      enterNumber(`${phoneNumber}${e.key}`, false);
      clearToken();
      placeHolder('enter a phone number');
    } else {
      error('enter numbers only');
      if (e.key === 'Escape') {
        escape();
        return;
      }
      secret(e.keyCode);
    }
  };

  return (
    <fieldset>
      <div className="input-button">
        <input
          className={cx(
            'interface__input',
            { 'interface--message': message.startsWith('enter') },
          )}
          type="text"
          value={phoneNumber}
          placeholder={message}
          onKeyUp={e => validateNum(e)}
          autoFocus
        />
        <button
          className="interface__button"
          onClick={() => onSubmit()}
          disabled={phoneNumber.length < 14}
        >
          submit
        </button>
      </div>
    </fieldset>
  );
}

InputButton.propTypes = {
  enterNumber: PropTypes.func,
  getToken: PropTypes.func,
  phoneNumber: PropTypes.string,
};

export default connect(
  state => ({
    phoneNumber: state.account.phoneNumber,
    message: state.account.placeHolder,
    token: state.account.token,
  }),
  dispatch => ({
    clearToken: () => dispatch(action.clearToken()),
    enterNumber: (number, backspace) => dispatch(action.enterNumber(number, backspace)),
    error: message => dispatch(action.error(message)),
    escape: () => dispatch({ type: 'ESCAPE' }),
    getToken: (phoneNumber) => {
      // mock XHR fetch
      // pass the phone as a parameter?
      setTimeout(() => {
        dispatch(action.getToken(uuid()));
      }, 1000);
    },
    placeHolder: message => dispatch(action.placeHolder(message)),
    secret: value => dispatch({ type: 'SECRET', value }),
  }),
)(InputButton);
