export enum CategoryNames {
  TASK = "Task",
  RANDOM_TOUGHT = "Random Tought",
  IDEA = "Idea",
}

export enum NoteActionTypes {
  CREATE_NOTE = "CREATE_NOTE",
  EDIT_NOTE = "EDIT_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  TOGGLE_NOTE_ARCHIVED = "TOGGLE_NOTE_ARCHIVED",
  TOGGLE_MODAL = "TOGGLE_MODAL",
  SET_CURRENT_NOTE = "SET_CURRENT_NOTE",
  RESET_NOTE_FORM = "RESET_NOTE_FORM",
  SET_CATEGORIES = "SET_CATEGORIES",
}

export interface Category {
  [key: string]: number | string;
  categoryName: string;
  active: number;
  archived: number;
}

export interface Note {
  [key: string]: number | string | boolean | string[];
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string[];
  archived: boolean;
}

export interface NoteState {
  notes: Note[];
  modalClosed: boolean;
  currentNote: Note;
}

interface CreateNoteAction {
  type: NoteActionTypes.CREATE_NOTE;
  payload: Note;
}

interface EditNoteAction {
  type: NoteActionTypes.EDIT_NOTE;
  payload: Note;
}

interface DeleteNoteAction {
  type: NoteActionTypes.DELETE_NOTE;
  payload: Note;
}

interface ToggleNoteArchivedAction {
  type: NoteActionTypes.TOGGLE_NOTE_ARCHIVED;
  payload: Note;
}

interface SetCurrentNoteAction {
  type: NoteActionTypes.SET_CURRENT_NOTE;
  payload: Note;
}

interface ToggleModalAction {
  type: NoteActionTypes.TOGGLE_MODAL;
  payload: boolean;
}

interface ResetNoteFormAction {
  type: NoteActionTypes.RESET_NOTE_FORM;
  payload: Note[];
}

export type NoteAction =
  | CreateNoteAction
  | EditNoteAction
  | DeleteNoteAction
  | ToggleNoteArchivedAction
  | ToggleModalAction
  | SetCurrentNoteAction
  | ResetNoteFormAction;
