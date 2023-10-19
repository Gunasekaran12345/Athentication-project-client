import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Container">
<nav>
  <ul>
    <li><Link to="/">login</Link></li>
    <li><Link to="/Register">Register</Link></li>
    <li><a href="#">logout</a></li>
  </ul>
</nav>
</div>
    
  )
};

export default Home;
