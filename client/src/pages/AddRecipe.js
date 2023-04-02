import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";
import { useContext } from 'react';
import UserContext from '../components/UserContext';

function NewRecipe() {
  const [title, setTitle] = useState("My Awesome Recipe");
  const [minutesToComplete, setMinutesToComplete] = useState("30");
  const [instructions, setInstructions] = useState(`Here's how you make it.

  
## Ingredients

- 1c Sugar
- 1c Spice

## Instructions

**Mix** sugar and spice. _Bake_ for 30 minutes.
  `);
  const [image,setImage] = useState();
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [category,setCategory] = useState('breakfast');
  const { user } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        instructions,
        cooking_time: minutesToComplete,
        image_url: image,
        category: category,
        user_id: user.id
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper style={{marginTop:100+"px"}}>
      <WrapperChild>
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="img">Image</Label>
            <Input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="minutesToComplete">Minutes to complete</Label>
            <Input
              type="number"
              id="minutesToComplete"
              value={minutesToComplete}
              onChange={(e) => setMinutesToComplete(e.target.value)}
            />
          </FormField>

          <FormField>
          
    <Label for="category">Category </Label>
      <select
      required 
        id="type"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="starters">Starters</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
       
      </select>
    
  </FormField>

          <FormField>
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Recipe"}
            </Button>
          </FormField>
          <FormField>
          {errors?.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{title}</h1>
        <p>
          <em>Time to Complete: {minutesToComplete} minutes</em>
          &nbsp;·&nbsp;
          <cite>By {user.username}</cite>
        </p>
        <ReactMarkdown>{instructions}</ReactMarkdown>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewRecipe;
