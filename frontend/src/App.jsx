import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Log from "./pages/Log";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resources from "./pages/Resources";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/AuthContext";

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() { 

  return (
    <div className="vh-100">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/log" element={<Log />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>      
          <Footer />    
        </BrowserRouter>
      </AuthProvider>
    </div>    
  );
}

export default App
