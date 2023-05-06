import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const userNotes = [
      {
        "_id": "6454cb222cea4b34b55d94a5",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title1",
        "description": "1st Note",
        "tag": "General",
        "date": "2023-05-05T09:23:46.403Z",
        "__v": 0
      },
      {
        "_id": "6454cb342cea4b34b55d94a7",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title2",
        "description": "2nd Note",
        "tag": "General",
        "date": "2023-05-05T09:24:04.261Z",
        "__v": 0
      },
      {
        "_id": "64554a20131af4317577dde5",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title3",
        "description": "3nd Note",
        "tag": "General",
        "date": "2023-05-05T18:25:36.912Z",
        "__v": 0
      },
      {
        "_id": "64554a2a131af4317577dde7",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title4",
        "description": "4nd Note",
        "tag": "General",
        "date": "2023-05-05T18:25:46.942Z",
        "__v": 0
      },
      {
        "_id": "64554a36131af4317577dde9",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title5",
        "description": "5nd Note",
        "tag": "General",
        "date": "2023-05-05T18:25:58.374Z",
        "__v": 0
      },
      {
        "_id": "64554a49131af4317577ddeb",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title6",
        "description": "6th Note",
        "tag": "General",
        "date": "2023-05-05T18:26:17.793Z",
        "__v": 0
      },
      {
        "_id": "64554a51131af4317577dded",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title7",
        "description": "7th Note",
        "tag": "General",
        "date": "2023-05-05T18:26:25.217Z",
        "__v": 0
      },
      {
        "_id": "64554a5a131af4317577ddef",
        "userId": "6454ab252ed249eda9d318b4",
        "title": "title8",
        "description": "8th Note",
        "tag": "General",
        "date": "2023-05-05T18:26:34.974Z",
        "__v": 0
      }
    ]
    const [notes,setUserNotes]  = useState(userNotes);

    const addNote = (value)=>{
      let note = {
        "_id": "64554a5a131af44317577ddef",
        "userId": "6454ab252ed249eda9d318b4",
        "title": `${value.title}`,
        "description": `${value.description}`,
        "tag": `${(value.tag.length)?value.tag:"General"}`,
        "date": "2023-05-05T18:26:34.974Z",
        "__v": 0
      }
      setUserNotes(notes.concat(note));
    }
    

    const deleteNote = (noteId)=>{
      const newNotes = notes.filter((note)=>{
        return (note._id !== noteId);
      })
      setUserNotes(newNotes);
    }
    

    const editNote = ()=>{

    }
    
  return (
    <NoteContext.Provider value={{notes,setUserNotes,addNote,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
