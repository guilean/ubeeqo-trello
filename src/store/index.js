import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => {
  console.log("store :", store.getState());
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
