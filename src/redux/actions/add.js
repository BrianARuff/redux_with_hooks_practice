import { ADD } from "../types";

export const add = (value) => (dispatch) => {
  return dispatch({
    type: ADD,
    payload: value,
  });
};
