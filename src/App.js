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
import BioOptimiserStart from './components/BioOptimiser/BioOptimiserStart';
import BioOptimiser from './components/BioOptimiser/BioOptimiser';
import TrinityStart from './components/Trinity/TrinityStart';
import Trinity from './components/Trinity/Trinity';


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
          <Route path="/bio-optimiser-start" element={<BioOptimiserStart />} />
          <Route path="/bio-optimiser" element={<BioOptimiser />} />
          <Route path="/trinity-start" element={<TrinityStart />} />
          <Route path="/trinity" element={<Trinity />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
