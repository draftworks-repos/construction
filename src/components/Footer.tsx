/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, InstagramLogo, Clock } from '@phosphor-icons/react';
import '../styles/Footer.css';

export default function Footer() {
  const whatsappUrl = "https://wa.me/919009612003?text=Hello%20Yadav%20Construction,%20I%20have%20an%20inquiry.";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Yadav Construction & <span style={{color: 'var(--color-terracotta)'}}>Builders</span></h3>
          <p className="footer-tagline">Strong • Durable • Affordable</p>
          <div className="footer-location" style={{marginBottom: '0.75rem'}}>
            <MapPin size={18} weight="fill" color="var(--color-terracotta)" /> Dinara, Madhya Pradesh [EDIT PIN: 473551]
          </div>
          <div className="footer-location">
            <Clock size={18} weight="fill" color="var(--color-terracotta)" /> Working Hours: Mon–Sun: 8:00 AM – 8:00 PM [EDIT]
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/pavers">Paver Blocks</Link></li>
            <li><Link to="/bricks">Fly Ash Bricks</Link></li>
            <li><Link to="/guide">Project Guide</Link></li>
            <li><Link to="/work">Our Work</Link></li>
            <li><Link to="/contact">Contact & Quote</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul className="footer-links">
            <li><Link to="/pavers">Zigzag Pavers</Link></li>
            <li><Link to="/pavers">Square & Cobble Pavers</Link></li>
            <li><Link to="/bricks">Fly Ash Bricks</Link></li>
            <li><Link to="/guide">Project Guide</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Direct Connect</h4>
          <div className="footer-contact-info">
            <div>Phone / WhatsApp: <a href="tel:9009612003">9009612003</a></div>
            <div>WhatsApp Chat: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Message Us</a></div>
            <div>Instagram: <a href="https://instagram.com/yadavv_construction" target="_blank" rel="noopener noreferrer">@yadavv_construction</a></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} Yadav Construction & Builders, Dinara, MP. All rights reserved.</div>
        <div className="footer-bottom-links">
          <Link to="/contact">Privacy & Terms</Link>
          <Link to="/contact">Supply Disclaimer [EDIT]</Link>
        </div>
      </div>
    </footer>
  );
}
