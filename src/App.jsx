import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import SOSModal from './components/SOSModal';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Architecture from './pages/Architecture';
import MobileApp from './pages/MobileApp';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Animated Routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/features"
          element={
            <PageWrapper>
              <Features />
            </PageWrapper>
          }
        />
        <Route
          path="/architecture"
          element={
            <PageWrapper>
              <Architecture />
            </PageWrapper>
          }
        />
        <Route
          path="/mobile-app"
          element={
            <PageWrapper>
              <MobileApp />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen relative ${darkMode ? 'dark' : ''}`}>
        {/* Background Effects */}
        <BackgroundEffects />

        {/* Navigation */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content */}
        <main className="relative z-10">
          <ScrollToTop />
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating SOS Demo Button */}
        <SOSModal />
      </div>
    </Router>
  );
}

export default App;
