import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { Provider } from "react-redux";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
