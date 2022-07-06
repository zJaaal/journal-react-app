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
      return { ...state, notes: [...action.payload] };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.notesFileURL:
      return {
        ...state,
        notes: state.notes.map((note) => note),
      };
    default:
      return state;
  }
};

export default notesReducer;
