/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, WhatsappLogo, InstagramLogo, MapPin, Clock, PaperPlaneTilt } from '@phosphor-icons/react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Paver Blocks (60mm/80mm)',
    quantity: '',
    location: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'phone') {
      if (value && !/^\d{10}$/.test(value)) {
        setPhoneError('Please enter a valid 10-digit phone number.');
      } else {
        setPhoneError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }

    const text = `*New Quote Request - Yadav Construction*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Product:* ${formData.product}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Delivery Location:* ${formData.location}\n` +
      `*Message:* ${formData.message || 'N/A'}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919009612003?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact & Quote</h1>
            <p>Tell us what you need for your project. Fill out the quote form below to send your details directly via WhatsApp or reach us directly through our contact numbers.</p>
          </div>

          <div className="contact-grid">
            {/* Quote Form */}
            <div className="quote-form-box">
              <h2>Request a Material Quote</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (10 digits) *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    maxLength={10}
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9009612003"
                  />
                  {phoneError && <div className="form-error">{phoneError}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="product">Select Product *</label>
                  <select
                    id="product"
                    name="product"
                    className="form-select"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="Paver Blocks (60mm/80mm)">Paver Blocks (60mm / 80mm)</option>
                    <option value="Fly Ash Bricks">Fly Ash Bricks</option>
                    <option value="Both Pavers and Bricks">Both Pavers and Bricks</option>
                    <option value="Custom Requirement">Custom Requirement [EDIT]</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Estimated Quantity (Sq. Ft. or Brick Count) *</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    className="form-input"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 1500 sq ft or 10,000 bricks"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Delivery Location (Town / Village) *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="form-input"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Dinara or Shivpuri"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Optional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific delivery timeline or notes..."
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <PaperPlaneTilt size={20} weight="fill" /> Submit & Open WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="contact-details-box">
              <h2>Direct Contact Details</h2>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={24} weight="fill" />
                </div>
                <div className="contact-info-text">
                  <h4>Phone & WhatsApp</h4>
                  <p><a href="tel:9009612003">9009612003</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <WhatsappLogo size={24} weight="fill" />
                </div>
                <div className="contact-info-text">
                  <h4>Instant WhatsApp Chat</h4>
                  <p><a href="https://wa.me/919009612003" target="_blank" rel="noopener noreferrer">Click to Chat on WhatsApp</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <InstagramLogo size={24} weight="fill" />
                </div>
                <div className="contact-info-text">
                  <h4>Instagram</h4>
                  <p><a href="https://instagram.com/yadavv_construction" target="_blank" rel="noopener noreferrer">@yadavv_construction</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={24} weight="fill" />
                </div>
                <div className="contact-info-text">
                  <h4>Stock Yard Address</h4>
                  <p>Main Road, Dinara, Madhya Pradesh [EDIT PIN: 473551]</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={24} weight="fill" />
                </div>
                <div className="contact-info-text">
                  <h4>Working Hours</h4>
                  <p>Monday – Sunday: 8:00 AM – 8:00 PM [EDIT]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="map-embed-box">
            <iframe
              title="Dinara Madhya Pradesh Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.123456789!2d78.123456!3d25.432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzU1LjYiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
