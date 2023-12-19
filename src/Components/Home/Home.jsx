import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
<div className="bg">
    <div className="header">
      <a href="#" class="logo">Welcome to My Page</a>
<nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/">login</Link>
    <Link to="/Register">Register</Link>
    <a href="#">logout</a>
  
</nav>
</div>
</div>
    
  )
};

export default Home;
