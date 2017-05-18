import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import * as action from 'redux/actions/actions';

function InputButton({
  phoneNumber,
  enterNumber,
  getToken,
  placeHolder,
  message,
  clearToken,
}) {
  const validateNum = (e) => {
    const index = e.target.value.length - 1;
    const lastVal = e.target.value[index];
    const regex = /\d/g;
    if (index >= 14) return;
    if (regex.test(lastVal)) {
      enterNumber(e.target.value);
    } else {
      enterNumber(e.target.value.slice(0, index));
    }
  };

  const onSubmit = () => {
    clearToken();
    getToken(phoneNumber);
    placeHolder(phoneNumber);
    enterNumber('');
  };

  return (
    <fieldset>
      <div className="input-button">
        <input
          className="interface__input"
          type="text"
          value={phoneNumber}
          placeholder={message}
          onChange={(e) => validateNum(e)}
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
    enterNumber: number => dispatch(action.enterNumber(number)),
    getToken: (phoneNumber) => {
      // mock XHR fetch
      // pass the phone as a parameter?
      setTimeout(() => {
        dispatch(action.getToken(uuid()));
      }, 1000);
    },
    clearToken: () => dispatch(action.clearToken()),
    placeHolder: message => dispatch(action.placeHolder(message)),
  }),
)(InputButton);
