import React from "react";
import "./Login.css";
import {} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="form_container">
      <form>
        <h1>Login</h1>
        <br />
        <br />
        <label>Email</label>
        <input
          class="box"
          type="email"
          name="email"
          id="email"
          placeholder="E-Mail "
          required
        />
        <br />
        
       <label>password</label>
        <input
          class="box"
          type="password"
          name="password"
          id="password"
          placeholder="Password "
          required
        />
        <br />

       
         <Link to="/Home"><div className="button2">Submit</div></Link><br/>
         <a href="#"> Forget password?</a><span>OR</span><a href="Register"> Register</a>
        
      </form>
    </div>
  );
};

export default Login;
