import Card from './Card';
import React, {useState} from "react";


function Tours(props) { 


    return (

       <div className='container'>
      <div>
      <h2 className='title'> Plan With Harshit</h2>
      </div>
       <div className='cards'>
          {props.tours.map((ele)=> {
            return <Card key={ele.id} {...ele} remove = {props.remove} ></Card>
          })}
       </div>

       </div>

    )


}

export default Tours;