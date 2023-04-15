import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
function DeleteCom (){
    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        fetch(`/comments/${id}`, { method: 'DELETE' })
          
        .then(response => {
          if (response.ok) {
            // return response.json();
            response.json().then((sus) => {

              alert(sus.message)
            });
  
            history.goBack();
          } else {
            // throw new Error('Network response was not ok');

            response.json().then((err) => {

              alert(err.errors)
            });
  
            history.goBack();
          
          }
        })
       
        .catch(error => {
          
          
          console.log(error);
        });
        
        
        
      }, []);
    
      
    
return (<div>
  
    
    
    
    
    </div>)


}


export default DeleteCom;