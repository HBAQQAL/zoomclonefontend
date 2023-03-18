import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsWindowSidebar } from "react-icons/bs";

const Room = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [userid, setuserid] = useState("");
  const [username, setusername] = useState("");

  const leaveMeeting = () => {
    navigate("/dashboard");
  };
  const meeting = async (element) => {
    console.log("meeting before  setuserdata");
    await setuserdata();
    console.log("meeting after setuserdata");

    const appId = 1651147344;
    const serverSecret = "67894c2c11d23ff299957557a150bf4c";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      username
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    const roomParams = {
      roomID: roomId,
      roomName: roomId,
      user: {
        id: userid,
        name: username,
      },
    };

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      user: {
        id: userid,
        name: username,
      },
      sharedLinks: [
        {
          name: "Code du reunion",
          url: roomId,
        },
      ],
      showLeavingView: false,
      onLeaveRoom: leaveMeeting,
    });
  };
  const setuserdata = async () => {
    const userdata = await axios.post(
      // 1
      "https://videocloneapi.onrender.com/api/users/getuserdata"
    );
    console.log(userdata.data._id + " id inside setuserdata");
    setuserid(userdata.data._id);
    setusername(userdata.data.name);
    console.log(username + " username inside setuserdata");
  };

  return <div ref={meeting} style={{ width: "100%", height: "100vh" }}></div>;
};

export default Room;
