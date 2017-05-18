
const ENTER_NUMBER = 'ENTER_NUMBER';
const GET_TOKEN = 'GET_TOKEN';
const PLACEHOLDER = 'PLACEHOLDER';
const CLEAR_TOKEN = 'CLEAR_TOKEN';

export function enterNumber(value) {
  return {
    type: ENTER_NUMBER,
    value,
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