
const ENTER_NUMBER = 'ENTER_NUMBER';
const GET_TOKEN = 'GET_TOKEN';
const PLACEHOLDER = 'PLACEHOLDER';
const CLEAR_TOKEN = 'CLEAR_TOKEN';
const ERROR = 'ERROR';

export function enterNumber(value, backspace) {
  return {
    type: ENTER_NUMBER,
    value,
    backspace,
  };
}

export function getToken(token) {
  return {
    type: GET_TOKEN,
    token,
  };
}

export function placeHolder(value) {
  return {
    type: PLACEHOLDER,
    value,
  };
}

export function clearToken() {
  return {
    type: CLEAR_TOKEN,
  };
}

export function error(message) {
  return {
    type: ERROR,
    message,
  };
}
