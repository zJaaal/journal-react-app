import { types } from "../types/types";

const initialState = {
  isLoading: false,
  errMsg: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        errMsg: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        errMsg: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
