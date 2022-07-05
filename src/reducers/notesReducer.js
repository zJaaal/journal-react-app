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
    default:
      return state;
  }
};

export default notesReducer;
