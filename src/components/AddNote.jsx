import React from 'react'
import "../Stylesheets/addNote.css"

const AddNote = () => {
    const onclick = (e)=>{
        e.preventDefault();
    }
  return (
    <>
        <div className='box'>
            <h1>Add Note</h1>
            <form action='/about' method="post">
                <p>Title</p>
                <input type="text" name="title" id="title" />
                <p>Description</p>
                <input type="text" name="description" id="description" />
                <p>Tag</p>
                <input type="text" name="tag" id="tag" />
                <button type="submit" onClick={onclick}>Submit</button>
            </form>
        </div>
    
    </>
  )
}

export default AddNote
