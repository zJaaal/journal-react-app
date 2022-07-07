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
    case types.notesAddNew:
      return { ...state, notes: [action.payload.note, ...state.notes] };
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

    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case types.notesLogoutCleaning:
      return initialState;

    default:
      return state;
  }
};

export default notesReducer;
