
/*
import { configureStore, Action } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { Middleware } from "redux";
import { reducers } from "./state/action-reducers/combineReducers";

// Define root state type
export type RootState = ReturnType<typeof reducers>;

// Define root action type
export type RootAction = Action<string>;

// Define thunk action type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootAction
>;

// Define custom middleware
const middleware: Middleware[] = [thunkMiddleware];

// Configure store
export const store = configureStore({
  reducer: reducers,
  middleware
});
*/