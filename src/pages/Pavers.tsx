/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  WhatsappLogo,
  CaretDown,
  CaretUp,
  Ruler,
  Stack,
  Palette,
  Barbell,
  Drop,
  Shovel,
  GridFour,
  Hammer,
  Wrench,
  ArrowsClockwise,
  Lightning,
} from "@phosphor-icons/react";
import { IMAGES } from "../config/images";
import WhatsAppIcon from "../components/WhatsAppIcon";
import "../styles/Pavers.css";

export default function Pavers() {
  const [activePattern, setActivePattern] = useState("herringbone");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const patterns = [
    {
      id: "herringbone",
      name: "Herringbone",
      image: IMAGES.herringbonePavers,
      appearance:
        "V-shaped interlocking zigzag arrangement that locks blocks tightly together.",
      suitability:
        "Best for high-traffic driveways, commercial yards, and sloped entrances requiring maximum load distribution.",
    },
    {
      id: "runningbond",
      name: "Running bond",
      image: IMAGES.staggeredPavers,
      appearance:
        "Staggered parallel rows giving a clean, classic brick-work visual texture.",
      suitability:
        "Ideal for footpaths, garden pathways, and residential patios.",
    },
    {
      id: "basketweave",
      name: "Basket weave",
      image: IMAGES.basketWeavePavers,
      appearance:
        "Pairs of rectangular blocks placed horizontally and vertically in alternating squares.",
      suitability:
        "Suited for decorative garden courtyards and pedestrian areas.",
    },
    {
      id: "squaregrid",
      name: "Square grid",
      image: IMAGES.mottledGrid,
      appearance:
        "Symmetrical grid alignment creating geometric rhythm and order.",
      suitability:
        "Recommended for parking slots, courtyards, and minimalist modern landscaping.",
    },
  ];

  const currentPattern =
    patterns.find((p) => p.id === activePattern) || patterns[0];

  const uses = [
    {
      title: "Driveway",
      image: IMAGES.modernDrivewayLush,
      desc: "Built for frequent vehicle rotation and weight.",
    },
    {
      title: "Parking Area",
      image: IMAGES.modernGardenWalkway,
      desc: "Interlocking strength under heavy static load.",
    },
    {
      title: "Footpath",
      image: IMAGES.sunlitGardenPathway,
      desc: "Clean slip-resistant walkways for daily foot traffic.",
    },
    {
      title: "Garden",
      image: IMAGES.gardenPavers,
      desc: "Seamless integration with natural soil and landscaping.",
    },
  ];

  const specs = [
    {
      label: "Available Sizes",
      value: "[EDIT: e.g. 200mm x 100mm standard]",
      icon: <Ruler size={18} weight="fill" />,
    },
    {
      label: "Thickness Options",
      value: "60mm (Residential) & 80mm (Commercial) [EDIT]",
      icon: <Stack size={18} weight="fill" />,
    },
    {
      label: "Color Varieties",
      value: "Grey, Red Terracotta, Dual Tone Mottled [EDIT]",
      icon: <Palette size={18} weight="fill" />,
    },
    {
      label: "Compressive Strength Grade",
      value: "M30 / M35 High Density [EDIT]",
      icon: <Barbell size={18} weight="fill" />,
    },
    {
      label: "Water Absorption Rate",
      value: "Less than 6% [EDIT]",
      icon: <Drop size={18} weight="fill" />,
    },
  ];

  const laidSteps = [
    {
      title: "Prepare and compact base",
      desc: "Excavate soil, lay crushed stone aggregate, and compact thoroughly to establish a rigid sub-base [EDIT].",
      icon: <Shovel size={22} weight="fill" />,
    },
    {
      title: "Spread bedding sand",
      desc: "Screed a uniform layer of clean coarse sand across the compacted base as a cushion layer.",
      icon: <Stack size={22} weight="fill" />,
    },
    {
      title: "Lay the blocks",
      desc: "Place paver blocks tightly together in your chosen pattern, tapping them securely into the sand bed.",
      icon: <GridFour size={22} weight="fill" />,
    },
    {
      title: "Fill joints and compact",
      desc: "Sweep fine jointing sand across the surface into all crevices, then run a plate compactor to lock them in.",
      icon: <Hammer size={22} weight="fill" />,
    },
  ];

  const faqs = [
    {
      q: "Do paver blocks crack under heavy truck loading?",
      a: "When laid correctly on a compacted sub-base with proper 80mm thickness, our hydraulic-pressed pavers withstand heavy commercial trucks without cracking.",
    },
    {
      q: "How do you prevent weed growth between paver joints?",
      a: "Filling joints completely with fine dry silica sand and compacting locks the joints tight, minimizing weed seeding.",
    },
    {
      q: "Are your paver blocks slippery during heavy monsoon rain?",
      a: "No, our textured concrete surface finish maintains excellent slip-resistance even when completely wet.",
    },
  ];

  const whatsappUrl =
    "https://wa.me/919009612003?text=Hello%20Yadav%20Construction,%20I%20would%20like%20to%20order%20paver%20blocks.";

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <div className="page-hero-content">
            <h1>
              Premium Concrete Paver{" "}
              <span style={{ color: "var(--color-terracotta)" }}>Blocks</span>
            </h1>
            <p>
              Engineered for load-bearing strength and weather resilience.
              Supplied directly from our Dinara yard to contractors and
              homeowners [EDIT].
            </p>
            <Link to="/contact" className="btn-terracotta">
              Request Paver Quote <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className="cutout-stack-box">
            <img
              src={IMAGES.warmGreyTexture}
              alt="Concrete Texture"
              className="cutout-bg"
            />
            <img
              src={IMAGES.paverEmblem}
              alt="Paver Stack Emblem"
              className="cutout-emblem"
            />
          </div>
        </div>
      </section>

      {/* Where used */}
      <section className="uses-section">
        <div className="uses-container">
          <div className="uses-header">
            <h2>
              Where paver blocks are{" "}
              <span style={{ color: "var(--color-terracotta)" }}>used</span>
            </h2>
          </div>
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

      {/* Why choose pavers */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-sticky-col">
            <h2>
              Why choose Yadav paver{" "}
              <span style={{ color: "var(--color-terracotta)" }}>blocks</span>
            </h2>
            <p>
              Manufactured for long-lasting surface durability across Madhya
              Pradesh.
            </p>
          </div>
          <div className="why-blocks-col">
            <div className="why-block">
              <div className="why-block-header">
                <Wrench size={26} weight="fill" className="why-block-icon" />
                <h3>Low maintenance</h3>
              </div>
              <p>
                Individual interlocking blocks absorb ground shifting without
                major structural failure compared to poured concrete slabs
                [EDIT].
              </p>
            </div>
            <div className="why-block">
              <div className="why-block-header">
                <ArrowsClockwise size={26} weight="fill" className="why-block-icon" />
                <h3>Easy utility access</h3>
              </div>
              <p>
                If underground plumbing or electrical lines need repair, pavers
                can be lifted and relaid cleanly without leaving patched scars.
              </p>
            </div>
            <div className="why-block">
              <div className="why-block-header">
                <Lightning size={26} weight="fill" className="why-block-icon" />
                <h3>Instant usability</h3>
              </div>
              <p>
                No curing time is required on site after laying; paved areas can
                be opened to pedestrian and vehicle traffic immediately upon
                final compaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern explorer */}
      <section className="pattern-section">
        <div className="pattern-container">
          <div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 3rem)",
                fontWeight: 800,
                marginBottom: "2rem",
              }}
            >
              Paver Pattern{" "}
              <span style={{ color: "var(--color-terracotta)" }}>Explorer</span>
            </h2>
            <div className="pattern-tabs">
              {patterns.map((p) => (
                <button
                  key={p.id}
                  className={`pattern-tab-btn ${activePattern === p.id ? "active" : ""}`}
                  onClick={() => setActivePattern(p.id)}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="pattern-preview-box">
              <img src={currentPattern.image} alt={currentPattern.name} />
            </div>
            <div className="pattern-info-lines">
              <div>
                <strong>Visual style:</strong> {currentPattern.appearance}
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <strong>Recommended application:</strong>{" "}
                {currentPattern.suitability}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options spec list */}
      <section className="specs-section">
        <div className="specs-container">
          <div className="specs-header">
            <h2>
              Paver Block{" "}
              <span style={{ color: "var(--color-terracotta)" }}>
                Specifications
              </span>
            </h2>
          </div>
          <div className="specs-table">
            {specs.map((spec, idx) => (
              <div key={idx} className="spec-row">
                <span
                  className="spec-label"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    className="terracotta-icon-box"
                    style={{ margin: 0, width: 32, height: 32, minWidth: 32 }}
                  >
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

      {/* How pavers are laid */}
      <section className="laid-section">
        <div className="laid-container">
          <div className="laid-header">
            <h2>
              How pavers are{" "}
              <span style={{ color: "var(--color-terracotta)" }}>laid</span>
            </h2>
          </div>
          <div className="laid-grid">
            {laidSteps.map((step, idx) => (
              <div key={idx} className="laid-card">
                <div
                  className="terracotta-icon-box"
                  style={{ marginBottom: "1rem" }}
                >
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
            <h2>
              Paver Block{" "}
              <span style={{ color: "var(--color-terracotta)" }}>FAQs</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <CaretUp size={20} />
                  ) : (
                    <CaretDown size={20} />
                  )}
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
        <img
          src={IMAGES.modernDrivewayLush}
          alt="Driveway Pavers"
          className="closing-cta-bg"
        />
        <div className="closing-cta-content">
          <h2>Ready to pave your property?</h2>
          <p>
            Get accurate block counts and direct delivery to your site from
            Yadav Construction & Builders.
          </p>
          <div className="closing-cta-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terracotta"
            >
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
