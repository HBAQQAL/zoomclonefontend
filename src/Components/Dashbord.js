import React from "react";
import { GrSchedule } from "react-icons/gr";
import { useEffect, useState, useRef, useCallback } from "react";
import { SiGooglemeet } from "react-icons/si";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsDisplayFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./NavBar";
import AddMeet from "./AddMeet";

const Dashbord = () => {
  const navigate = useNavigate();
  const [joinDialog, setJoinDialog] = useState(true);
  const [addMeet, setAddMeet] = useState(false);
  const [joinMeetId, setJoinMeetId] = useState("");
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState(
    "newroom213" + Math.floor(Math.random() * 100000)
  );
  // a CONST VARIABLE COLLED TEST WITH rondom number with 5digits
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  const startMeet = useCallback(() => {
    navigate(`/room/${roomCode}`);
  });
  const JoinMeet = useCallback(() => {
    navigate(`/room/${joinMeetId}`);
  });

  const toggleJoinRoom = () => {
    setJoinDialog(!joinDialog);
  };

  today = mm + "/" + dd + "/" + yyyy;

  const usernameFetch = () => {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");

    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";

    axios
      .post("https://videocloneapi.onrender.com/api/users/getuserdata")
      .then((res) => {
        setUsername(res.data.name);
        setRoomCode(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    usernameFetch();
  }, []);
  useEffect(() => {
    console.log(roomCode);
  }, [roomCode]);
  return (
    <>
      <Navbar />
      <div className="pages">
        <div className="container">
          <h1
            style={{
              marginTop: "10px",
              fontFamily: "revert",
              color: "darkblue",
            }}
          >
            Bonjour {username} !{" "}
          </h1>
          <div className="dashbordComponnents">
            <div className="meetPro">
              <div className="pro" onClick={startMeet}>
                <SiGooglemeet className="ico" />
                <h4>nouvelle réunion</h4>
              </div>
              <div className="pro">
                {" "}
                <BsPlusSquareFill
                  className="ico"
                  onClick={() => toggleJoinRoom()}
                />
                <h4>Rejoindre</h4>
              </div>
              <div className="pro" onClick={() => setAddMeet(true)}>
                {" "}
                <AiFillSchedule className="ico" />
                <h4>Planifier</h4>
              </div>
              <div className="pro">
                {" "}
                <BsDisplayFill className="ico" />
                <h4>Enregistrer</h4>
              </div>
            </div>
            <div className="todayMeet">
              <div className="high">
                <h1>{new Date().toLocaleTimeString()}</h1>
                <h3>{today}</h3>
              </div>
              <div className="buttom"></div>
            </div>
          </div>

          <div
            className={`joinMeetDialog ${
              joinDialog ? "HideJoinMeetDialog" : ""
            }`}
          >
            <form>
              <label htmlFor="idMeet">Réunion ID</label>
              <input
                type="text"
                name="idMeet"
                id="idMeet"
                value={joinMeetId}
                onChange={(e) => setJoinMeetId(e.target.value)}
              />
              <div className="btnJoinDialog">
                <button type="button" onClick={() => JoinMeet()}>
                  {" "}
                  Join{" "}
                </button>
                <button type="button" onClick={() => toggleJoinRoom()}>
                  {" "}
                  Back{" "}
                </button>
              </div>
            </form>
          </div>
          {addMeet && <AddMeet back={setAddMeet} />}
        </div>
      </div>
    </>
  );
};

export default Dashbord;
