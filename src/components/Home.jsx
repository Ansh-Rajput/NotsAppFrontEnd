import React, { useContext } from 'react'
import NoteContext from '../context/noteContext/NoteContext'
import AddNote from './AddNote';
import ShowNotes from './ShowNotes';

const Home = () => {
  const obj = useContext(NoteContext);
  return (
    <>
      <AddNote/>
      <ShowNotes/>
    </>
  )
}

export default Home
