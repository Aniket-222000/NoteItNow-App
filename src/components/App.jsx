import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);



  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    }
    );
  }


  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }



  return (
    <div>
      <Header />
      <div className="main">
        <CreateArea onAdd={addNote} />
        <div>
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
