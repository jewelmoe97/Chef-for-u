import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
function DeleteRecipe (){
    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        fetch(`/recipe/${id}`, { method: 'DELETE' })
          .then(response => {response.json()
            history.push('/');
        
        })
        
      }, []);
    
      
    
return (<div>
   <h1>Delete recipe</h1> 
    
    
    
    
    </div>)


}


















export default DeleteRecipe;