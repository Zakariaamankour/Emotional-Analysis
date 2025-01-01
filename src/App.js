import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardGraphs from './components/Dashboard/DashboardGraphs';
 import Settings from './components/Settings/Settings';
import EmotionalAnalysis from './components/EmotionalAnalysis/EmotionalAnalysis';
 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-settings/*" element={<Settings />} />
          <Route path="/emotional-analysis/*" element={<EmotionalAnalysis />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
