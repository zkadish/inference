
const defaultState = {
  phoneNumber: '',
  token: '',
  placeHolder: 'enter a phone number',
  error: '',
  secret: '',
  konami: false,
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
    case 'ERROR':
      return {
        ...state,
        error: action.message,
      };
    case 'SECRET':
      if (state.secret === '38384040373937396665') return { ...state };
      if (`${state.secret}${action.value}` === '38384040373937396665') {
        return {
          ...state,
          konami: true,
          secret: `${state.secret}${action.value}`,
        };
      }
      return {
        ...state,
        secret: `${state.secret}${action.value}`,
      };
    case 'ESCAPE':
      return {
        ...state,
        konami: false,
        secret: '',
      };
    default:
      return state;
  }
}

export default account;
