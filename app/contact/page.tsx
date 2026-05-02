'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    roles: [] as string[],
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function toggleRole(role: string) {
    setFormData((prev) => {
      const exists = prev.roles.includes(role);
      return {
        ...prev,
        roles: exists
          ? prev.roles.filter((r) => r !== role)
          : [...prev.roles, role],
      };
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Contact form submitted:', formData);
        alert('Thank you. We will respond as soon as possible.');

        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          roles: [],
          message: '',
        });
      } else {
        alert('There was an error. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        
        <Link href="/" style={{ marginBottom: '2rem', display: 'inline-block' }}>
          ← Back
        </Link>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Contact & Support
        </h1>

        <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
          Reach out for support, volunteering, or donations.
        </p>

        {/* URGENT HELP */}
        <div
          style={{
            background: '#fef3c7',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
          }}
        >
          <strong>Need help now?</strong>
          <p style={{ marginTop: '0.5rem' }}>
            Use WhatsApp for the fastest response.
          </p>
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/27XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#25D366',
            color: 'white',
            padding: '1rem',
            borderRadius: '10px',
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: '2rem',
            textDecoration: 'none',
          }}
        >
          💬 Message on WhatsApp
        </a>

        {/* MAP */}
        <div style={{ marginBottom: '2rem' }}>
          <iframe
            src="https://www.google.com/maps?q=Cape+Town&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px' }}
            loading="lazy"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '12px',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '1rem', padding: '0.75rem' }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '1rem', padding: '0.75rem' }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem', padding: '0.75rem' }}
          />

          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '1rem', padding: '0.75rem' }}
          >
            <option value="">Select type</option>
            <option value="support">I need support</option>
            <option value="volunteer">I want to volunteer</option>
            <option value="donation">I want to donate</option>
            <option value="general">General enquiry</option>
          </select>

          {/* VOLUNTEER CHECKBOXES */}
          {formData.inquiryType === 'volunteer' && (
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>How can you help?</p>

              {['nurse', 'social_worker', 'mentor', 'other'].map((role) => (
                <label key={role} style={{ display: 'block' }}>
                  <input
                    type="checkbox"
                    checked={formData.roles.includes(role)}
                    onChange={() => toggleRole(role)}
                  />{' '}
                  {role.replace('_', ' ')}
                </label>
              ))}
            </div>
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={
              formData.inquiryType === 'support'
                ? 'Tell us what you need help with'
                : 'Write your message'
            }
            required
            style={{
              width: '100%',
              marginBottom: '1rem',
              padding: '0.75rem',
              minHeight: '120px',
            }}
          />

          <button
            type="submit"
            style={{
              background: '#16a34a',
              color: 'white',
              padding: '1rem',
              borderRadius: '8px',
              width: '100%',
            }}
          >
            Send Message
          </button>
        </form>

        {/* EXPECTATION */}
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
          We respond as soon as possible. Support requests are prioritized.
        </p>
      </main>

      <Footer />
    </>
  );
}
