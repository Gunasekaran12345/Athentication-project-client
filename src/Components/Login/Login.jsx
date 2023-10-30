import React, { useState } from "react";
import "./Login.css";
import {} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [data,setData] = useState({ email:"",password:"" });
  const [error,setError] = useState("");

  const handleChange = ({ currentTarget:input})=>{
setData({...data,[input.name]:input.value});
};
const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    const url ="http://localhost:8000/api/auth";
    const{data:res} = await axios.post(url,data);
    localStorage.setItem("token",res.data);
    window.location="/Home";
  }catch(error){
    if(
      error.response &&
      error.response.status >=400 &&
      error.response.status<=500
    ){
      setError(error.response.data.message);
    }
  }

  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
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
          onChange={handleChange}
          value={data.email}
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
          onChange={handleChange}
          value={data.password}
          required
        />
        <br />

        {error && <div className={Login.error_msg}>{error}</div>}
         <button className="button2">Submit</button><br/>
        
         <a href="#"> Forget password?</a><span>OR</span><a href="Register"> Register</a>
        
      </form>
    </div>
  );
  };


  export default Login;
