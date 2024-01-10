import React from "react";

import { MdOutlineMenu } from "react-icons/md";

import "./Home.css";
import { Link } from "react-router-dom";
// const menuIcon=document.querySelector('#menu-icon');
// const navbar=document.querySelector('#menu-icon');
// const navbg=document.querySelector('#menu-icon');

// menuIcon.addEventListener('Click',() =>{
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
//   navbg.classList.toggle('active');

// });
const Home = () => {
  return (
    <div className="bg">
      <div className="header">
        <a href="#" class="logo">
          logo
        

        </a>
          <MdOutlineMenu id="menu-icon"/>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/">login</Link>
          <Link to="/Register">Register</Link>
          <a href="#">logout</a>

        </nav>
      </div>
    </div>
  );
};

export default Home;
