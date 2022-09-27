import React from "react";
import { Category, Note } from "../redux/noteReducerTypes";
import CategoryRow from "./CategoryRow";
import HeaderRow from "./HeaderRow";
import NoteRow from "./NoteRow";

const Table: React.FC<{ notes: Note[]; isSummary?: boolean }> = ({
  notes = [],
  isSummary = false,
}) => {
  if (!notes.length) {
    return <p>No notes</p>;
  }

  let columns: string[] = Object.keys(notes[0]).filter(
    (elem) => elem !== "id" && elem !== "archived"
  );

  let categories: Category[] | undefined;
  let categoryNames: string[];

  if (isSummary) {
    categoryNames = Array.from(new Set(notes.map((item) => item.category)));
    categories = categoryNames.map((name) => ({
      categoryName: name,
      active: notes.filter(
        (note) => note.category === name && note.archived === false
      ).length,
      archived: notes.filter(
        (note) => note.category === name && note.archived === true
      ).length,
    }));
    columns = Object.keys(categories[0]);
  }
  return (
    <table>
      <thead>
        <HeaderRow columns={columns} isSummary={isSummary} />
      </thead>

      <tbody>
        {!isSummary &&
          notes.map((note) => (
            <NoteRow note={note} columns={columns} key={note.id} />
          ))}

        {categories &&
          categories.map((category) => (
            <CategoryRow
              category={category}
              columns={columns}
              key={category.categoryName}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
