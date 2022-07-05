//state
// {
//   notes: array,
//   active: null,
//   active:{
//     id: string,
//     title: string,
//     body: string,
//     imageUrl?: string
//   }
// }

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return { ...state, active: { ...action.payload } };
    case types.notesLoad:
      return { ...state, notes: { ...action.payload } };
    default:
      return state;
  }
};

export default notesReducer;
