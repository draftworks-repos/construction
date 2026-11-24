/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Lock } from '@phosphor-icons/react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import Home from './pages/Home';
import Pavers from './pages/Pavers';
import Bricks from './pages/Bricks';
import Guide from './pages/Guide';
import Work from './pages/Work';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pavers" element={<Pavers />} />
          <Route path="/bricks" element={<Bricks />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingChat />
      <div className="mobile-lock-overlay" aria-label="Locked on mobile and tablet screens">
        <Lock size={64} weight="fill" className="lock-icon" />
        <span className="lock-text">Locked</span>
      </div>
    </Router>
  );
}
