import React from "react";
import axios from "axios";
import Navbar from "./NavBar";
import { useState, useEffect } from "react";

const Profile = () => {
  const [username, setusername] = useState("undefined");
  const [email, setemail] = useState("undefined");
  const [picture, setpicture] = useState(
    "https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg"
  );

  const [userid, setuserid] = useState("");
  const [password, setpass] = useState("");
  const [newpass, setnewpass] = useState("");

  const valuechangehandler = (event) => {
    setusername(event.target.value);
  };
  const newpasshandler = (event) => {
    setnewpass(event.target.value);
  };
  const fetchuserdata = () => {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios
      .post("https://videocloneapi.onrender.com/api/users/getuserdata")
      .then((res) => {
        console.log(res.data);
        setusername(res.data.name);
        setemail(res.data.email);
        setuserid(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const save = async () => {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");

    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios
      .post("https://videocloneapi.onrender.com/api/users/updateuser", {
        name: username,
        password: newpass,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // fetch user data before rendering the page
  useEffect(() => {
    fetchuserdata();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pages">
        <h1 className="profileheader">Profile</h1>
        <div className="container profilecontainer">
          <div>
            <div className="picture">
              <img src={picture} alt="mypic" />
            </div>
            <div className="profileinfo">
              <div id="firstname">
                {" "}
                <label htmlFor="userId">userID:</label>{" "}
                <input type="text" value={userid} disabled />
              </div>
              <div id="lastname">
                {" "}
                <label htmlFor="username">username:</label>{" "}
                <input
                  type="text"
                  value={username}
                  onChange={valuechangehandler}
                />
              </div>
              <div id="email">
                {" "}
                <label htmlFor="email">email:</label>{" "}
                <input type="email" value={email} disabled />
              </div>
              <div id="password">
                {" "}
                <label htmlFor="password">password:</label>{" "}
                <input
                  type="password"
                  value={newpass}
                  onChange={newpasshandler}
                />
              </div>
              <div id="saveandback">
                <button>back</button>
                <button onClick={save}>save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
