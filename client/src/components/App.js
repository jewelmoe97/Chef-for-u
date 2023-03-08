import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar1";
import Login from "../pages/Login";
import NavBar1 from "./nav.jsx";
//import RecipeList from "../pages/RecipeList";
import Home from "../pages/home.jsx";
import NewRecipe from "../pages/AddRecipe";
import "../App.css";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <NavBar1 user={user} setUser={setUser} />
      <main>
        <Switch>
        <Route path="/new">
        <NewRecipe user={user} />
      </Route>
      <Route path="/">
      <Home/>
      </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
