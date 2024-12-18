import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold">Crime.si</span>
              <span className="ml-4 text-gray-400">© 2024 All rights reserved</span>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white mx-3">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white mx-3">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;