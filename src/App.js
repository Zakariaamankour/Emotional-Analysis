import React, { useEffect, useState } from 'react';
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
import Faqs from './components/Faqs';
import OurImpact from './components/OurImpact';
import Blogs from './components/Blogs';
import Support from './components/Support';
import OurStory from './components/OurStory';
import PricingComparaison from './components/Pricing/PricingComparaison';
import ElevatePricing from './components/Pricing/ElevatePricing';
import EvolvePricing from './components/Pricing/EvolvePricing';
import CorePricing from './components/Pricing/CorePricing';
import BasicPricing from './components/Pricing/BasicPricing';


function App() {

   const [isPricingPage, setIsPricingPage] = useState(false);

  useEffect(() => {
    // Check if the current URL contains "pricing"
    setIsPricingPage(window.location.pathname.includes('pricing'));
  }, [window.location]); // Runs whenever the URL changes


  return (
    <Router>
      <div className={`App ${isPricingPage ? 'pricing-background' : ''}`}>
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
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/pricing-comparaison" element={<PricingComparaison />} />
          <Route path="/elevate-pricing" element={<ElevatePricing />} />
          <Route path="/evolve-pricing" element={<EvolvePricing />} />
          <Route path="/core-pricing" element={<CorePricing />} />
          <Route path="/basic-pricing" element={<BasicPricing />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
