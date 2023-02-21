import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import ColorChanger from "./ColorChanger";
import { Fab } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const [noteColor, setNoteColor] = useState({
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "black"
  })

  function handleColor(color){
    if(color==="red"){
      const newColor = {
        backgroundColor: "rgba(240,36,37)",
        color: "white"
      }
      setNoteColor(newColor);
    }
    else if(color==="blue"){
      const newColor = {
        backgroundColor: "rgba(100,149,237)",
        color: "white"
      }
      setNoteColor(newColor);
    }
    else if(color==="green"){
      const newColor = {
        backgroundColor: "rgba(33, 240, 29, 0.44)"
      }
      setNoteColor(newColor);
    }
    else if(color==="violet"){
      const newColor = {
        backgroundColor: "rgba(46, 19, 220, 0.44)",
        color: "white"
      }
      setNoteColor(newColor);
    }
    else if(color==="white"){
      const newColor = {
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }
      setNoteColor(newColor);
    }

    else if(color==="violet"){
      const newColor = {
        backgroundColor: "rgba(148,0,211)"
      }
      setNoteColor(newColor);
    }
  }

  return (
    <div className="note" style={noteColor}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="noteButtons">
      <Fab onClick={handleClick}><DeleteIcon /></Fab>
      <ColorChanger  ChangeColor={handleColor} /> 
      </div>
      <FormControlLabel className="fav"
    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH"  />}
  /> 
    </div>
  );
}

export default Note;
