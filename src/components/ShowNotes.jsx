import React, { useContext } from 'react'
import NoteContext from '../context/noteContext/NoteContext'
import NoteItem from './NoteItem'
import "../Stylesheets/showNotes.css"

const ShowNotes = () => {
  const {notes} = useContext(NoteContext);
  console.log(notes);
  return (
    <div>
        <div className="Notesbox">
            <h1>Your Notes</h1>
            <div className="notes">
                {notes.map((note)=>{
                  return <NoteItem key={note._id} note={note}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default ShowNotes
