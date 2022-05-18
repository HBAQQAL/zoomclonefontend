import React from "react";

const AddMeet = ({ back }) => {
  console.log(back);
  return (
    <div className="addMeet">
      <form>
        <h1>Create new Meet</h1>
        <div className="formContent">
          <div className="left">
            <div>
              <label htmlFor="MeetName">Meet name</label>
              <input type="text" id="MeetName" />
            </div>
            <div>
              <label htmlFor="MeetTime">Starting time</label>
              <input type="datetime-local" id="MeetTime" />
            </div>
            <div>
              <label>Private Meet</label>
              <input type="radio" id="MeetType" />
            </div>
          </div>
          <div className="right">
            <div>
              <label>People</label>
              <textarea
                name="People"
                id="peopleList"
                cols="30"
                rows="4"
                placeholder="email.com,email.com"
              ></textarea>
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="Description"
                id="peopleList"
                cols="30"
                rows="4"
                placeholder=""
              ></textarea>
            </div>
          </div>
        </div>
        <div className="createandback">
          <button onClick={() => back(false)}>Back</button>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default AddMeet;
