import { initialState } from "./initialState";
import { NoteState, NoteAction, NoteActionTypes } from "./noteReducerTypes";

export const noteReducer = (
  state = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case NoteActionTypes.CREATE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case NoteActionTypes.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

    case NoteActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== action.payload.id),
      };

    case NoteActionTypes.TOGGLE_NOTE_ARCHIVED:
      return {
        notes: [
          ...state.notes.filter((item) => item.id !== action.payload.id),
          {
            ...action.payload,
            archived: !action.payload.archived,
          },
        ],
        modalClosed: state.modalClosed,
        currentNote: state.currentNote,
      };

    case NoteActionTypes.TOGGLE_MODAL:
      return {
        notes: state.notes,
        modalClosed: !state.modalClosed,
        currentNote: state.currentNote,
      };

    case NoteActionTypes.SET_CURRENT_NOTE:
      return {
        notes: state.notes,
        modalClosed: state.modalClosed,
        currentNote: action.payload,
      };

    case NoteActionTypes.RESET_NOTE_FORM:
      return {
        notes: state.notes,
        modalClosed: state.modalClosed,
        currentNote: initialState.currentNote,
      };
    default:
      return state;
  }
};
