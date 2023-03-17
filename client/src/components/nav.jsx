

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { useHistory } from 'react-router-dom';


function NavBar1({ user, setUser }) {
  const history = useHistory();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push('/');
      }
    });
  }

  return (
     
    
    
<div id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
        
       
        <h1>Chef For U<span>.</span></h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <Button as={Link} to="/new">
          New Recipe
        </Button>
          <li  onClick={handleLogoutClick}>
          <a>Logout</a>
        </li>
          
        </ul>

      </nav>

      
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </div>
  );
}
export default NavBar1;