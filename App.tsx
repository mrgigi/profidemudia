import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Results from './pages/Results';
import Talks from './pages/Talks';
import OngoingResearch from './pages/OngoingResearch';
import Publications from './pages/Publications';
import GenericPage from './pages/GenericPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/ongoing-research" element={<OngoingResearch />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;