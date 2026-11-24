/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, WhatsappLogo,
  Car, Garage, PersonSimpleWalk, Plant, House, Wall,
  RoadHorizon
} from '@phosphor-icons/react';
import { IMAGES } from '../config/images';
import WhatsAppIcon from '../components/WhatsAppIcon';
import '../styles/Guide.css';
import '../styles/Home.css';
import '../styles/Pavers.css';

export default function Guide() {
  const [activeProject, setActiveProject] = useState('driveway');

  const projects = [
    {
      id: 'driveway',
      title: 'Driveway',
      icon: <Car size={20} weight="fill" />,
      product: 'Heavy-Duty Paver Blocks (60mm / 80mm)',
      image: IMAGES.modernDrivewayLush,
      description: 'Engineered to withstand heavy vehicle loads without cracking or sinking. Designed for smooth rolling tyres and pristine long-term curb appeal.'
    },
    {
      id: 'parking',
      title: 'Parking area',
      icon: <Garage size={20} weight="fill" />,
      product: 'Interlocking Zigzag Pavers',
      image: IMAGES.mottledGrid,
      description: 'Distributed pressure interlocking patterns ensure commercial and residential vehicle parking spaces remain stable under continuous daily pressure.'
    },
    {
      id: 'footpath',
      title: 'Footpath',
      icon: <PersonSimpleWalk size={20} weight="fill" />,
      product: 'Standard Surface Pavers & Tiles',
      image: IMAGES.sunlitGardenPathway,
      description: 'Clean slip-resistant walking surfaces that drain rainwater efficiently while providing a polished, elegant look for pathways and walkways.'
    },
    {
      id: 'garden',
      title: 'Garden',
      icon: <Plant size={20} weight="fill" />,
      product: 'Textured Landscaping Pavers',
      image: IMAGES.modernGardenWalkway,
      description: 'Harmonizes natural greenery with sturdy concrete structures. Perfect for winding garden trails, courtyards, and patio seating areas.'
    },
    {
      id: 'housewall',
      title: 'House wall',
      icon: <House size={20} weight="fill" />,
      product: 'Precision Fly Ash Bricks',
      image: IMAGES.unfinishedHouse,
      description: 'Uniform dimensions and superior thermal insulation keep interiors cooler in summer. Reduces mortar consumption and plastering cost.'
    },
    {
      id: 'boundarywall',
      title: 'Boundary wall',
      icon: <Wall size={20} weight="fill" />,
      product: 'High-Density Fly Ash Bricks',
      image: IMAGES.boundaryWall,
      description: 'Provides rock-solid perimeter security with excellent weather resistance. Straight edges make alignment effortless for masons.'
    }
  ];

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];
  const whatsappUrl = "https://wa.me/919009612003?text=Hello%20Yadav%20Construction,%20I%20need%20guidance%20for%20my%20project.";

  return (
    <div>
      {/* Hero Header styled like Pavers/Bricks */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1>Project Material <span style={{color: 'var(--color-terracotta)'}}>Guide</span></h1>
            <p>Not sure which material fits your construction needs? Explore our interactive selector and material comparison below to make the right choice.</p>
            <Link to="/contact" className="btn-terracotta">
              Get Material Quote <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className="cutout-stack-box">
            <img src={IMAGES.warmGreyTexture} alt="Concrete Texture" className="cutout-bg" />
            <img src={IMAGES.paverEmblem} alt="Material Emblem" className="cutout-emblem" />
          </div>
        </div>
      </section>

      {/* Project Picker */}
      <section className="picker-section" style={{paddingTop: '2rem'}}>
        <div className="picker-container">
          <div className="picker-header">
            <h2>What are you <span style={{color: 'var(--color-terracotta)'}}>building</span>?</h2>
            <div className="picker-tabs">
              {projects.map(p => (
                <button
                  key={p.id}
                  className={`picker-tab ${activeProject === p.id ? 'active' : ''}`}
                  onClick={() => setActiveProject(p.id)}
                >
                  {p.icon} {p.title}
                </button>
              ))}
            </div>
          </div>

          <div className="picker-display-panel">
            <div className="picker-image-box">
              <img src={currentProject.image} alt={currentProject.title} loading="lazy" />
            </div>
            <div className="picker-info">
              <span className="picker-recommended">Recommended: {currentProject.product}</span>
              <h3>{currentProject.title} Solutions</h3>
              <p>{currentProject.description}</p>
              <Link to="/contact" className="btn-terracotta">
                Ask for a quote <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column comparison */}
      <section className="comparison-section">
        <div className="comparison-container">
          <div className="comparison-header">
            <h2>Material <span style={{color: 'var(--color-terracotta)'}}>Comparison</span></h2>
          </div>
          <div className="comparison-grid">
            <div className="comparison-card">
              <div className="terracotta-icon-box" style={{marginBottom: '1rem'}}>
                <RoadHorizon size={24} weight="fill" />
              </div>
              <h3>Pavers are for the ground</h3>
              <p>Designed specifically to handle horizontal loads, rolling vehicle weight, continuous foot traffic, and efficient rainwater drainage across driveways, courtyards, and pathways.</p>
            </div>
            <div className="comparison-card">
              <div className="terracotta-icon-box" style={{marginBottom: '1rem'}}>
                <Wall size={24} weight="fill" />
              </div>
              <h3>Fly ash bricks are for walls</h3>
              <p>Engineered for vertical load-bearing strength, precise mortar bonding, thermal insulation, and multi-story structural integrity across house walls and boundary enclosures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing prompt */}
      <section className="guide-closing">
        <h2>Not sure? Message <span style={{color: 'var(--color-terracotta)'}}>us</span>.</h2>
        <p style={{color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem'}}>Send us your project details on WhatsApp for expert material recommendations.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-terracotta" style={{display: 'inline-flex'}}>
          <WhatsAppIcon size={22} /> Message on WhatsApp
        </a>
      </section>
    </div>
  );
}
