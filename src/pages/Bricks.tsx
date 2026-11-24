/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, WhatsappLogo, CaretDown, CaretUp,
  Flask, Thermometer, Drop, Hammer, Ruler, CalendarCheck,
  Ruler as RulerIcon, Stack, Palette, Barbell,
  Square, CurrencyInr
} from '@phosphor-icons/react';
import { IMAGES } from '../config/images';
import WhatsAppIcon from '../components/WhatsAppIcon';
import '../styles/Bricks.css';
import '../styles/Pavers.css';

export default function Bricks() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const uses = [
    { title: 'House walls', image: IMAGES.unfinishedHouse, desc: 'Superior thermal insulation keeps rooms cooler.' },
    { title: 'Boundary walls', image: IMAGES.boundaryWall, desc: 'High density and straight edges for clean perimeters.' },
    { title: 'Partition walls', image: IMAGES.palletBlocks, desc: 'Lightweight yet robust interior wall structures.' },
    { title: 'Commercial structures', image: IMAGES.storageYard, desc: 'Reliable multi-story masonry load-bearing strength.' }
  ];

  const specs = [
    { label: 'Standard Dimensions', value: '[EDIT: e.g. 230mm x 110mm x 75mm]', icon: <RulerIcon size={18} weight="fill" /> },
    { label: 'Compressive Strength', value: 'High strength class [EDIT]', icon: <Barbell size={18} weight="fill" /> },
    { label: 'Surface Finish', value: 'Smooth parallel faces, straight sharp edges [EDIT]', icon: <Palette size={18} weight="fill" /> },
    { label: 'Water Absorption', value: 'Low absorption rate for damp prevention [EDIT]', icon: <Drop size={18} weight="fill" /> },
    { label: 'Weight & Density', value: 'Optimized density for structural efficiency [EDIT]', icon: <Stack size={18} weight="fill" /> }
  ];

  const usageSteps = [
    { title: 'Keep bricks damp', desc: 'Lightly sprinkle bricks with clean water before laying so they do not absorb moisture directly from the mortar.', icon: <Drop size={22} weight="fill" /> },
    { title: 'Correct mortar mix', desc: 'Prepare balanced cement-sand mortar as recommended by your site engineer for optimal bonding.', icon: <Hammer size={22} weight="fill" /> },
    { title: 'Proper alignment', desc: 'Leverage the straight factory edges and plumb line guides to lay perfectly level masonry courses.', icon: <Ruler size={22} weight="fill" /> },
    { title: 'Curing process', desc: 'Cure completed brick masonry walls with water curing for at least 7 days to reach peak compressive strength [EDIT].', icon: <CalendarCheck size={22} weight="fill" /> }
  ];

  const faqs = [
    {
      q: 'Do fly ash bricks require less plastering mortar?',
      a: 'Yes, because of their uniform rectangular geometry and smooth flat faces, masons use significantly less mortar during wall construction.'
    },
    {
      q: 'Are fly ash bricks better insulated than red clay bricks?',
      a: 'Fly ash bricks absorb less radiant solar heat, keeping interior living spaces noticeably cooler during hot Madhya Pradesh summers.'
    },
    {
      q: 'Should fly ash bricks be soaked in water before laying?',
      a: 'Unlike red clay bricks that require heavy soaking, fly ash bricks only need to be lightly sprinkled or dampened to prevent rapid moisture absorption from mortar.'
    }
  ];

  const whatsappUrl = "https://wa.me/919009612003?text=Hello%20Yadav%20Construction,%20I%20would%20like%20to%20order%20fly%20ash%20bricks.";

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1>Precision Fly Ash <span style={{color: 'var(--color-terracotta)'}}>Bricks</span></h1>
            <p>High-density walling bricks manufactured with exact geometric tolerances. Supplied across Dinara and nearby construction sites.</p>
            <Link to="/contact" className="btn-terracotta">
              Request Brick Quote <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className="cutout-stack-box">
            <img src={IMAGES.warmGreyTexture} alt="Concrete Texture" className="cutout-bg" />
            <img src={IMAGES.palletBlocks} alt="Fly Ash Brick Pallet" className="cutout-emblem" style={{objectFit: 'cover', width: '100%', height: '100%', opacity: 0.9}} />
          </div>
        </div>
      </section>

      {/* What they are & where used */}
      <section className="uses-section">
        <div className="uses-container">
          <div className="uses-header">
            <h2>What are fly ash bricks & where are they <span style={{color: 'var(--color-terracotta)'}}>used</span></h2>
          </div>
          <div style={{marginBottom: '4rem'}}>
            <div className="bricks-info-grid">
              <div className="bricks-info-card">
                <div className="terracotta-icon-box" style={{marginBottom: '1rem'}}>
                  <Flask size={24} weight="fill" />
                </div>
                <h3>Composition & Manufacture</h3>
                <p>Fly ash bricks are manufactured primarily from industrial fly ash blended with sand, lime, and cement under heavy hydraulic pressure. This produces a dense building unit that compares favorably to traditional red clay bricks [EDIT].</p>
              </div>
              <div className="bricks-info-card">
                <div className="terracotta-icon-box" style={{marginBottom: '1rem'}}>
                  <Thermometer size={24} weight="fill" />
                </div>
                <h3>Thermal & Structural Benefits</h3>
                <p>The dense crystalline matrix provides good sound insulation, lower thermal conductivity, and zero efflorescence. Masons appreciate the crisp square corners that eliminate uneven wall alignment.</p>
              </div>
            </div>
          </div>

          <h3 style={{fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem'}}>Where they are <span style={{color: 'var(--color-terracotta)'}}>used</span></h3>
          <div className="uses-grid">
            {uses.map((u, idx) => (
              <div key={idx} className="use-tile">
                <img src={u.image} alt={u.title} loading="lazy" />
                <div className="use-tile-overlay" />
                <div className="use-tile-content">
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose them */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-sticky-col">
            <h2>Why choose Yadav fly ash <span style={{color: 'var(--color-terracotta)'}}>bricks</span></h2>
            <p>Consistent quality and rigid strength for residential and commercial brickwork.</p>
          </div>
          <div className="why-blocks-col">
            <div className="why-block">
              <div className="why-block-header">
                <Square size={26} weight="fill" className="why-block-icon" />
                <h3>Uniform size & smooth finish</h3>
              </div>
              <p>Every brick is machine-pressed to exact dimensions, eliminating the size variations common in traditional kiln-fired clay bricks.</p>
            </div>
            <div className="why-block">
              <div className="why-block-header">
                <Barbell size={26} weight="fill" className="why-block-icon" />
                <h3>High load-bearing strength</h3>
              </div>
              <p>Superior compressive ratings ensure structural safety without crushing under weight [EDIT].</p>
            </div>
            <div className="why-block">
              <div className="why-block-header">
                <CurrencyInr size={26} weight="bold" className="why-block-icon" />
                <h3>Cost-saving plaster efficiency</h3>
              </div>
              <p>Smooth wall surfaces require thinner plaster layers, saving considerable cement and labor costs during finishing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Options spec list */}
      <section className="specs-section">
        <div className="specs-container">
          <div className="specs-header">
            <h2>Fly Ash Brick <span style={{color: 'var(--color-terracotta)'}}>Specifications</span></h2>
          </div>
          <div className="specs-table">
            {specs.map((spec, idx) => (
              <div key={idx} className="spec-row">
                <span className="spec-label" style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <div className="terracotta-icon-box" style={{margin: 0, width: 32, height: 32, minWidth: 32}}>
                    {spec.icon}
                  </div>
                  {spec.label}
                </span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use them */}
      <section className="laid-section">
        <div className="laid-container">
          <div className="laid-header">
            <h2>How to use fly ash bricks <span style={{color: 'var(--color-terracotta)'}}>correctly</span></h2>
          </div>
          <div className="laid-grid">
            {usageSteps.map((step, idx) => (
              <div key={idx} className="laid-card">
                <div className="terracotta-icon-box" style={{marginBottom: '1rem'}}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Fly Ash Brick <span style={{color: 'var(--color-terracotta)'}}>FAQs</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-question" 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <CaretUp size={20} /> : <CaretDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <img src={IMAGES.unfinishedHouse} alt="Fly Ash Brick Construction" className="closing-cta-bg" />
        <div className="closing-cta-content">
          <h2>Building strong walls starts here.</h2>
          <p>Order high-density fly ash bricks with prompt delivery from Yadav Construction & Builders.</p>
          <div className="closing-cta-actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-terracotta">
              <WhatsAppIcon size={22} /> WhatsApp Us
            </a>
            <a href="tel:9009612003" className="btn-outline-light">
              <Phone size={20} weight="fill" /> Call 9009612003
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
