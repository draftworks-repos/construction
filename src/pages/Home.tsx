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
  Barbell,
  ShieldCheck,
  CurrencyInr,
  Ruler,
  Car,
  Garage,
  PersonSimpleWalk,
  Plant,
  House,
  Wall,
  ChatCircleDots,
  Receipt,
  Truck,
  HouseLine,
  MapPin,
} from "@phosphor-icons/react";
import { IMAGES } from "../config/images";
import ReelsSection from "../components/ReelsSection";
import WhatsAppIcon from "../components/WhatsAppIcon";
import "../styles/Home.css";

export default function Home() {
  const [activeProject, setActiveProject] = useState("driveway");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const projects = [
    {
      id: "driveway",
      title: "Driveway",
      icon: <Car size={20} weight="fill" />,
      product: "Heavy-Duty Paver Blocks (60mm / 80mm)",
      image: IMAGES.modernDrivewayLush,
      description:
        "Engineered to withstand heavy vehicle loads without cracking or sinking. Designed for smooth rolling tyres and pristine curb appeal.",
    },
    {
      id: "parking",
      title: "Parking area",
      icon: <Garage size={20} weight="fill" />,
      product: "Interlocking Zigzag Pavers",
      image: IMAGES.mottledGrid,
      description:
        "Distributed pressure interlocking patterns ensure commercial and residential vehicle parking spaces remain stable under continuous daily pressure.",
    },
    {
      id: "footpath",
      title: "Footpath",
      icon: <PersonSimpleWalk size={20} weight="fill" />,
      product: "Standard Surface Pavers & Tiles",
      image: IMAGES.sunlitGardenPathway,
      description:
        "Clean slip-resistant walking surfaces that drain rainwater efficiently while providing a polished, elegant look for pathways.",
    },
    {
      id: "garden",
      title: "Garden",
      icon: <Plant size={20} weight="fill" />,
      product: "Textured Landscaping Pavers",
      image: IMAGES.modernGardenWalkway,
      description:
        "Harmonizes natural greenery with sturdy concrete structures. Perfect for winding garden trails, courtyards, and patio seating areas.",
    },
    {
      id: "housewall",
      title: "House wall",
      icon: <House size={20} weight="fill" />,
      product: "Precision Fly Ash Bricks",
      image: IMAGES.unfinishedHouse,
      description:
        "Uniform dimensions and superior thermal insulation keep interiors cooler in summer. Reduces mortar consumption and plastering cost.",
    },
    {
      id: "boundarywall",
      title: "Boundary wall",
      icon: <Wall size={20} weight="fill" />,
      product: "High-Density Fly Ash Bricks",
      image: IMAGES.boundaryWall,
      description:
        "Provides rock-solid perimeter security with excellent weather resistance. Straight edges make alignment effortless for masons.",
    },
  ];

  const currentProject =
    projects.find((p) => p.id === activeProject) || projects[0];

  const workPhotos = [
    {
      src: IMAGES.modernDrivewayEntrance,
      title: "Residential Driveway",
      location: "Dinara Outskirts [EDIT]",
    },
    {
      src: IMAGES.sunlitCourtyard,
      title: "Courtyard Paving",
      location: "Near Bus Stand [EDIT]",
    },
    {
      src: IMAGES.sunlitTropicalPath,
      title: "Garden Walkway",
      location: "Shivpuri Road [EDIT]",
    },
    {
      src: IMAGES.unfinishedHouse,
      title: "Residential Construction",
      location: "Datia Border [EDIT]",
    },
    {
      src: IMAGES.boundaryWall,
      title: "Perimeter Boundary Wall",
      location: "Market Area [EDIT]",
    },
    {
      src: IMAGES.dappledLightPavers,
      title: "Commercial Courtyard",
      location: "Main Highway [EDIT]",
    },
  ];

  const deliveryTowns = [
    "Dinara",
    "Shivpuri",
    "Datia",
    "Karera",
    "Pichhore",
    "Bamor",
    "Narwar",
    "Kolaras",
    "Dabra [EDIT]",
  ];

  const faqs = [
    {
      q: "What strength grades are available for your paver blocks?",
      a: "We manufacture paver blocks in M30 and M35 density grades suitable for residential driveways, pedestrian walkways, and commercial parking lots [EDIT].",
    },
    {
      q: "Why should I choose fly ash bricks over traditional red clay bricks?",
      a: "Fly ash bricks offer higher compressive strength, uniform exact dimensions, lower water absorption, and superior thermal insulation while saving topsoil.",
    },
    {
      q: "Do you deliver directly to construction sites in nearby towns?",
      a: "Yes, we arrange prompt tractor-trailer and truck delivery directly to your site across Dinara and surrounding districts [EDIT].",
    },
    {
      q: "What is the standard curing process for fly ash brick masonry?",
      a: "Fly ash brick walls should be sprinkled with clean water for at least 7 to 10 days post-construction to achieve maximum mortar bond strength.",
    },
    {
      q: "How can I calculate the exact quantity required for your project?",
      a: "Measure your total square footage or wall area, add 5% extra for standard cutting wastage, and share dimensions with us on WhatsApp for an exact estimate.",
    },
    {
      q: "Are custom color options available for decorative pavers?",
      a: "We offer standard grey, red terracotta, and dual-tone mottled color mixes. Contact our yard for custom batch requirements [EDIT].",
    },
  ];

  const whatsappUrl =
    "https://wa.me/919009612003?text=Hello%20Yadav%20Construction,%20I%20would%20like%20to%20request%20a%20quote.";

  return (
    <div>
      {/* 1. Hero */}
      <section className="home-hero">
        <div
          className="home-hero-bg"
          style={{ backgroundImage: `url(${IMAGES["hero-pavers"]})` }}
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <h1 className="home-hero-headline">
            Paver blocks and fly ash bricks for work that{" "}
            <span style={{ color: "var(--color-terracotta)" }}>lasts</span>.
          </h1>
          <p className="home-hero-subline">
            Supplied from Dinara to builders, contractors and homeowners nearby.
          </p>
          <div className="home-hero-actions">
            <Link to="/contact" className="btn-terracotta">
              Request a Quote <ArrowRight size={18} weight="bold" />
            </Link>
            <a href="tel:9009612003" className="btn-outline-light">
              <Phone size={18} weight="fill" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Two product panels */}
      <section className="product-panels-section">
        <div className="product-panels-grid">
          <Link to="/pavers" className="product-panel-card">
            <img
              src={IMAGES["product-pavers"]}
              alt="Premium Paver Blocks"
              className="product-panel-img"
              loading="lazy"
            />
            <div className="product-panel-overlay" />
            <div className="product-panel-content">
              <h3>
                Paver{" "}
                <span style={{ color: "var(--color-terracotta)" }}>Blocks</span>
              </h3>
              <p>
                Interlocking strength and clean stone textures for driveways,
                pathways, and commercial courtyards.
              </p>
              <span className="panel-arrow-link">
                Explore Pavers <ArrowRight size={18} weight="bold" />
              </span>
            </div>
          </Link>

          <Link to="/bricks" className="product-panel-card">
            <img
              src={IMAGES.palletBlocks}
              alt="Precision Fly Ash Bricks"
              className="product-panel-img"
              loading="lazy"
            />
            <div className="product-panel-overlay" />
            <div className="product-panel-content">
              <h3>
                Fly Ash{" "}
                <span style={{ color: "var(--color-terracotta)" }}>Bricks</span>
              </h3>
              <p>
                Precision-molded, high-density walling bricks with superior
                thermal insulation and exact edges.
              </p>
              <span className="panel-arrow-link">
                Explore Bricks <ArrowRight size={18} weight="bold" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Redesigned Why section */}
      <section className="why-redesign-section">
        <img
          src={IMAGES["why-bg"]}
          alt="Texture Background"
          className="why-bg-img"
        />
        <div className="why-redesign-container">
          <div className="why-left-col">
            <h2>
              Why builders choose pavers and fly ash{" "}
              <span style={{ color: "var(--color-terracotta)" }}>bricks</span>
            </h2>
            <p>
              Built on structural reliability and material integrity across
              Madhya Pradesh [EDIT].
            </p>
            <div className="why-side-tile">
              <img
                src={IMAGES["why-side"]}
                alt="Garden Walkway"
                loading="lazy"
              />
            </div>
          </div>
          <div className="why-cards-grid">
            <div className="why-feature-card">
              <img
                src={IMAGES["why-bg"]}
                alt="Card bg"
                className="why-card-bg"
              />
              <div className="why-card-content">
                <div className="terracotta-icon-box">
                  <Barbell size={24} weight="fill" />
                </div>
                <h3>Strong</h3>
                <p>
                  High-tonnage hydraulic pressing ensures our concrete elements
                  withstand heavy structural loads without micro-fracturing
                  under vehicle traffic or dead loads [EDIT].
                </p>
              </div>
            </div>

            <div className="why-feature-card">
              <img
                src={IMAGES["why-bg"]}
                alt="Card bg"
                className="why-card-bg"
              />
              <div className="why-card-content">
                <div className="terracotta-icon-box">
                  <ShieldCheck size={24} weight="fill" />
                </div>
                <h3>Durable</h3>
                <p>
                  Vibration-compacted aggregates resist weather cycles, monsoon
                  moisture seepage, and chemical degradation for extended
                  weathering resilience [EDIT].
                </p>
              </div>
            </div>

            <div className="why-feature-card">
              <img
                src={IMAGES["why-bg"]}
                alt="Card bg"
                className="why-card-bg"
              />
              <div className="why-card-content">
                <div className="terracotta-icon-box">
                  <CurrencyInr size={24} weight="fill" />
                </div>
                <h3>Affordable</h3>
                <p>
                  Locally sourced raw ingredients processed with high efficiency
                  mean competitive direct-from-yard pricing for local
                  contractors [EDIT].
                </p>
              </div>
            </div>

            <div className="why-feature-card">
              <img
                src={IMAGES["why-bg"]}
                alt="Card bg"
                className="why-card-bg"
              />
              <div className="why-card-content">
                <div className="terracotta-icon-box">
                  <Ruler size={24} weight="fill" />
                </div>
                <h3>Easy to work with</h3>
                <p>
                  Uniform geometric tolerances and square edges allow masons to
                  achieve faster laying speeds with minimum mortar and precise
                  joint alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Project picker */}
      <section className="picker-section">
        <div className="picker-container">
          <div className="picker-header">
            <h2>
              What are you{" "}
              <span style={{ color: "var(--color-terracotta)" }}>building</span>{" "}
              ?
            </h2>
            <div className="picker-tabs">
              {projects.map((p) => (
                <button
                  key={p.id}
                  className={`picker-tab ${activeProject === p.id ? "active" : ""}`}
                  onClick={() => setActiveProject(p.id)}
                >
                  {p.icon} {p.title}
                </button>
              ))}
            </div>
          </div>

          <div className="picker-display-panel">
            <div className="picker-image-box">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                loading="lazy"
              />
            </div>
            <div className="picker-info">
              <span className="picker-recommended">
                Recommended: {currentProject.product}
              </span>
              <h3>{currentProject.title} Solutions</h3>
              <p>{currentProject.description}</p>
              <Link to="/contact" className="btn-terracotta">
                Ask for a quote <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reels Section */}
      <ReelsSection />

      {/* 6. Our work */}
      <section className="work-mosaic-section">
        <div className="work-mosaic-container">
          <div className="section-title-row">
            <h2>
              Our work in the{" "}
              <span style={{ color: "var(--color-terracotta)" }}>field</span>
            </h2>
            <Link to="/work" className="section-link">
              See all work <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className="work-mosaic-grid">
            {workPhotos.map((photo, idx) => (
              <div key={idx} className="work-mosaic-item">
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="work-mosaic-overlay">
                  <h4>{photo.title}</h4>
                  <p>{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. From our yard */}
      <section className="yard-section">
        <div className="yard-container">
          <div className="yard-image">
            <img
              src={IMAGES.storageYard}
              alt="Yadav Construction Stock Yard"
              loading="lazy"
            />
          </div>
          <div className="yard-content">
            <h2>
              Direct from our Dinara{" "}
              <span style={{ color: "var(--color-terracotta)" }}>yard</span>
            </h2>
            <p>
              Our storage yard in Dinara stocks cured paver blocks and fly ash
              bricks, ready for dispatch. Batches undergo standard quality
              checks before leaving our facility [EDIT: stock capacity].
            </p>
            <p>
              We maintain steady production cycles so contractors experience
              smooth material supply.
            </p>
            <Link
              to="/contact"
              className="btn-terracotta"
              style={{ display: "inline-flex", marginTop: "1rem" }}
            >
              Check Yard Stock <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. How to order */}
      <section className="order-section">
        <div className="order-container">
          <div className="order-header">
            <h2>
              How to{" "}
              <span style={{ color: "var(--color-terracotta)" }}>order</span>
            </h2>
          </div>
          <div className="order-steps-grid">
            <div className="order-step-card">
              <div className="order-step-top">
                <div className="order-step-num">01</div>
                <div
                  className="terracotta-icon-box"
                  style={{ margin: 0, width: 40, height: 40 }}
                >
                  <ChatCircleDots size={22} weight="fill" />
                </div>
              </div>
              <h3>Tell us what you need</h3>
              <p>
                Share your project type, rough square footage, or required brick
                count via call or WhatsApp.
              </p>
            </div>
            <div className="order-step-card">
              <div className="order-step-top">
                <div className="order-step-num">02</div>
                <div
                  className="terracotta-icon-box"
                  style={{ margin: 0, width: 40, height: 40 }}
                >
                  <Receipt size={22} weight="fill" />
                </div>
              </div>
              <h3>We confirm quantity and rate</h3>
              <p>
                We calculate material requirements and provide transparent
                direct-from-yard pricing [EDIT].
              </p>
            </div>
            <div className="order-step-card">
              <div className="order-step-top">
                <div className="order-step-num">03</div>
                <div
                  className="terracotta-icon-box"
                  style={{ margin: 0, width: 40, height: 40 }}
                >
                  <Truck size={22} weight="fill" />
                </div>
              </div>
              <h3>We arrange delivery</h3>
              <p>
                We schedule reliable tractor or truck transport tailored to your
                site access and delivery timeline.
              </p>
            </div>
            <div className="order-step-card">
              <div className="order-step-top">
                <div className="order-step-num">04</div>
                <div
                  className="terracotta-icon-box"
                  style={{ margin: 0, width: 40, height: 40 }}
                >
                  <HouseLine size={22} weight="fill" />
                </div>
              </div>
              <h3>You receive it at your site</h3>
              <p>
                Materials arrive safely stacked and ready for immediate
                installation by your masons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Delivery areas */}
      <section className="delivery-section">
        <div className="delivery-container">
          <div className="delivery-content">
            <h2>
              Delivery across Dinara and nearby{" "}
              <span style={{ color: "var(--color-terracotta)" }}>regions</span>
            </h2>
            <p>
              We dispatch building materials directly to sites across
              neighboring towns and districts with reliable logistics.
            </p>
            <div className="towns-list">
              {deliveryTowns.map((town, idx) => (
                <div key={idx} className="town-badge">
                  <MapPin
                    size={16}
                    weight="fill"
                    className="town-badge-icon"
                  />{" "}
                  {town}
                </div>
              ))}
            </div>
            <p className="delivery-note">
              Not listed? Ask us — we frequently accommodate extended site
              deliveries [EDIT].
            </p>
          </div>
          <div className="delivery-image">
            <img
              src={IMAGES.truckloadBlocks}
              alt="Delivery Truck loaded with blocks"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2>
              Frequently asked{" "}
              <span style={{ color: "var(--color-terracotta)" }}>
                questions
              </span>
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

      {/* 11. Closing CTA */}
      <section className="closing-cta">
        <img
          src={IMAGES.modernHouseEntrance}
          alt="Modern Construction Entrance"
          className="closing-cta-bg"
        />
        <div className="closing-cta-content">
          <h2>Tell us what you're building.</h2>
          <p>
            Get straight answers, verified material estimates, and prompt
            delivery from Yadav Construction & Builders.
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
