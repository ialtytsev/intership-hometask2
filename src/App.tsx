import React from "react";
import "./App.css";
import Container from "./components/Container";
import CreateButton from "./components/CreateButton";
import Modal from "./components/Modal";
import Table from "./components/Table";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: React.FC = () => {
  const { notes } = useTypedSelector((state) => state.note);

  const activeNotes = notes.filter((item) => item.archived === false);
  const archivedNotes = notes.filter((item) => item.archived === true);

  return (
    <>
      <Container>
        <h2>Notes table</h2>
        <Table notes={activeNotes} />
        <CreateButton />

        <h2>Archive table</h2>
        <Table notes={archivedNotes} />

        <h2>Summary table</h2>
        <Table notes={notes} isSummary={true} />
      </Container>
      <Modal />
    </>
  );
};

export default App;
