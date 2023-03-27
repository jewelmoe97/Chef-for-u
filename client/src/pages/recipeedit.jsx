import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";


function RecipeEdit() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState();
    const [title, setTitle] = useState();
  const [minutesToComplete, setMinutesToComplete] = useState();
  const [instructions, setInstructions] = useState();
  const [image,setImage] = useState();
  const history = useHistory();
  
  
  const [category,setCategory] = useState();

    useEffect(() => {
        fetch(`/show/${id}`)
        .then((res)=>{
            return res.json();
            
          })
    
          .then((result)=>{
            console.log(result.length);
            return setRecipe(result);
          })
    
          .catch((err)=>{
            console.log(err);
          })
      }, []);

      function handleSubmit(e) {
        e.preventDefault();
        
       fetch(`/updates/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          instructions: instructions,
          cooking_time: minutesToComplete,
          image_url: image,
          category: category
        }),
      })
      .then(response => {
        if (response.ok) {
            history.push("/");
        } else {
          throw new Error('Network response was not ok');
        }
      }) .then(data => {
        // handle successful deletion
        history.push('/');
      })
      .catch(error => {
        // handle error response
        
        alert("You are not authorized to edit this recipe.");

        history.push('/');
      })
      
      
    }

  return (
    <div style={{marginTop:130+"px"}} className="d-flex flex-column justify-content-center align-items-center text-center mx-auto">
    
    {recipe && <React.Fragment>  
    <img src={recipe.image_url} className="menu-img img-fluid" alt=""/>
    
    
    <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input type="text" placeholder={recipe.title} value={title}
    onChange={(e) => setTitle(e.target.value)}/><br/><br/>

    <label>Image</label>
    <input type="text" placeholder={recipe.image_url} value={image}
    onChange={(e) => setImage(e.target.value)}/><br/><br/>

    <label>Instructions</label>
    <input type="text" placeholder={recipe.instructions} value={instructions}
    onChange={(e) => setInstructions(e.target.value)}/><br/><br/>

    <label>Cooking Time</label>
    <input type="number" placeholder={recipe.cooking_time} value={minutesToComplete}
    onChange={(e) => setMinutesToComplete(e.target.value)}/><br/><br/>

    <label for="category">Category </label>
      <select
      required 
      value={category}
      onChange={(e) => setCategory(e.target.value)}
        
        
      >
        <option value="starters">Starters</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
       
      </select><br/><br/>

    <input type="submit" value="Edit"/>
    <Link to="/" className="btn btn-primary">Back</Link>
    
    
    
    
    
    </form>
    </React.Fragment>}
    </div>
  )

  
}



export default RecipeEdit;
