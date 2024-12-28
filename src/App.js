import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
 
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
