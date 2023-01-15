import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/NavBar";
import Dashbord from "./Components/Dashbord";
import Meetings from "./Components/Meetings";
import Teams from "./Components/Teams";
import Notifications from "./Components/Notifications";
import Profile from "./Components/Profile";
import Support from "./Components/Support";
import Room from "./Components/Room";

function App() {
  const [isLogin, setIsLoggin] = useState(false);
  const navigate = useNavigate();

  const verifieToken = async () => {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    const res = await axios.post(
      "http://localhost:8080/api/users/getuserdata",
      {
        name: "hamza",
      }
    );
    console.log(await res.status);
    console.log(await res.data);
    if (res.status === 200) {
      setIsLoggin(true);
      dashbord();
    } else {
      setIsLoggin(false);
      loginpage();
    }
  };
  const loginpage = useCallback(() => {
    navigate("/login");
  });
  const dashbord = useCallback(() => {
    navigate("/dashbord");
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      loginpage();
      return;
    } else {
      verifieToken();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashbord />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/meetings" element={<Meetings />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/support" element={<Support />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
}

export default App;
