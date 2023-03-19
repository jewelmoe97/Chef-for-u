import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
function DeleteRecipe (){
    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        fetch(`/recipe/${id}`, { method: 'DELETE' })
          
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          // handle successful deletion
          history.push('/');
        })
        .catch(error => {
          // handle error response
          
          alert("You are not authorized to delete this recipe.");

          history.push('/');
        });
        
        
        
      }, []);
    
      
    
return (<div>
   <h1>Delete recipe</h1> 
    
    
    
    
    </div>)


}


export default DeleteRecipe;