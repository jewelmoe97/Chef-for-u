
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../components/UserContext';

function ItemDetail() {
    const [recipe, setRecipe] = useState();
    const[comment, setComment] = useState();
    const { user } = useContext(UserContext);

  const { id } = useParams();
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit")
    console.log(comment)
    fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id :user.id,
       recipe_id :id,
        review: comment
      
        
      }),
    }).then((r) => {
     
      console.log(r)
    });
   }
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

  

return (
    <div style={{marginTop:30+"px"}} className="text-center mx-auto border border-dark" ><h1>Each item view</h1>
    {user ? (
      <h1>Welcome, {user.username}!</h1>
    ) : (
      <h1>Please login to continue.</h1>
    )}
    {recipe && <React.Fragment>  <h1>title:{recipe.title}</h1>
    
    
    <img src={recipe.image_url} className="menu-img img-fluid" alt=""/>
    <h5>Instructions:{recipe.instructions}</h5>
    <h5>Cooking_time:{recipe.cooking_time}</h5>
    <h5>Category:{recipe.category}</h5>
    <label for="message">Message:</label>
    <form onSubmit={handleSubmit}><textarea id="message" name="message" rows="5" cols="40" value={comment}  onChange={(e) => setComment(e.target.value)}></textarea>

    <input type="submit" value="Send"/>
    </form>
   
    
    </React.Fragment>}
  
</div>
)
}

export default ItemDetail;