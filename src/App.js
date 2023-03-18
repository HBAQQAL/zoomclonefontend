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
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const verifieToken = async () => {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    const res = await axios.post(
      "https://videocloneapi.onrender.com/api/users/getuserdata"
    );
    console.log(await res.status);
    console.log(await res.data);
    if (res.status === 200) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setIsLogin(false);
      return;
    } else {
      verifieToken();
    }
  }, []);

  useEffect(() => {
    if (isLogin === true) {
      navigate("/dashboard");
    }
  }, [isLogin]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashbord />} />
      <Route path="/meetings" element={<Meetings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/support" element={<Support />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
}

export default App;
