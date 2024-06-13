
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
  const redToggle = () => {
    if (mode === 'light') {
        setMode('red');
        document.body.style.background= "red"
        document.body.style.color= "yellow"
        setBtnText("Enable light Mode");
    } else {
      setMode('red');
      document.body.style.background= "yellow"
      document.body.style.color= "red"
      setBtnText("Enable Dark Mode");
    }
  }

  const greenToggle = () => {
    if (mode === 'light') {
        setMode('green');
        document.body.style.background= "green"
        document.body.style.color= "white"
        setBtnText("Enable light Mode");
    } else {
      setMode('green');
      document.body.style.background= "green"
      document.body.style.color= "white"
      setBtnText("Enable Dark Mode");
    }
  }

  const blueToggle = () => {
    if (mode === 'light') {
        setMode('blue');
        document.body.style.backgroundImage = "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)";
        document.body.style.color= "purple"
        setBtnText("Enable light Mode");
    } else {
      setMode('blue');
      document.body.style.background= "lightblue"
      document.body.style.color= "blue"
      setBtnText("Enable Dark Mode");
    }
  }

  

 


  return (
    <> 
    <Navbar  heading="SIT" AboutText="About Us"  mode = {mode} btnText={btnText} toggleMode = {toggleMode} redToggle = {redToggle} blueToggle = {blueToggle}  greenToggle = {greenToggle}/>
    <TextForm title="About Us" mode = {mode}  toggleMode = {toggleMode} redToggle = {redToggle} greenToggle = {greenToggle} blueToggle = {blueToggle}/>
    </>
  );
}

export default App;
