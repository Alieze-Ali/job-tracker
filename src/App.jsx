import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {

return (
  <Router>
    <div>
      <h1>Job Tracker</h1>
      <nav>
        <Link to="/login">Login</Link><br></br>
        <Link to="/create-account">Create Account</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  </Router>
);

}

export default App
