import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="form_container">
      <form>
        <h1>Register</h1>
        <label>Name</label>
        <input
          class="box"
          type="Name"
          name="Name"
          id="name"
          placeholder="Enter your Name "
          required
        />
        <label>Email</label>
        <input
          class="box"
          type="email"
          name="email"
          id="email"
          placeholder=" Enter your E-Mail "
          required
        />
        <label>password</label>
        <input
          class="box"
          type="password"
          name="password"
          id="password"
          placeholder="Password "
          required
        />
        <label>Email</label>
        <input
          class="box"
          type="password"
          name="password"
          id="password"
          placeholder="Confirm Password "
          required
        />
        <Link to="/">
          <div className="button2">Submit</div>
        </Link>
      </form>
    </div>
  );
};

export default Register;
