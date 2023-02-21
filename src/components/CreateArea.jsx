import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpandZone(false);
    event.preventDefault();
  }
  const [expandZone, setExpandZone] = useState(false);

  function handleExpansion(){
    setExpandZone(true);
  }

  return (
    <div>
      <form className="create-note" autoComplete="off">
        {expandZone ?
        (<div>
          <input
         onClick={handleExpansion}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title" 
        /><textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        </div>) :
         (<input
         onClick={handleExpansion}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Add a New Note" 
        />)}
        <Fab onClick={submitNote}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
