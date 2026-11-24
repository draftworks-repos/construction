/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, InstagramLogo } from '@phosphor-icons/react';
import { REELS } from '../config/reels';
import ReelModal from './ReelModal';
import '../styles/Reels.css';

export default function ReelsSection() {
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);

  const instagramUrl = "https://instagram.com/yadavv_construction";

  return (
    <section className="reels-section">
      <div className="reels-container">
        <div className="reels-header-row">
          <div className="reels-header-left">
            <h2>See it on <span style={{color: 'var(--color-terracotta)'}}>site</span></h2>
            <p>Real video clips from our active paver laying and brick construction sites.</p>
          </div>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-instagram">
            <InstagramLogo size={20} weight="fill" /> Follow @yadavv_construction
          </a>
        </div>

        <div className="reels-grid">
          {REELS.map((reel, idx) => (
            <div 
              key={reel.id} 
              className="reel-card"
              onClick={() => setActiveReelIndex(idx)}
            >
              <video
                src={reel.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="reel-media"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
              <img src={reel.poster} alt={reel.title} className="reel-poster" loading="lazy" />
              <div className="reel-play-icon">
                <Play size={24} weight="fill" />
              </div>
              <div className="reel-overlay">
                <div className="reel-info">
                  <h3>{reel.title}</h3>
                  <p>{reel.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ReelModal
        currentIndex={activeReelIndex}
        onClose={() => setActiveReelIndex(null)}
        onNavigate={(idx) => setActiveReelIndex(idx)}
      />
    </section>
  );
}
