import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const register = () => {
    if (password !== rePassword) {
      alert("password doesn't match");
      return;
    }
    axios
      .post("http://localhost:8080/api/users/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("user inserted");
          return;
        }
        alert("invalid data");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="main">
      <div className="login">
        <form className="registerForm">
          <h1 className="loginh1">S'inscrire</h1>
          <div className="inputs">
            <div className="input">
              <FaUserAlt className="icon" />{" "}
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <RiLockPasswordLine className="icon" />{" "}
              <input
                type="password"
                placeholder="Repeter votre mot de passe"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
            </div>
            <div className="input" id="check">
              <input type="checkbox" name="checkBox" />
              <label htmlFor="checkBox">
                J'accepte toutes les déclarations
                <u>dans les conditions d'utilisation</u>
              </label>
            </div>
          </div>
          <button
            type="button"
            className="registerbtn"
            onClick={() => {
              register();
            }}
          >
            S'inscrire
          </button>
        </form>

        <div className="elements">
          <img src="images/back.jpg" alt="logo" className="logo" />
          <Link to={"/login"}>
            <a type="button">Je suis déjà membre !</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
