import { INCREASE_TOTAL_LIKES } from "../type";

const initialState = {
  totalLikes: 9,
  userName: "Sameen Zaki",
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_TOTAL_LIKES:
      return { ...state, totalLikes: state.totalLikes + 1 };
    default:
      return state;
  }
};
