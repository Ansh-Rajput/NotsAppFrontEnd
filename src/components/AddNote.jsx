import React, { useContext, useState } from 'react'
import "../Stylesheets/addNote.css"
import NoteContext from '../context/noteContext/NoteContext';

const AddNote = () => {
    const [noteData,setNoteData] = useState({title:"",description:"",tag:""});
    const {addNote} = useContext(NoteContext);

    const onclick = (e)=>{
        e.preventDefault();
        addNote(noteData);
    }

    const onChange = (e)=>{
        setNoteData({...noteData,[e.target.name]:e.target.value});
    }

  return (
    <>
        <div className='box'>
            <h1>Add Note</h1>
            <form action='/about' method="post">
                <p>Title</p>
                <input type="text" value={noteData.title} name="title" id="title" onChange={onChange}/>
                <p>Description</p>
                <input type="text" value={noteData.description} name="description" id="description" onChange={onChange}/>
                <p>Tag</p>
                <input type="text" value={noteData.tag} name="tag" id="tag" onChange={onChange}/>
                <button type="submit" onClick={onclick} disabled={(noteData.title.length && noteData.description.length)?false:true}>Submit</button>
            </form>
        </div>
    
    </>
  )
}

export default AddNote
