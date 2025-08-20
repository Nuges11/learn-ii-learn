import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Courses from "./Courses";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="font-bold text-green-800 text-xl">Learn ii Learn</div>
        <div className="space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/mentorship">Mentorship</Link>
          <Link to="/simulations">Simulations</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
