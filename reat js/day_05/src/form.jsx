import {useState} from 'react';

function Form() {

  const [fName, setfName] = useState("")      
    return (
       <div  >
            <form>
            <input type="text" placeholder='first name' onChange={(e) => setfName(e.target.value)} />
            </form>

         <center><h1>{fName}</h1></center>
        </div>
      )
    }

export default Form;