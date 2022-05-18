import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
function App() {
  const [isLogin, setIsLoggin] = useState(true);
  return (
    <Router>
      {isLogin && (
        <>
          <Navbar />

          <div className="pages">
            <Routes>
              <Route path="/Dashbord" element={<Dashbord />} />
              <Route path="/Meetings" element={<Meetings />} />
              <Route path="/team" element={<Teams />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
