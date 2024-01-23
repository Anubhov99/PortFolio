
import './App.css';
import Navbar1 from './component/Navbar1';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
   
            <Navbar1 title = "Textutils" aboutText="About"/>
            <div className="container" my-3>
            <TextForm heading ="Enter your text to analyze"/> 

            </div>
            
    </>
  );
 
}

export default App;
