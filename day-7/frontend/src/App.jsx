import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  // ✅ Separate function
  const fetchNotes = () => {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data.note || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ✅ useEffect me call
  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        setNotes((prev) => [...prev, res.data.note]);

        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeletenote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  return (
    <div>
      <form className="note-created-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="enter title" />
        <input name="description" type="text" placeholder="enter description" />
        <button type="submit">Add Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note._id || note.id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={() => handleDeletenote(note._id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
