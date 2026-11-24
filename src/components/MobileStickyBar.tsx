/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, WhatsappLogo } from '@phosphor-icons/react';
import '../styles/MobileStickyBar.css';

export default function MobileStickyBar() {
  const whatsappUrl = "https://wa.me/919009612003?text=Hello%20Yadav%20Construction,%20I%20would%20like%20to%20inquire%20about%20paver%20blocks%20and%20bricks.";

  return (
    <div className="mobile-sticky-bar">
      <a href="tel:9009612003" className="mobile-sticky-btn call-btn">
        <Phone size={20} weight="fill" /> Call Now
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-sticky-btn whatsapp-btn">
        <WhatsappLogo size={20} weight="fill" /> WhatsApp
      </a>
    </div>
  );
}
