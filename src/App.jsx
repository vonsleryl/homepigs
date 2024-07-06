import React from 'react';
import Navbar from './components/Navbar'; // Adjust path as needed
import HeroSection from './components/HeroSection'; // Adjust path as needed
import CoursesPage from './components/CoursesPage'; // Adjust path as needed
import Footer from './components/Footer'; // Adjust path as needed

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
