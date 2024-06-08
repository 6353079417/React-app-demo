import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';




function App() {
  return (
    <>
    <Navbar title ="SIT" aboutText="Join Us"/>
    {/* <TextForm heading="Enter Text to Analyses Below" /> */}
    <AboutUs heading="About Us"/>
    
    </>
  );
}

export default App;
