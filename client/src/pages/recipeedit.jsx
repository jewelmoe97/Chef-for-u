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
  const [errors, setErrors] = useState([]);
  const [sus, setSus] = useState([]);
  const [category,setCategory] = useState();
 const [showMsg, setShowMsg] = useState(true);
  useEffect(() => {
    if (sus.length > 0) {
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2000);
    }
  }, [sus]);

    useEffect(() => {
        fetch(`/recipes/${id}`)
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
        
       fetch(`/recipes/${id}`, {
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

      // render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      .then(response => {
        if (response.ok) {
          // alert("Recipe updated.");
          //   history.push("/");
           response.json().then((sus) =>setSus(sus.message));
        }else {
          response.json().then((err) => setErrors(err.errors));
        }
     
      }).catch(error => {
        console.log(error);
      })
      
      
    }

  return (
    <div style={{marginTop:130+"px"}} className="container-fluid d-flex flex-column justify-content-center align-items-center text-center mx-auto">
    {errors.length > 0 && (
      <div>
        {errors.map(error => (
          <h5 className="text-center text-danger fw-bold p-2 bg-warning rounded">{error}</h5>
        ))}
      </div>
    )}

    {showMsg && sus.length > 0 && (
      <div>
        {sus.map(sus1 => (
          <h5 className="text-center text-white fw-bold p-2 bg-success rounded">{sus1}</h5>
        ))}
      </div>
    )}
    
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

    <input type="submit" value="Edit" /><br/>
    <br/>
    <Link to="/" className="btn btn-primary">Back</Link>
    
    
    
    
    
    </form>
    </React.Fragment>}
    </div>
  )

  
}



export default RecipeEdit;
