import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Corousel from "./components/Corousel";
import Footer from "./components/Footer";
import Signup from "./components/Signup"; 
import Login from "./components/Login";
import Admin from "./components/Admin";
import Donor from "./components/Donor";
import Agent from "./components/Agent";
import Orphanages from "./components/Orphanages";
import DonorDashboard from "./components/DonorDashboard";

function Home() {
  return (
    <div>
      
      <Corousel /> {/* ✅ Only on home page */}
      <Footer />   {/* ✅ Only on home page */}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* ✅ Now on a separate page */}
       <Route path="/orphanages" element={<Orphanages />} />
       <Route path="/donor-dashboard" element={<DonorDashboard />} />



      </Routes>
    </Router>
  );
}

export default App;
