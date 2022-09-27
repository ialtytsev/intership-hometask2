import React from "react";
import { useActions } from "../hooks/useActions";
import { Note } from "../redux/noteReducerTypes";

const NoteRow: React.FC<{
  note: Note;
  columns: string[];
  isSummary?: boolean;
}> = ({ note, columns, isSummary = false }) => {
  const {
    toggleArchivedAction,
    setCurrentNoteAction,
    toggleModalAction,
    deleteNoteAction,
  } = useActions();

  const editNote = () => {
    setCurrentNoteAction(note);
    toggleModalAction();
  };

  return (
    <tr>
      <td>
        <div
          className={`icon-category icon-${note.category
            .toLowerCase()
            .replaceAll(" ", "-")}`}
        ></div>
      </td>

      {columns.map((col) => (
        <td key={col} className={`cell-${col}`}>
          {note[col]}
        </td>
      ))}

      {isSummary === false && (
        <td className="cell-btn">
          <button
            className="btn-action btn-edit"
            onClick={() => editNote()}
          ></button>
          <button
            className="btn-action btn-archive"
            onClick={() => toggleArchivedAction(note)}
          />
          <button
            className="btn-action btn-trash"
            onClick={() => deleteNoteAction(note)}
          ></button>
        </td>
      )}
    </tr>
  );
};

export default NoteRow;
