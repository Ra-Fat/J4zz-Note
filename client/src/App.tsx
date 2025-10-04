import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import Login from "./pages/login";
import History from "./pages/history";
import Profile from "./pages/profile";
import NotFound from "./pages/notefound";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
        <div className="bg-gradient-to-br from-black via-gray-900 to-black w-screen h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </>
  )
}

export default App
