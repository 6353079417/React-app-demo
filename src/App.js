
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


  return (
    <> 
    <Navbar  heading="SIT" AboutText="About Us" mode = {mode} btnText={btnText} toggleMode = {toggleMode}/>
    <TextForm title="About Us" mode = {mode} toggleMode = {toggleMode}/>
    </>
  );
}

export default App;
