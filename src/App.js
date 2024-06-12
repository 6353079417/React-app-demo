
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {

  const [mode,setMode] = useState("light");

  const [btnText,setBtnText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.background= "black"
        document.body.style.color= "white"
        setBtnText("Enable light Mode");
    } else {
      setMode('light');
      document.body.style.background= "white"
      document.body.style.color= "black"
      setBtnText("Enable Dark Mode");
    }
  }

  const toggleMode1 = () => {
    if (mode === 'light') {
        setMode('red');
        document.body.style.background= "red"
        document.body.style.color= "white"
    } else {
      setMode('red');
      document.body.style.background= "red"
      document.body.style.color= "white"
    }
  }

  const toggleMode2 = () => {
    if (mode === 'light') {
        setMode('green');
        document.body.style.background= "green"
        document.body.style.color= "white"
    } else {
      setMode('red');
      document.body.style.background= "red"
      document.body.style.color= "white"
    }
  }


  return (
    <> 
    <Navbar  heading="SIT" AboutText="About Us" mode = {mode} btnText={btnText} toggleMode = {toggleMode} toggleMode1 = {toggleMode1} toggleMode2={toggleMode2}/>
    <TextForm title="About Us" mode = {mode} toggleMode = {toggleMode}/>
    </>
  );
}

export default App;
