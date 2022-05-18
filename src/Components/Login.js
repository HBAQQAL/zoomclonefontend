import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(true);
  const login = () => {
    axios
      .post("http://localhost:8080/api/v1/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          console.log(data);
          alert(data.token);

          localStorage.setItem("token", "stage " + data.token);
        } else {
          alert(res.data);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="main">
      <div className="login">
        <form className="registerForm">
          <h1>Register</h1>
          <div className="inputs">
            <div className="input">
              <MdEmail className="icon" />{" "}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <RiLockPasswordFill className="icon" />{" "}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input" id="check">
              <input
                type="checkbox"
                name="checkBox"
                value={isRemember}
                onChange={(e) => {
                  console.log(e.target.value);
                  setIsRemember(!isRemember);
                }}
              />
              <label htmlFor="checkBox">
                Remember <u>me</u>
              </label>
            </div>
          </div>
          <button
            className="registerbtn"
            type="button"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </form>
        <div className="elements">
          <img src="images/back.jpg" alt="logo" className="logo" />
          <Link to={"/register"}>D'ont have an Account!</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
