 


//ai integration se pahle acha kam kar rha tha
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile"; 
import AIRephrase from "./pages/AIRephrase";
import AboutUs from "./pages/AboutUs"; 
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ai-rephrase" element={<AIRephrase />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Add more routes as needed */}
        
      </Routes>
    </Router>
  );
}

export default App; 


 