import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [data, setData] = useState({
    userName: "",
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
      const url =
        "http://localhost:8000/api/users/Register";
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
    <div class="box">
      <span class="borderLine"></span>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div class="inputBox">
          <input
            type="text"
            name="userName"
            value={data.userName}
            onChange={handleChange}
            required="required"
          />
          <span>Username</span>
          <i></i>
        </div>
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
        <div class="inputBox">
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
{error && <div className="inputs error-msg" style={{color:"#fff"}}>{error }</div>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Register;
