
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="p-4 bg-green-800 text-white">
          <div className="container mx-auto flex justify-between">
            <div className="font-bold">Learn ii Learn</div>
            <div className="space-x-4">
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

function Home(){ return <div><h1 className="text-3xl font-bold">Welcome to Learn ii Learn</h1><p className="mt-4">Placeholder courses and content.</p></div> }
function Courses(){ return <div><h2 className="text-2xl font-semibold">Courses (placeholders)</h2></div> }
function Dashboard(){ return <div><h2 className="text-2xl font-semibold">Dashboard (role-based views)</h2></div> }
