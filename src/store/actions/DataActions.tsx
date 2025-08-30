import { CHANGE_ROLE, INCREASE_TOTAL_LIKES, INCREASE_TOTAL_LIKES_BY_AMOUNT } from "../type";

// action taker kay andar action
export const IncreaseTotalLikes = () => ({
  type: INCREASE_TOTAL_LIKES,
});

export const IncreaseTotalLikesByAmount = (payload: number) => ({
  type: INCREASE_TOTAL_LIKES_BY_AMOUNT,
  payload: payload,
});

export const changeRole = (payload: string) => ({
  type: CHANGE_ROLE,
  payload: payload,
});
