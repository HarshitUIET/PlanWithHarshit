import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours,setTour] = useState(data);

  function InterestHandler(id) {
    const newTour = tours.filter((tours)=> tours.id!==id)
    setTour(newTour);
 }

  function RefreshHandler() {
    setTour(data);
  }

  if(tours.length === 0) {
      return (
        <div className="refresh">

           <h2>No Tours Left</h2>
          
           <button className="refresh-button" onClick={RefreshHandler}>Refresh</button>
        </div>
      )
  }

  return (
    <div className="App" >
      
       <Tours tours={tours} remove = {InterestHandler}></Tours>
      
    </div >
  ) 
};

export default App;
