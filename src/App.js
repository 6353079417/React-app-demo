
import './App.css';
import img1 from './images/img1.webp'

function App() {
  return (
    <>
     <header>
  <nav>
    <ul type="none">
      <li>Home </li>
      <li>Student info.. </li>
      <li>Gallary</li>
      <li>About Us.</li>
      <li>Contact Us.</li>
    </ul>
    <h1>This is the picture of our school Student</h1>
    <img src={img1} alt=""  className="img1"/>

  </nav>
</header>
    </>
  );
}

export default App;
