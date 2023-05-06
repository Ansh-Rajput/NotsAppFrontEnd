import React, { useContext } from 'react'
import "../Stylesheets/noteItem.css"
import NoteContext from '../context/noteContext/NoteContext'
// import NoteContext from '../context/noteContext/NoteContext'

const NoteItem = (props) => {
  const {deleteNote} =  useContext(NoteContext);
  return (
    <div>
      <div className="noteContainer">
        <div className="heading">
          <p className="title">{props.note.title}</p>
          <div className="icons">
            <i className="far fa-trash-alt"onClick={()=>{deleteNote(props.note._id)}}></i>
            <i className="far fa-edit"></i>
          </div>
        </div>
        <p className="discription">{props.note.description}</p>
      </div>
    </div>
  )
}
export default NoteItem
