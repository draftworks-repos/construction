/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoadHorizon, Car, Wall, Truck, ArrowRight } from '@phosphor-icons/react';
import { IMAGES } from '../config/images';
import LightboxModal from '../components/LightboxModal';
import ReelsSection from '../components/ReelsSection';
import '../styles/Work.css';
import '../styles/Pavers.css';

export default function Work() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; location: string } | null>(null);

  const renderBentoTile = (item: { src: string; title: string; location: string; size: string }, idx: number) => (
    <div 
      key={idx} 
      className={`bento-tile ${item.size}`}
      onClick={() => setSelectedImage(item)}
    >
      <img src={item.src} alt={item.title} loading="lazy" />
      <div className="bento-overlay">
        <h4>{item.title}</h4>
        <p>{item.location}</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero styled like Pavers/Bricks */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1>Our Work in the <span style={{color: 'var(--color-terracotta)'}}>Field</span></h1>
            <p>Explore our completed installations and material deliveries across Dinara and nearby regions. Click any tile to inspect in detail.</p>
            <Link to="/contact" className="btn-terracotta" style={{marginTop: '1.75rem'}}>
              Request a Quote <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className="cutout-stack-box">
            <img src={IMAGES.warmGreyTexture} alt="Concrete Texture" className="cutout-bg" />
            <img src={IMAGES.modernHouseEntrance} alt="Work Showcase" className="cutout-emblem" style={{objectFit: 'cover', width: '100%', height: '100%', opacity: 0.95}} />
          </div>
        </div>
      </section>

      {/* 1. Driveways & courtyards */}
      <div className="bento-section">
        <div className="bento-section-header">
          <div className="bento-title-row">
            <RoadHorizon size={32} weight="fill" className="bento-title-icon" />
            <h2>Driveways & <span style={{color: 'var(--color-terracotta)'}}>courtyards</span></h2>
          </div>
          <p className="bento-desc">Heavy-duty interlocking paver installations built for vehicle loads and pristine appearance.</p>
        </div>
        <div className="bento-grid">
          {IMAGES.bentoDriveways.map((item, idx) => renderBentoTile(item, idx))}
        </div>
      </div>

      {/* 2. Parking & footpaths */}
      <div className="bento-section">
        <div className="bento-section-header">
          <div className="bento-title-row">
            <Car size={32} weight="fill" className="bento-title-icon" />
            <h2>Parking & <span style={{color: 'var(--color-terracotta)'}}>footpaths</span></h2>
          </div>
          <p className="bento-desc">Commercial parking grids and smooth pedestrian walkways engineered for high foot traffic.</p>
        </div>
        <div className="bento-grid">
          {IMAGES.bentoParking.map((item, idx) => renderBentoTile(item, idx))}
        </div>
      </div>

      {/* 3. Reels from the field */}
      <div className="bento-section" style={{padding: 0}}>
        <ReelsSection />
      </div>

      {/* 4. Walls & construction */}
      <div className="bento-section">
        <div className="bento-section-header">
          <div className="bento-title-row">
            <Wall size={32} weight="fill" className="bento-title-icon" />
            <h2>Walls & <span style={{color: 'var(--color-terracotta)'}}>construction</span></h2>
          </div>
          <p className="bento-desc">Precision fly ash brick masonry and perimeter boundary walls constructed across Madhya Pradesh.</p>
        </div>
        <div className="bento-grid">
          {IMAGES.bentoWalls.map((item, idx) => renderBentoTile(item, idx))}
        </div>
      </div>

      {/* 5. Yard & deliveries */}
      <div className="bento-section">
        <div className="bento-section-header">
          <div className="bento-title-row">
            <Truck size={32} weight="fill" className="bento-title-icon" />
            <h2>Yard & <span style={{color: 'var(--color-terracotta)'}}>deliveries</span></h2>
          </div>
          <p className="bento-desc">Our Dinara stock yard operations and prompt tractor-trailer material dispatches to client sites.</p>
        </div>
        <div className="bento-grid">
          {IMAGES.bentoYard.map((item, idx) => renderBentoTile(item, idx))}
        </div>
      </div>

      <LightboxModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
