
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function ItemDetail() {
    const [recipe, setRecipe] = useState();
    const[comment, setComment] = useState();
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
        user_id :,
       recipe_id :id,
        review: comment
      
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
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
    <div><h1>each item view</h1>
   
    {recipe && <React.Fragment>  <h1>title:{recipe.title}</h1>
    
    <h2>{recipe.id}</h2>
    <img src={recipe.image_url} className="menu-img img-fluid" alt=""/>
    <h2>instructions:{recipe.instructions}</h2>
    <h2>cooking_time:{recipe.cooking_time}</h2>
    <label for="message">Message:</label>
    <form onSubmit={handleSubmit}><textarea id="message" name="message" rows="5" cols="40" value={comment}  onChange={(e) => setComment(e.target.value)}></textarea>

    <input type="submit" value="send"/>
    </form>
   
    
    </React.Fragment>}
  
</div>
)
}






export default ItemDetail;