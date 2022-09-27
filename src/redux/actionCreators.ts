import { Note, NoteActionTypes } from "./noteReducerTypes";

export const createNoteAction = (payload: Note) => ({
  type: NoteActionTypes.CREATE_NOTE,
  payload,
});

export const editNoteAction = (payload: Note) => ({
  type: NoteActionTypes.EDIT_NOTE,
  payload,
});

export const deleteNoteAction = (payload: Note) => ({
  type: NoteActionTypes.DELETE_NOTE,
  payload,
});

export const toggleArchivedAction = (payload: Note) => ({
  type: NoteActionTypes.TOGGLE_NOTE_ARCHIVED,
  payload,
});

export const toggleModalAction = () => ({ type: NoteActionTypes.TOGGLE_MODAL });

export const setCurrentNoteAction = (payload: Note) => ({
  type: NoteActionTypes.SET_CURRENT_NOTE,
  payload,
});

export const resetNoteFormAction = () => ({
  type: NoteActionTypes.RESET_NOTE_FORM,
});
