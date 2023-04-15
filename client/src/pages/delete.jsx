import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
function DeleteRecipe() {
  const history = useHistory();
  const { id } = useParams();

  function RecipeDelete() {
    fetch(`/recipes/${id}`, { method: 'DELETE' })

      .then(response => {
        if (response.ok) {

          response.json().then((sus) => {

            alert(sus.message)
          });

          history.goBack();
        } else {

          response.json().then((err) => {

            alert(err.errors)
          });

          history.goBack();
        }
      })

      .catch(error => {
        // handle error response

        console.log(error);
      });
  }
  useEffect(() => {


    RecipeDelete()

  }, []);



  return (<div>
    <h1>Delete recipe</h1>




  </div>)


}


export default DeleteRecipe;