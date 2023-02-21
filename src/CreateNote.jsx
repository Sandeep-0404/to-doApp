import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { FormatListBulletedSharp } from "@mui/icons-material";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand,setExpand]=useState(false);

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt=()=>
  {
    setExpand(true);
  }
  
  const backtonor=()=>
  {
    setExpand(false);
  }

  return (
    <>
      <div className="main_note"  onDoubleClick={backtonor}>
        <form>
        {expand?
          <input
            type="text"
            value={note.title}
            name="title"
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          /> :null}
          <textarea
            rows="5"
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="Write a note..."
            onClick={expandIt}
           
          />
          {
            expand?
          <Fab className="btn" onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Fab>
          :null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
