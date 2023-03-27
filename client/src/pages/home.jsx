
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import heroimg from "../img/heroimg.png";
import about2 from "../img/about2.jpg";

import { useContext } from 'react';
import UserContext from '../components/UserContext';


import skirtsteak from "../img/skirtsteak.png";


function Home() {
  const [recipes, setRecipes] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("/list")
    .then((res)=>{
        return res.json();
      })

      .then((result)=>{
        console.log(result.length);
        return setRecipes(result);
      })

      .catch((err)=>{
        console.log(err);
      })

      

    //   .then(setRecipes);
  }, []);

  return (
    <div>
    <div style={{marginTop:130+"px"}}>
    {user ? (
      <div className="d-flex flex-row mx-auto text-center justify-content-center align-items-center ">
      <h1>Welcome, {user.username}!</h1>
      <img className="img img-fluid" width={150+"px"} height={150+"px"} style={{borderRadius:20+"%"}} src={user.image_url}/>
      </div>
      ) : (
      <h1>Please login to continue.</h1>
    )}
  </div>
  

  
  <section id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container">
      <div className="row justify-content-between gy-5">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">Enjoy Your  Easy<br/>Delicious Food</h2>
          <p data-aos="fade-up" data-aos-delay="100"> </p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
           
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
        <img src={heroimg} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
        </div>
      </div>
    </div>
  </section>

  
  <section id="about" className="about">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>About Us</h2>
      <p>Learn More <span>About Us</span></p>
    </div>

    <div className="row gy-4">
      <div className="col-lg-7 position-relative about-img ab"   data-aos="fade-up" data-aos-delay="150">
        <div className="call-us position-absolute">
          
        </div>
      </div>
      <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
        <div className="content ps-0 ps-lg-5">
          <p className="fst-italic">
          Cook everything from scratch
          </p>
          
          <p>
          Love to eat then learn to cook with our simple,easy and quick recipes.
          </p>

          <div className="position-relative mt-4">
            <img src={skirtsteak} className="img-fluid" alt=""/>
            <a href="https://youtu.be/XCyK4nhKS9Y" className="glightbox play-btn"></a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>



<section id="menu" className="menu">
<div className="container" data-aos="fade-up">

  <div className="section-header">
    <h2>Our Recipe</h2>
    <p>Check Our <span>Yummy Recipes</span></p>
  </div>

  
  <div className="tab-content" data-aos="fade-up" data-aos-delay="300">

    <div className="tab-pane fade active show" id="menu-starters">

      <div className="tab-header text-center">
       
        <h3>Recipes</h3>
      </div>


      <div className="row gy-5">
      { recipes.length > 0  &&  recipes.map((one,index)=>{
        return(
        <div className="col-lg-4 menu-item" key={one.id} onClick={()=>console.log(one.id)}>
          <div className="glightbox"><img src={one.image_url} className="menu-img img-fluid" alt=""/></div>
          <h4 className="text-uppercase">{one.title}</h4>
          <div className="d-flex flex-row justify-content-center align-items-center mx-auto text-center">
          <Link to={`/item/${one.id}`} className="btn btn-primary mx-1">view</Link><br/>
          <Link to={`/recipe/${one.id}`} className="btn btn-danger mx-1">Delete</Link></div>
        
        </div>
 
        )
          })   
          }
      
      </div>
    </div>

    <div className="tab-pane fade" id="menu-breakfast">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Breakfast</h3>
      </div>

      <div className="row gy-5">

      

        
        

        

        

        

      </div>
    </div>
    <div className="tab-pane fade" id="menu-lunch">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Lunch</h3>
      </div>

      <div className="row gy-5">

       

       

        

      </div>
    </div>

    <div className="tab-pane fade" id="menu-dinner">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Dinner</h3>
      </div>
      <div className="row gy-5">
     

       

        
        

      </div>
    </div>
  </div>


</div>
</section>

  </div>
  );
}
export default Home;