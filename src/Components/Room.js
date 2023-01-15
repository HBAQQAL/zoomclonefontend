import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useState } from "react";
import axios from "axios";

const Room = () => {
  const { roomId } = useParams();
  const [userid, setuserid] = useState("");
  const [username, setusername] = useState("");

  const meet = async (element) => {
    const userdata = await axios.post(
      "http://localhost:8080/api/users/getuserdata",
      { name: "hamza" }
    );
    setuserid(userdata.data._id);
    setusername(userdata.data.name);
    console.log(userid, username);

    const appID = 746616351;
    const serverSecret = "8a0aee1574626dd1c36af85bccee0d84";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userid,
      username
    );
    const zc = new ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Inviter",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div>
      <div ref={meet} />
    </div>
  );
};

export default Room;
