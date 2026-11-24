/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChatCircleDots, X, WhatsappLogo, PhoneCall } from '@phosphor-icons/react';
import '../styles/FloatingChat.css';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const whatsappUrl = "https://wa.me/919009612003?text=Hello%20Yadav%20Construction,%20I%20would%20like%20to%20inquire%20about%20your%20building%20materials.";

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div 
      className="floating-chat-container" 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`chat-options-popup ${isOpen ? 'open' : ''}`}>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="chat-option-item whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <WhatsappLogo size={22} weight="fill" />
          <span>WhatsApp</span>
        </a>
        <a 
          href="tel:9009612003" 
          className="chat-option-item call"
          aria-label="Call Yadav Construction"
        >
          <PhoneCall size={22} weight="fill" />
          <span>Call Now</span>
        </a>
      </div>

      <button 
        className="floating-chat-main-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        {isOpen ? <X size={26} weight="bold" /> : <ChatCircleDots size={28} weight="fill" />}
      </button>
    </div>
  );
}
