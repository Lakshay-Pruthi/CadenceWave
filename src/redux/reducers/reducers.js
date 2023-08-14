import { APP_TOKEN } from "../actions/action-types";

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_TOKEN:
      return { ...state, token: action.payload };
    default:
      return "something";
  }
};
