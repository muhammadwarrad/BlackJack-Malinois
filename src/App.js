import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DogsList from './components/DogsList';
import DogProfile from './components/DogProfile';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Footer />
          </>
        } />
        
        <Route path="/dogs" element={
          <>
            <DogsList />
            <Footer />
          </>
        } />
        
        <Route path="/dog/:id" element={
          <>
            <DogProfile />
            <Footer />
          </>
        } />
        
        <Route path="/training" element={
          <>
            <Training />
            <Footer />
          </>
        } />
        
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />

        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
