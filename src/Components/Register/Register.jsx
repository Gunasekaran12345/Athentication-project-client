import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
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
    <div className="form_container">
      <form className="" onClick={handleSubmit}>
        <h1>Register</h1>
        <label>First Name</label>
        <input
          class="box"
          type="text"
          name="firstName"
          id="name"
          placeholder="Enter your Name "
          required
          onChange={handleChange}
          value={data.firstName}
        />
        <label>Last Name</label>
        <input
          class="box"
          type="text"
          name="lastName"
          id="password"
          placeholder="Confirm Password "
          onChange={handleChange}
          value={data.lastName}
          required
        />
        <label>Email</label>
        <input
          class="box"
          type="email"
          name="email"
          id="email"
          placeholder=" Enter your E-Mail "
          onChange={handleChange}
          value={data.email}
          required
        />
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

        <button className="button2">Submit</button>
      </form>
    </div>
  );
};

export default Register;
