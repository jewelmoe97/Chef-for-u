
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../components/UserContext';
import { Link } from 'react-router-dom';

function ItemDetail() {
    const [recipe, setRecipe] = useState();
    const[comment, setComment] = useState();
    const { user } = useContext(UserContext);
    const[com, setCom] = useState([]);

  const { id } = useParams();
  const [showMsg, setShowMsg] = useState(true);

  useEffect(() => {
    if (com.length > 0) {
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2000);
    }
  }, [com]);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit")
    console.log(comment)
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id :user.id,
       recipe_id :id,
        review: comment
      
        
      }),
    }) .then(response => {
      if (response.ok) {
        // alert("Recipe updated.");
        //   history.push("/");
         response.json().then((com) =>setCom(com.message));
      }
    });
   }
    useEffect(() => {
    fetch(`/recipes/${id}`)
    .then((res)=>{
        return res.json();
        
      })

      .then((result)=>{
        console.log(result.comments);
        return setRecipe(result);
      })

      .catch((err)=>{
        console.log(err);
      })
  },[recipe] );

  

return (
    <div style={{marginTop:120+"px"}} className="text-center mx-auto border border-dark" >
    {user ? (
      <h1>Welcome, {user.username}!</h1>
    ) : (
      <h1>Please login to continue.</h1>
    )}
    {recipe && <React.Fragment>  <h1>title:{recipe.title}</h1>
    {showMsg && com.length > 0 && (
      <div className='txt'>
        {com.map(com1 => (
          <h5 className="text-center text-white fw-bold p-2 bg-success rounded">{com1}</h5>
        ))}
      </div>
    )}
    
    
    <img src={recipe.image_url} className="menu-img img-fluid" alt=""/>
    <h5>Instructions:{recipe.instructions}</h5>
    <h5>Cooking_time:{recipe.cooking_time}</h5>
    <h5>Category:{recipe.category}</h5><br/>
   
    <Link to={`/recipes/${recipe.id}/edit`} className="btn btn-primary mx-1">Edit</Link><br/>
    <label for="message">Message:</label>
    <form onSubmit={handleSubmit}><textarea id="message" name="message" rows="5" cols="40" value={comment}  onChange={(e) => setComment(e.target.value)}></textarea><br/>
    <br/>

    <input type="submit" value="Send" className='btn btn-primary send'/><br/>
    <br/>

    <Link to="/" className="btn btn-primary">Back</Link>
    </form>
   
    
    </React.Fragment>}
  <h1>Comments</h1>{recipe && recipe?.comments?.map((one, index) => {
    return (
      <div className="border border-dark p-5 mt-5 d-flex justify-content-center align-items-center mx-auto text-center flex-column" key={index}>
       
        <h4 className="text-center">By: {one?.user.username}</h4>
        <h4 className="text-center"> {one?.review}</h4>
        
        
       
        
  <br/>
  <br/>
        <Link to={`/comments/${one.id}/delete`} className="btn btn-danger mx-auto text-center">Delete</Link>
      </div>
    )   
  })}
  </div>
)
  }

export default ItemDetail;