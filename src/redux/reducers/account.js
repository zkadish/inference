
const defaultState = {
  phoneNumber: '',
  token: '',
  placeHolder: 'enter a phone number',
};

function account(state = defaultState, action) {
  switch (action.type) {
    case 'ENTER_NUMBER': {
      let value = action.value;
      const length = value.length;
      switch (length) {
        case 1:
          value = `(${value}`;
          break;
        case 4:
          value = `${value}) `;
          break;
        case 9:
          value = `${value}-`;
          break;
        default:
          break;
      }
      return { ...state, phoneNumber: value };
    }
    case 'GET_TOKEN': {
      return ({
        ...state,
        token: action.token,
      });
    }
    case 'PLACEHOLDER': {
      return ({
        ...state,
        placeHolder: action.value,
      });
    }
    default:
      return state;
  }
}

export default account;
