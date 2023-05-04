
import React from "react";
import { useState } from "react";


function Time() {
  const [recipes, setRecipes] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("time");

    fetch("/time", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };

  return (
    <div><h1 style={{marginTop: 100 +"px"}}>5 quickest recipes</h1>
      <button className="btn btn-primary mx-auto text-center" onClick={handleClick}>View</button>
     <div className="container mt-5">
     <div className="row gy-5">
     { recipes.length > 0  &&  recipes.map((one,index)=>{
       return(
       <div className="col-lg-4 menu-item" key={one.id} onClick={()=>console.log(one.id)}>
         <div className="glightbox"><img src={one.image_url} className="menu-img img-fluid" alt=""/></div>
         <h4 className="text-uppercase">{one.title}</h4>
         <h4 className="text-uppercase">Recipe by:{one?.user?.username}</h4>
         <h4 className="text-uppercase">Time: {one.cooking_time} minutes</h4>
         <div className="d-flex flex-row justify-content-center align-items-center mx-auto text-center">
         
         </div>
       
       </div>

       )
         })   
         }
     
     </div>
   </div>

     
     
     
     
     </div> 
     
        
      
    
  );
}

export default Time;
