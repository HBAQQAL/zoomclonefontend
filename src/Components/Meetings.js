import React, { useState, useEffect } from "react";
import axios from "axios";
import AddMeet from "./AddMeet";
import ModifyMeet from "./ModifyMeet";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [modifyMeet, setModifyMeet] = useState(false);
  const [selectedMeet, setSelectedMeet] = useState({});
  const getMeetings = async () => {
    const response = await axios.get("http://localhost:8080/api/meet/getall");
    setMeetings(response.data);
    console.log(response.data);
    console.log(meetings);
  };
  useEffect(() => {
    getMeetings();
  }, []);
  const removeItem = async (itemId) => {
    const reponse = await axios.post("http://localhost:8080/api/meet/delete", {
      data: {
        id: itemId,
      },
    });
    alert(reponse.data);

    const newMeetList = meetings.filter((meet) => meet._id !== itemId);
    setMeetings(newMeetList);
  };

  return (
    <>
      <Navbar />
      <div className="pages">
        <div className="container">
          <h1 style={{ marginTop: "10px" }}>Liste des reunions</h1>
          <table className="meetingsTable">
            <thead>
              <tr>
                <th>Nom</th>
                <th>date</th>
                <th>Réunion privée</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meet) => {
                const { _id, name, startTime } = meet;
                const isPrivate = meet.private;
                console.log(isPrivate);
                if (!isPrivate) return;
                return (
                  <tr key={meet._id} className="meetData">
                    <td>{name}</td>
                    <td>{startTime}</td>
                    <td>{isPrivate ? "private" : "public"}</td>
                    <td>
                      <button
                        className="deleteMeet"
                        onClick={() => removeItem(_id)}
                      >
                        Supprimer
                      </button>
                    </td>
                    <td>
                      <button
                        className="editMeet"
                        onClick={() => {
                          setModifyMeet(!modifyMeet);
                          setSelectedMeet(meet);
                        }}
                      >
                        {" "}
                        Modifier
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {modifyMeet && (
            <ModifyMeet setModifyMeet={setModifyMeet} data={selectedMeet} />
          )}
        </div>
      </div>
    </>
  );
};

export default Meetings;
