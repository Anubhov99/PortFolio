import logo from './logo.svg';
import './App.css';
import photo from './passpic.jpg'
let name = "Anubhov Menon"

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>Projects</li>
      <li>Contact</li>
    </nav>
    <br />
    <br />
    <br />
    <div>
    <img src={photo} className = "App-logo" alt="Anubhov Menon" />
    </div>

    <br></br>
    
    <div className="container">
      <h1>Hello this is {name}</h1>
      <h2>About me</h2>
      Hola!!
      I am a software developer. I have 3 years of IT experience.
      I have done numerous projects in the past 3 years mostly in the financial services domain.
      This web page is also developed by me! Hover on the sections above to know more about me.
      
    </div>
   
    
  

    
    </>
  );
 
}

export default App;
