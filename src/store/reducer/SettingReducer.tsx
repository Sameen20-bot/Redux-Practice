import { CHANGE_ROLE } from "../type";

const initialState = {
  userRole: "admin",
};

export const setting = (state = initialState, { type, payload}) => {
  switch (type) {
    case CHANGE_ROLE:
      return {...state, userRole: payload}
    default:
      return state;
  }
};
