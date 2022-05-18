import React from "react";
import data from "./meetingsData";

const Meetings = () => {
  console.log(data);
  return (
    <div className="container">
      <h1 style={{ marginTop: "10px" }}>List of meetings</h1>
      <table className="meetingsTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>date</th>
            <th>status</th>
          </tr>
        </thead>
        {data.map((meet) => {
          const { id, name, date, owner, status } = meet;
          console.log(id);
          console.log(name);
          <tr key={meet.id}>
            <td>name</td>
            <td>{owner}</td>
            <td>{date}</td>
            <td>{status}</td>
            <td>
              <button className="removeMeet">DELETE</button>
            </td>
          </tr>;
        })}
      </table>
    </div>
  );
};

export default Meetings;
