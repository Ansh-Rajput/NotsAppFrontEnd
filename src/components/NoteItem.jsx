import React, { useContext } from 'react'
import "../Stylesheets/noteItem.css"
// import NoteContext from '../context/noteContext/NoteContext'

const NoteItem = (props) => {
  return (
    <div>
      <div className="noteContainer">
        <div className="heading">
          <p className="title">{props.note.title}</p>
          <div className="icons">
            <i className="far fa-trash-alt"></i>
            <i className="far fa-edit"></i>
          </div>
        </div>
        <p className="discription">{props.note.description}</p>
      </div>
    </div>
  )
}
export default NoteItem
