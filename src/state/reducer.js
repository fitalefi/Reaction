import { NEW_MESSAGE } from './types';

export const initialState = {
  messages: [],
};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
