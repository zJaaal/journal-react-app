import { Co2Sharp, FireExtinguisher } from "@mui/icons-material";
import { uploadImage } from "../axios/axios";
import { db } from "../firebase/firebase-config";
import loadNotes from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => async (dispatch, getState) => {
  const { uid } = getState().auth;
  const { notes } = getState().notes;
  const newNote = {
    title: "",
    body: "",
    date: new Date().getTime(),
  };

  const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

  dispatch(activeNote(docRef.id, newNote));
  dispatch(addNewNote(docRef.id, newNote));
};

export const startSaveNote = (note) => async (dispatch, getState) => {
  const uid = getState().auth.uid;

  if (!note.imageUrl) delete note.imageUrl;

  const noteToSave = { ...note };
  delete noteToSave.id;

  await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToSave);
  alert("Entry has been saved");
  dispatch(refreshNotes(note.id, noteToSave));
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    let notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startDeleting = (id) => async (dispatch, getState) => {
  const { uid } = getState().auth;

  await db.doc(`${uid}/journal/notes/${id}`).delete();

  dispatch(deleteNote(id));
};

export const startUploadImage = (formData) => async (dispatch, getState) => {
  const { active: activeNote } = getState().notes;

  const fileUrl = await uploadImage(formData);

  activeNote.imageUrl = fileUrl;

  dispatch(startSaveNote(activeNote));
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: { id, ...note },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: { note: { id: id, ...note } },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const refreshNotes = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id: id, //Added this because note wasnt saving with id
      ...note,
    },
  },
});

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const logoutNote = () => ({
  type: types.notesLogoutCleaning,
});
