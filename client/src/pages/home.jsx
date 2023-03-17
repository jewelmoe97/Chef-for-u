
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import heroimg from "../img/heroimg.png";
import about2 from "../img/about2.jpg";

import { useContext } from 'react';
import UserContext from '../components/UserContext';

import catfish from "../img/catfish.png";
import corncheeese from "../img/corncheeese.png";
import salmon from "../img/salmon.png";
import skirtsteak from "../img/skirtsteak.png";
import teri from "../img/teri.png";
import chicken from "../img/chicken.png";
import waffle from "../img/waffle.png";
import ome from "../img/ome.png";
import pasta from "../img/pasta.png"
import gc from "../img/gc.png";
import noodle from "../img/noodle.png";

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
    <div>
    {user ? (
      <h1>Welcome, {user.username}!</h1>
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
    <h2>Our Menu</h2>
    <p>Check Our <span>Yummy Menu</span></p>
  </div>

  <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

    <li className="nav-item">
      <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
        <h4>Starters</h4>
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
        <h4>Breakfast</h4>
      </a>
      </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
        <h4>Lunch</h4>
      </a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
        <h4>Dinner</h4>
      </a>
    </li>

  </ul>

  <div className="tab-content" data-aos="fade-up" data-aos-delay="300">

    <div className="tab-pane fade active show" id="menu-starters">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Starters</h3>
      </div>


      <div className="row gy-5">
      { recipes.length > 0  &&  recipes.map((one,index)=>{
        return(
        <div className="col-lg-4 menu-item" key={one.id} onClick={()=>console.log(one.id)}>
          <div className="glightbox"><img src={one.image_url} className="menu-img img-fluid" alt=""/></div>
          <h4>{one.title}</h4>
          <Link to={`/item/${one.id}`}>view</Link>
        
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

        <div className="col-lg-4 menu-item">
          <a href={waffle} className="glightbox"><img src={waffle} className="menu-img img-fluid" alt=""/></a>
          <h4>Waffle with Blueberry</h4>
          <p className="ingredients">
          All Purpose Flour
          1 teaspoon Salt
          1 tablespoon Baking Powder
          2 tablespoons Granulated White Sugar
          2 eggs 
          6 tablespoons  Butter (melted)
          1 ½ cups Milk
          2 teaspoons  Vanilla Extract
          4 ounces  Fresh Blueberries
          3 tablespoons maple syrup
          
          </p>
          <p className="cooking time">
            20mins
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href={gc} className="glightbox"><img src={gc} className="menu-img img-fluid" alt=""/></a>
          <h4>Grilled Cheese Sandwich</h4>
          <p className="ingredients">
          4 slices  White Bread
          3 tablespoons Butter (divided)
           2 slices Cheddar Cheese
          
          </p>
          <p className="cooking time">
           10mins
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href={ome} className="glightbox"><img src={ome} className="menu-img img-fluid" alt=""/></a>
          <h4>Omelette</h4>
          <p className="ingredients">
           3 eggs
           salt and pepper to taste
           Butter
           30 grams Chedder or Mozzarella Cheese
           tomatoe and onions(optional)
           2 slices of ham 
          </p>
          <p className="cooking time">
          15mins
          </p>
        </div>

        

        

        

      </div>
    </div>
    <div className="tab-pane fade" id="menu-lunch">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Lunch</h3>
      </div>

      <div className="row gy-5">

        <div className="col-lg-4 menu-item">
          <a href={chicken} className="glightbox"><img src={chicken} className="menu-img img-fluid" alt=""/></a>
          <h4>Grilled Chicken salad </h4>
          <p className="ingredients">
          4 Chicken Breasts (cut into 1 inch pieces)
          2 teaspoons  Extra Virgin Olive Oil (for marinating & 2 teaspoon to cook chicken)
           sald & peepper to taste 
          1 Bellpepper (chopped)
          1 teaspoon  Lemon Juice
          1 teaspoon Vinegar
          1 eggplant (cut )
          1 teaspoon Extra Virgin Olive Oil
           3 Cherry Tomatoes (cut into half)
           10 Lettuce Leaves (roughly chopped) 
          </p>
          <p className="cooking time">
           30mins
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href={noodle} className="glightbox"><img src={noodle} className="menu-img img-fluid" alt=""/></a>
          <h4>Pan-Fried Noodles</h4>
          <p className="ingredients">
         12 ounces Hong Kong Style Egg Noodles 
          1 tablespoon dark soy sauce
          2 tablespoons light soy sauce
          1 teasppon salt 
          1 teaspoon ground white pepper
         6 ounces  choice of meat or seafood
         2 tablespoons oil
         3 cloves of Garlic
         half yellow or white onion 
         1 carrot chopped
         1 cup of cabbage


        </p>
          <p className="cooking time">
           20mins
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href={pasta} className="glightbox"><img src={pasta} className="menu-img img-fluid" alt=""/></a>
          <h4>Shrimp Pasta</h4>
          <p className="ingredients">
          1 pound raw shrimp, peeled and deveined (with peels reserved)
          2 cups water
          a few sprigs of parsley, plus more for garnishing
          6-8 whole peppercorns
          3 tablespoons red wine
          12 cloves garlic
          2 tablespoons olive oil
           1 (14.5-ounce) can san Marzano style diced tomatoes
          ½ -1 teaspoon red pepper flakes (depending on spice preference)
          2 tablespoons cold butter
          8 ounces Penne
          parmesan cheese, for serving
          </p>
          <p className="cooking time">
            30mins
          </p>
        </div>


      </div>
    </div>

    <div className="tab-pane fade" id="menu-dinner">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Dinner</h3>
      </div>
      <div className="row gy-5">
      <div className="col-lg-4 menu-item">
          <a href={salmon} className="glightbox"><img src={salmon} className="menu-img img-fluid" alt=""/></a>
          <h4>Pan Seared Salmon with String Beans</h4>
          <p className="ingredients">
          Four (approximately 7-ounce) salmon fillets, skin on
          2 tablespoons vegetable oil
          1 teaspoon Diamond Crystal kosher salt
          1/4 teaspoon freshly ground black pepper, or more to taste
          half lemon for lemon juice,  4 lemon wedges, for serving
      
          4oz string beans 
          </p>
          <p className="cooking time">
           30mins
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href={skirtsteak} className="glightbox"><img src={skirtsteak} className="menu-img img-fluid" alt=""/></a>
          <h4>Skirt Steak </h4>
          <p className="ingredients">
          2 pounds Skirt Steak
          Salt And Pepper
          ⅓ cup Olive Oil
          
          ⅓ cup Soy Sauce
          2 tablespoons Honey
          1 teaspoon Garlic (minced)
          1 teaspoon  Red Pepper (crushed)
          1 cup Chimichurri Sauce (optional)
          </p>
          <p className="cooking time">
            25mins
          </p>
        </div>

        
        <div className="col-lg-4 menu-item">
          <a href={teri} className="glightbox"><img src={teri} className="menu-img img-fluid" alt=""/></a>
          <h4>Chicken Teriyaki Bowl</h4>
          <p className="ingredients">
          
          Boneless Skinless Chicken Breasts (pounded to even thickness less than 1 inch)
          1 tablespoon Low Sodium Soy Sauce (divided)
          ½ cup Water
          ½ cup Teriyaki sauce
          ½ cup Rice Vinegar
          1 teaspoon Ground Ginger
          1 teaspoon brown sugar
          2 teaspoons Garlic (minced)
          3 tablespoons Corn Starch
          ½ teaspoon  Sesame Seeds
          Green Onions And Steamed Rice (chopped, for serving)
          </p>
          <p className="cooking time">
           40mins
          </p>
        </div>

      </div>
    </div>
  </div>


</div>
</section>

  </div>
  );
}
export default Home;