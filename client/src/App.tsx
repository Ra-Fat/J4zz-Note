import dashboard from "./pages/dashboard"
import history from "./pages/history"
import login from "./pages/login"
import signup from "./pages/signup"
import notefound from "./pages/notefound"
import profile from "./pages/profile"
import { Routes, Route } from "react-router-dom";

const Dashboard = dashboard;
const History = history;
const Login = login;
const Signup = signup;
const NotFound = notefound;
const Profile = profile;

function App() {
  return (
    <>
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 w-screen h-screen">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </>
  )
}

export default App
