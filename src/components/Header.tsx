/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X, Phone } from '@phosphor-icons/react';
import { IMAGES } from '../config/images';
import '../styles/Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="brand-link">
            <img src={IMAGES['logo-mark']} alt="Yadav Logo" className="brand-logo-mark" />
            <div className="brand-text-group">
              <span className="brand-wordmark">YADAV</span>
              <span className="brand-subtitle">Construction & Builders</span>
            </div>
          </Link>

          <nav className="header-nav">
            <Link to="/pavers" className={`nav-link ${location.pathname === '/pavers' ? 'active' : ''}`}>Paver Blocks</Link>
            <Link to="/bricks" className={`nav-link ${location.pathname === '/bricks' ? 'active' : ''}`}>Fly Ash Bricks</Link>
            <Link to="/guide" className={`nav-link ${location.pathname === '/guide' ? 'active' : ''}`}>Project Guide</Link>
            <Link to="/work" className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`}>Our Work</Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            <Link to="/contact" className="quote-btn">Get a Quote</Link>
          </nav>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <List size={28} weight="bold" />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link to="/" className="brand-link">
            <img src={IMAGES['logo-mark']} alt="Yadav Logo" className="brand-logo-mark" />
            <div className="brand-text-group">
              <span className="brand-wordmark" style={{color: 'var(--color-text)'}}>YADAV</span>
              <span className="brand-subtitle" style={{color: 'var(--color-text-muted)'}}>Construction & Builders</span>
            </div>
          </Link>
          <button 
            className="drawer-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={28} weight="bold" />
          </button>
        </div>

        <nav className="drawer-nav">
          <Link to="/" className="drawer-link">Home</Link>
          <Link to="/pavers" className="drawer-link">Paver Blocks</Link>
          <Link to="/bricks" className="drawer-link">Fly Ash Bricks</Link>
          <Link to="/guide" className="drawer-link">Project Guide</Link>
          <Link to="/work" className="drawer-link">Our Work</Link>
          <Link to="/contact" className="drawer-link">Contact & Quote</Link>
        </nav>

        <div className="drawer-footer">
          <div className="drawer-contact-item">Dinara, Madhya Pradesh</div>
          <a href="tel:9009612003" className="drawer-contact-item" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
            <Phone size={18} /> 9009612003
          </a>
        </div>
      </div>
    </>
  );
}
