import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Catalogue from './pages/Catalogue';
import Kart from './pages/Kart';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/kart" element={<Kart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
