/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import '../styles/LightboxModal.css';

interface LightboxModalProps {
  image: { src: string; title: string; location: string } | null;
  onClose: () => void;
}

export default function LightboxModal({ image, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image-wrapper">
          <img src={image.src} alt={image.title} className="lightbox-image" />
        </div>
        <div className="lightbox-details">
          <div className="lightbox-caption">
            <h3>{image.title}</h3>
            <p>{image.location}</p>
          </div>
          <button className="lightbox-close" onClick={onClose} aria-label="Close modal">
            <X size={20} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
