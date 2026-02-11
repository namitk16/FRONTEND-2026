import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let counter = 0;

  return(
    <div>
      <h1>WELCOME TO THE COUNTING GAME !!</h1>
      <h2>value of counter without state is{counter}</h2>
      <button onClick = { () => {
        console.log(counter);
        counter++;

      }}> click me</button>


      <center><h1>WELCOME TO THE COUNTING GAME !!</h1></center>
      <center><h2>value of counter without state is {count}</h2></center>
      <center><button onClick = { () =>{
        if (count< 50){
        console.log(count);
        setCount(count+1);
        }
      }}>+</button></center>
     
      <center><h3>value of counter with state is {count}</h3></center>
      <br /><center><button onClick = { () =>{
        
        console.log(count);
        setCount(count-1);
        
      }}>-</button></center>
    </div>
    
  )
}

export default App;