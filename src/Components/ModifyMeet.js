import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const ModifyMeet = ({ setModifyMeet, data }) => {
  const [inputs, setInputs] = useState({ ...data });
  console.log(inputs);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    const participants = inputs.people.split(",");
    const res = await axios.put(
      "http://localhost:9090/api/v1/meets/updateOne",
      {
        _id: data._id,
        name: inputs.name,
        startTime: inputs.startTime,
        private: inputs.isPrivate,
        participants: participants,
        description: inputs.description,
      }
    );
    console.log(res.status);
  };

  return (
    <div className="addMeet">
      <form>
        <h1>Modify Meet</h1>
        <div className="formContent">
          <div className="left">
            <div>
              <label htmlFor="MeetName">Meet name</label>
              <input
                name="name"
                type="text"
                id="MeetName"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="MeetTime">Starting time</label>
              <input
                name="startTime"
                type="date"
                id="MeetTime"
                value={inputs.startTime || new Date()}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Private Meet</label>
              <input
                name="isPrivate"
                type="checkbox"
                id="MeetType"
                value={inputs.private || true}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="right">
            <div>
              <label>People</label>
              <textarea
                name="people"
                id="peopleList"
                cols="30"
                rows="4"
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
                value={inputs.description || ""}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="createandback">
          <button onClick={() => setModifyMeet(false)}>Cancel</button>
          <button type="button" onClick={handleSubmit}>
            Modify
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModifyMeet;
