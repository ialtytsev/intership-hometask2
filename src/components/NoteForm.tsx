import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Note } from "../redux/noteReducerTypes";

const NoteForm = () => {
  const { notes, currentNote, modalClosed } = useTypedSelector(
    (state) => state.note
  );
  const { toggleModalAction, editNoteAction, createNoteAction } = useActions();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (currentNote.id !== 0) {
      setValue("name", currentNote.name);
      setValue("category", currentNote.category);
      setValue("content", currentNote.content);
    }
  }, [currentNote, setValue]);

  useEffect(() => {
    if (modalClosed) {
      reset();
    }
  }, [modalClosed, reset]);

  const onSubmit = handleSubmit(() => {
    const name = getValues("name");
    const content = getValues("content");
    const category = getValues("category");

    let id: number;
    if (currentNote.id === 0) {
      const allId = notes.map((note) => Number(note.id));
      const maxId = Math.max(...allId) + 1;
      id = maxId;
    } else {
      id = currentNote.id;
    }

    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{1,4}/gm;
    const mDates: string = content.match(dateRegex);
    const dates = mDates ? Array.from(mDates) : [];

    let created: string;
    if (currentNote.created === "") {
      created = new Date().toLocaleDateString("en", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    } else {
      created = currentNote.created;
    }

    const note: Note = {
      id,
      name,
      dates,
      content,
      category,
      created,
      archived: false,
    };

    if (currentNote.id === 0) {
      createNoteAction(note);
    } else {
      editNoteAction(note);
    }
    reset();

    console.log(note);
    toggleModalAction();
  });

  const categoryNames = Array.from(new Set(notes.map((item) => item.category)));

  return (
    <form className="add-note-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Input note name"
          {...register("name", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Must be more than 2 characters long",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          as="p"
          style={{ color: "red" }}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <br />
        <select id="category" {...register("category")}>
          {categoryNames.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <br />
        <input
          type="text"
          id="content"
          placeholder="Input your content. Date format xx/xx/xxxx"
          {...register("content", {
            required: "This is required",
            minLength: {
              value: 2,
              message: "Must be more than 2 characters long",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="content"
          as="p"
          style={{ color: "red" }}
        />
      </div>

      <input type="submit" className="btn" value="Submit" />
    </form>
  );
};

export default NoteForm;
