import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "./App.css";

import Home from "./pages/landingPage/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Chats from "./pages/learners/Chats";
import Mentors from "./pages/learners/Mentors";
import Curriculum from "./pages/learners/Curriculum";
import StudentDashboard from "./pages/learners/StudentDashboard";
import Materials from "./pages/learners/Materials";
import Profile from "./pages/learners/Profile";
import About from "./pages/landingPage/about/About";
import LandingPageLayout from "./components/layout/LandingPageLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<LandingPageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="login/:type" element={<Login />} />
        <Route path="register/:type" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="chats" element={<Chats />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="metrics" element={<StudentDashboard />} />
          <Route path="materials" element={<Materials />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
