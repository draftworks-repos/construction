/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { REELS } from '../config/reels';
import '../styles/Reels.css';

interface ReelModalProps {
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function ReelModal({ currentIndex, onClose, onNavigate }: ReelModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex !== null) {
        onNavigate((currentIndex - 1 + REELS.length) % REELS.length);
      }
      if (e.key === 'ArrowRight' && currentIndex !== null) {
        onNavigate((currentIndex + 1) % REELS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNavigate]);

  if (currentIndex === null) return null;

  const reel = REELS[currentIndex];

  return (
    <div className="reel-modal-overlay" onClick={onClose}>
      <div className="reel-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="reel-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={22} weight="bold" />
        </button>

        <button 
          className="reel-modal-nav prev" 
          onClick={() => onNavigate((currentIndex - 1 + REELS.length) % REELS.length)}
          aria-label="Previous reel"
        >
          <CaretLeft size={24} weight="bold" />
        </button>

        <button 
          className="reel-modal-nav next" 
          onClick={() => onNavigate((currentIndex + 1) % REELS.length)}
          aria-label="Next reel"
        >
          <CaretRight size={24} weight="bold" />
        </button>

        <video
          src={reel.video}
          poster={reel.poster}
          controls
          autoPlay
          playsInline
          className="reel-modal-video"
        />
      </div>
    </div>
  );
}
