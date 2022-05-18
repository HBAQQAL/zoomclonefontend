import React from "react";
import { GrSchedule } from "react-icons/gr";
import { useEffect, useState, useRef } from "react";
import { SiGooglemeet } from "react-icons/si";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsDisplayFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import AddMeet from "./AddMeet";
const usernameID = "wfw432nr3424r3242r2r2r";

const Dashbord = () => {
  const [joinDialog, setJoinDialog] = useState(false);
  const [addMeet, setAddMeet] = useState(true);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  const startMeet = () => {
    window.open("http://localhost:8080/" + usernameID, "_blank");
  };
  const toggleJoinRoom = () => {
    setJoinDialog(!joinDialog);
  };

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <div className="container">
      <h1 style={{ marginTop: "10px" }}>Dashbord</h1>
      <div className="dashbordComponnents">
        <div className="meetPro">
          <div className="pro" onClick={() => startMeet()}>
            <SiGooglemeet className="ico" />
            <h4>Start meet</h4>
          </div>
          <div className="pro">
            {" "}
            <BsPlusSquareFill
              className="ico"
              onClick={() => toggleJoinRoom()}
            />
            <h4>Join meet</h4>
          </div>
          <div className="pro" onClick={() => setAddMeet(true)}>
            {" "}
            <AiFillSchedule className="ico" />
            <h4>schedule</h4>
          </div>
          <div className="pro">
            <BsDisplayFill className="ico" />
            <h4>Record meet</h4>
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
        className={`joinMeetDialog ${joinDialog ? "HideJoinMeetDialog" : ""}`}
      >
        <form>
          <label htmlFor="idMeet">Meet id</label>
          <input type="text" name="idMeet" id="idMeet" />
          <div className="btnJoinDialog">
            <button type="button"> Join </button>
            <button type="button" onClick={() => toggleJoinRoom()}>
              {" "}
              Back{" "}
            </button>
          </div>
        </form>
      </div>
      {addMeet && <AddMeet back={setAddMeet} />}
    </div>
  );
};

export default Dashbord;
