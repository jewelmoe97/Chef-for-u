import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";
// import NavBar from "./NavBar1";
import Login from "../pages/Login";
import NavBar1 from "./nav.jsx";
import RecipeList from "../pages/RecipeList";
import Home from "../pages/home.jsx";
import NewRecipe from "../pages/AddRecipe";
import "../App.css";
import { useContext } from 'react';
import UserContext from "./UserContext";
import ItemDetail from "../pages/EachItemList";
import DeleteRecipe from "../pages/delete";
import Review from "../pages/review";
import DeleteCom from "../pages/deletecom";
import RecipeEdit from "../pages/recipeedit";

function App() {
  const [user, setUser] = useState(null);
function Display() {
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
   console.log(user) }
  });
}
  useEffect(() => {
    // auto-login
   Display()
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  // 
  return (
    <>
    <NavBar1 user={user} setUser={setUser} />
    <main>
    <UserContext.Provider value={{ user, setUser }}>
    
    <Switch>
      <Route path="/new">
      <NewRecipe user={user} />
    </Route>

    <Route exact path="/recipes/:id" ><ItemDetail/></Route>
    <Route exact path="/recipes/:id/delete" ><DeleteRecipe/></Route>
    <Route exact path="/comments" ><Review/></Route>
    <Route exact path="/comments/:id/delete" ><DeleteCom/></Route>
    <Route exact path="/recipes/:id/edit"><RecipeEdit  /></Route> 
    <Route exact path="/">
    
    <Home/>
    </Route>
    
      </Switch>
      
      </UserContext.Provider>
    </main>
      
    </>
  );
}

export default App;
