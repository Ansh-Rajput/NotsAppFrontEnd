import { useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/NavBar';
import NoteState from './context/noteContext/NoteState';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style = {backgroundColor:"#2C3A47",color:"#fff"};
      document.body.style.backgroundColor = "#242424";
      document.body.style.color = "#fff";
    }
    else{
      document.body.style = {backgroundColor:"#fff",color:"#000"};
      setMode("light");
    }
  }

  return (
    <>
      <BrowserRouter>
      <NoteState>
          <Navbar title="NavBar" mode={mode} setMode={setMode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<Home mode={mode}/>}/>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/logIn" element={<LogIn/>} />
          <Route exact path="/logIn/signUp" element={<SignUp/>} />
        </Routes>

      </NoteState>
      </BrowserRouter>
    </>
  )
}

export default App
