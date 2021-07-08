import { SUBTRACT } from "../types";

export const subtract = (value) => (dispatch) => {
  return dispatch({
    type: SUBTRACT,
    payload: value,
  });
};
