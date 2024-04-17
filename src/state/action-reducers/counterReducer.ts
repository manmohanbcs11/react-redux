import { DECREASE_COUNTER, INCREASE_COUNTER } from "./counterAction";

// Reducer
export const counterReducer = (state = 0, action: CounterActionTypes): number => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + action.payload;
    case DECREASE_COUNTER:
      return state - action.payload;
    default:
      return state;
  }
};


// Define action types
type IncreaseCounterAction = {
  type: typeof INCREASE_COUNTER;
  payload: number;
};

type DecreaseCounterAction = {
  type: typeof DECREASE_COUNTER;
  payload: number;
};

// Union type for all actions
type CounterActionTypes = IncreaseCounterAction | DecreaseCounterAction;
