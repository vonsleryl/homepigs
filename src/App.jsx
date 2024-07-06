import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesPage from './components/CoursesPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
