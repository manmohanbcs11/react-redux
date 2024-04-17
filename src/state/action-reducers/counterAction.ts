// Define action type constants
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

// Action creators
export const increaseCounter = (value: number) => ({
  type: INCREASE_COUNTER as typeof INCREASE_COUNTER, // Ensure type safety
  payload: value
});

export const decreaseCounter = (value: number) => ({
  type: DECREASE_COUNTER as typeof DECREASE_COUNTER, // Ensure type safety
  payload: value
});
