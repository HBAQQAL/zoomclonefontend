import React from "react";
import { useState } from "react";
import axios from "axios";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const AddMeet = ({ back }) => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    console.log(inputs.startTime);
    const participants = inputs.people.split(",");
    const res = await axios.post(
      "https://videocloneapi.onrender.com/api/meet/create",
      {
        name: inputs.name,
        startTime: inputs.startTime,
        private: inputs.isPrivate,
        participants: participants,
        description: inputs.description,
      }
    );
    console.log(res.data);
    back(false);
  };
  console.log(back);
  return (
    <div className="addMeet">
      <form>
        <h1>Créer une nouvelle réunion</h1>
        <div className="formContent">
          <div className="left">
            <div>
              <label htmlFor="MeetName">Nom de la reunion</label>
              <input
                name="name"
                type="text"
                id="MeetName"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="MeetTime">Date de debut</label>
              <input
                name="startTime"
                type="date"
                id="MeetTime"
                value={inputs.startTime || new Date().getTime()}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Réunion privée</label>
              <input
                name="isPrivate"
                type="checkbox"
                id="MeetType"
                value={inputs.isPrivate || true}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="right">
            <div>
              <label>Participants</label>
              <textarea
                name="people"
                id="peopleList"
                cols="30"
                rows="4"
                placeholder="email.com,email.com"
                value={inputs.people || ""}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                id="peopleList"
                cols="30"
                rows="4"
                placeholder=""
                value={inputs.description || ""}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="createandback">
          <button onClick={() => back(false)}>Annuler</button>
          <button type="button" onClick={handleSubmit}>
            Créer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMeet;
