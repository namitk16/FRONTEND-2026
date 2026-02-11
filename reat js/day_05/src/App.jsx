import {useState} from 'react';
import Form from './form';
import './App.css';
function App() {

  const [loading, setloading] = useState(true)
  return (
    
    <div className = "button">
      <Form/>
     {loading ? <> <h1>WELCOME TO THE WEBSITE !!</h1> 
     <button onClick={ () => {setloading(false)}}>Next</button></>:<h1>HOW ARE YOU ?</h1>}
    </div>
  )
}
export default App;
