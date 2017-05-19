
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
          if (!action.backspace) value = `(${value}`;
          break;
        case 4:
          if (!action.backspace) value = `${value}) `;
          break;
        case 9:
          if (!action.backspace) value = `${value}-`;
          break;
        default:
          break;
      }
      return { ...state, phoneNumber: value };
    }
    case 'GET_TOKEN': {
      return {
        ...state,
        token: action.token,
      };
    }
    case 'PLACEHOLDER': {
      return {
        ...state,
        placeHolder: action.value,
      };
    }
    case 'CLEAR_TOKEN':
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
}

export default account;
