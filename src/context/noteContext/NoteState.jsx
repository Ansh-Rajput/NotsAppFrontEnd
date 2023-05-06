import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const userNotes = [];
    const [notes,setUserNotes]  = useState(userNotes);

    const fetchNotes = async ()=>{
      const data = await fetch(`${host}/api/note/fetchNotes`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "authtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1NGFiMjUyZWQyNDllZGE5ZDMxOGI0In0sImlhdCI6MTY4MzI3ODAxN30.Po5LwADqDgMDpQNjjI4hpNA2CxCqJiKxuWHlRlx0mo8"
        }
      });
      const resJson = await data.json();
      setUserNotes(resJson);
    }

    const addNote = async (value)=>{
      let note = {
        "_id": "64554a5a131af44317577ddef",
        "userId": "6454ab252ed249eda9d318b4",
        "title": `${value.title}`,
        "description": `${value.description}`,
        "tag": `${(value.tag.length)?value.tag:"General"}`,
        "date": "2023-05-05T18:26:34.974Z",
        "__v": 0
      }

      //Add notes to database
      const data = await fetch(`${host}/api/note/addNotes`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "authtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1NGFiMjUyZWQyNDllZGE5ZDMxOGI0In0sImlhdCI6MTY4MzI3ODAxN30.Po5LwADqDgMDpQNjjI4hpNA2CxCqJiKxuWHlRlx0mo8"
        },
        body: JSON.stringify({...value})
      });
      const resJson = await data.json();
      console.log(resJson);

      setUserNotes(notes.concat(note));
    }
    

    const deleteNote = async (noteId)=>{
      const newNotes = notes.filter((note)=>{
        return (note._id !== noteId);
      })
      setUserNotes(newNotes);//delete notes from fruntEnd

      //delete notes from database
      const data = await fetch(`${host}/api/note/deleteNotes/${noteId}`,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
          "authtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1NGFiMjUyZWQyNDllZGE5ZDMxOGI0In0sImlhdCI6MTY4MzI3ODAxN30.Po5LwADqDgMDpQNjjI4hpNA2CxCqJiKxuWHlRlx0mo8"
        }
      });
      const resJson = await data.json();
      console.log(resJson);
    }
    

    const editNote = async (note)=>{
      let tag1 = "";
      if(note.tag.length){
        tag1 = note.tag;
      }
      else{
        tag1 = "General";
      }
      const data = await fetch(`${host}/api/note/updateNotes/${note._id}`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json",
          "authtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1NGFiMjUyZWQyNDllZGE5ZDMxOGI0In0sImlhdCI6MTY4MzI3ODAxN30.Po5LwADqDgMDpQNjjI4hpNA2CxCqJiKxuWHlRlx0mo8"
        },
        body: JSON.stringify({title:note.title,description:note.description,tag:tag1})
      });
      fetchNotes();
    }
    
  return (
    <NoteContext.Provider value={{notes,setUserNotes,addNote,deleteNote,editNote,fetchNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
