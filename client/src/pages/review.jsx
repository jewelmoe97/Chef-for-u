import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Review() {
  const [review ,setReview] = useState()
 
    useEffect(() => {
        fetch(`/view`)
        .then((res)=>{
            return res.json();
            
          })
    
          .then((result)=>{
            console.log(result);
            return setReview(result);
          })
    
          .catch((err)=>{
            console.log(err);
          })
      }, []);

    //   let each= review.map((two,index)=>{
    //     console.log(two.review)
    //  }) 
    return (
<div>
<h1 className="text-center" style={{marginTop:100+"px"}}>Comments</h1>
{ review  &&  review.map((one,index)=>{
    return(
<div className="border border-dark p-5 mt-5 d-flex justify-content-center align-items-center mx-auto text-center flex-column" >
<h1 className="text-center">{one.review}</h1>
<p className="text-center">User ID:{one.user_id}</p>

<p className="text-center">Recipe ID:{one.recipe_id}</p>
<Link to={`/comments/${one.id}`} className="btn btn-danger mx-auto text-center">Delete</Link>
</div>
    )   
    })   
    }
  
</div>


)
}




export default Review;