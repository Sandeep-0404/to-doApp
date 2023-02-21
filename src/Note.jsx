import React from "react";
import { DeleteOutline } from "@mui/icons-material";
import Fab from "@mui/material/Fab";

const Note = (props) => {
  const deleteNode = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
     </div>
     <div className="btnClass">
      <Fab className="delete" onClick={deleteNode}>
        <DeleteOutline className="deleteIcon" />
      </Fab>
      </div>
    </>
  );
};

export default Note;
