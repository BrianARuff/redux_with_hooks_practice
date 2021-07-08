import { ADD, SUBTRACT } from "../types";

const initState = {
  count: 0,
};

const calcReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + parseInt(action.payload, 10) };
    case SUBTRACT:
      return { count: state.count - parseInt(action.payload, 10) };
    default:
      return state;
  }
};

export default calcReducer;
