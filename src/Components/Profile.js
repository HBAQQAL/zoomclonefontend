import React from "react";

const profileData = {
  name: "hamza",
  age: 20,
  email: "hamzabaqqal2002@gmail.com",
  img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8eW91bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  job: "SOFTWARE DEVELOPER",
  desc: "hi my name is hamza baqqal and i'am a software developer",
};

const Profile = () => {
  return (
    <div className="container">
      <h1 style={{ marginTop: "10px" }}>Profile</h1>
      <h3>{profileData.job}</h3>
      <img
        src={profileData.img}
        alt={profileData.name}
        className="profileImg"
      />
      <div className="profileAbout">
        <h4>About me</h4>
        <p>{profileData.desc} ......</p>
      </div>
      <h3>Name</h3>
      <h5>{profileData.name}</h5>
      <h3>Email</h3>
      <h5>{profileData.email}</h5>
      <div className="profileBtn">
        <button className="removeBtn">REMOVE PROFILE</button>
        <button className="editBtn">EDIT PROFILE</button>
      </div>
    </div>
  );
};

export default Profile;
