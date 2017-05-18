
const ENTER_NUMBER = 'ENTER_NUMBER';
const GET_TOKEN = 'GET_TOKEN';
const PLACEHOLDER = 'PLACEHOLDER';

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
