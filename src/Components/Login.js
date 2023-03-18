import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    if (islogin === true) {
      navigate("/dashboard");
    }
  }, [islogin]);

  const login = () => {
    axios
      .post("https://videocloneapi.onrender.com/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          console.log(data);
          localStorage.setItem("token", "stage " + data.token);
          // equivalent to window.location = "/dashboard";
          setIslogin(true);
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <div className="main">
      <div className="login">
        <form className="registerForm">
          <h1 className="loginh1">S'inscrire</h1>
          <div className="inputs">
            <div className="input">
              <MdEmail className="icon" />{" "}
              <input
                type="email"
                placeholder="Email"
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
            <div>
              {/* show incorect paossword or email password if error is set to true  */}
              {error && (
                <p className="errorpassormail">
                  Email ou mot de passe incorrect
                </p>
              )}
            </div>

            <div className="input checkboxinput" id="check">
              <input type="checkbox" name="checkBox" />
              <label htmlFor="checkBox">
                Rester <u>connecté</u>
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
            S'inscrire
          </button>
        </form>
        <div className="elements">
          <img src="images/back.jpg" alt="logo" className="logo" />
          <Link to={"/register"}>N'avez pas de compte !</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
