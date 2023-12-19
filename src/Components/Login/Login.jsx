import React, { useState } from "react";

import "./Login.css";

import { Mail, Lock } from "react-bootstrap-icons";
import { MdMail, MdLock } from "react-icons/md";
import {} from "react-icons/ai";
// import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://athentication-server.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/Home";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="box">
      <span className="borderLine"></span>
      <form onSubmit={handleSubmit}>
        <h2>Sign in </h2>
        <div class="inputBox">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required="required"
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required="required"
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forget Password</a>
          <Link to="/Register">
            <a href="#">Singup</a>
          </Link>
        </div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
