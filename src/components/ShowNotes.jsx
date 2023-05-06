import React, { useContext, useEffect,useRef,useState } from 'react'
import NoteContext from '../context/noteContext/NoteContext'
import NoteItem from './NoteItem'
import "../Stylesheets/showNotes.css"
// import UpdateNoteModal from './UpdateNoteModal';

const ShowNotes = () => {
  const {notes,fetchNotes,editNote} = useContext(NoteContext);
  useEffect(()=>{
    fetchNotes();
  },[]);
  
  const [newNoteData,setNoteData] = useState({_id:"",title:"",description:"",tag:""});
  const refModal = useRef(null);// Reference to modal.

  const showNotesModal = (note)=>{
    // event.preventDefault();
    setNoteData({_id:note._id,title:note.title,description:note.description,tag:note.tag});
    refModal.current.showModal();
  }

  //close Moda;
  const closeModal = ()=>{
    refModal.current.close();
  }


  const onChange = (e)=>{
    setNoteData({...newNoteData,[e.target.name]:e.target.value});
  }

  const onSubmit = ()=>{
    editNote(newNoteData);
  }

  return (
    <div>
        {/* <UpdateNoteModal/> To be done after learning redux */}
        <dialog className='modal' id='modal' ref={refModal}>
        <h1>Update Note</h1>
            <form method="dialog">
                <p>Title</p>
                <input type="text" name='title' value={newNoteData.title} onChange={onChange}/>
                <p>Description</p>
                <input type="text" name='description' value={newNoteData.description} onChange={onChange}/>
                <p>Tag</p>
                <input type="text" name='tag' value={newNoteData.tag} onChange={onChange}/>
                <div className="modalButtons">
                  <button type="submit" onClick={onSubmit} disabled={(newNoteData.title.length && newNoteData.description.length)?false:true}>Update</button>
                  <button onClick={closeModal} >Close</button>
                </div>
            </form>
      </dialog>
        <div className="Notesbox">
            <h1>Your Notes</h1>
            <div className="notes">
                {notes.map((note)=>{
                  return <NoteItem showNotesModal={showNotesModal} key={note._id} note={note}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default ShowNotes
