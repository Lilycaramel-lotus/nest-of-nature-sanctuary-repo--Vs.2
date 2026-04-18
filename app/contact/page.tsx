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
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for reaching out! Nosipho will be in touch soon.');
    setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
  };

  return (
    <>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            color: 'var(--nest-green)',
            textDecoration: 'none',
            marginBottom: '2rem',
            fontWeight: '600',
          }}
        >
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--nest-green)' }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '4rem', opacity: 0.8 }}>
          Whether you want to sponsor, volunteer, or learn more about Nest of Nature, we'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div
            style={{
              background: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '12px',
              borderLeft: '5px solid var(--nest-green)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--leaf-dark)' }}>
              💚 Sponsorship
            </h3>
            <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
              Interested in supporting our mission financially? We welcome corporate and individual sponsorships.
            </p>
            <p style={{ fontWeight: '600', color: 'var(--nest-green)' }}>
              Every contribution matters.
            </p>
          </div>

          <div
            style={{
              background: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '12px',
              borderLeft: '5px solid var(--nest-green)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--leaf-dark)' }}>
              🤝 Volunteering
            </h3>
            <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
              Ready to make a difference? We need nurses, social workers, and dedicated community members.
            </p>
            <Link
              href="/volunteer"
              style={{
                color: 'var(--nest-green)',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              View Volunteer Opportunities →
            </Link>
          </div>

          <div
            style={{
              background: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '12px',
              borderLeft: '5px solid var(--nest-green)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--leaf-dark)' }}>
              📞 Direct Contact
            </h3>
            <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
              Reach out directly to Nosipho Banzana for urgent matters.
            </p>
            <p style={{ fontWeight: '600', color: 'var(--nest-green)' }}>
              Coming soon
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: 'var(--card-bg)',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '4rem',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--leaf-dark)' }}>
            Send us a Message
          </h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
              Inquiry Type *
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
              }}
            >
              <option value="">Select an option</option>
              <option value="sponsorship">Sponsorship / Donation</option>
              <option value="partnership">Corporate Partnership</option>
              <option value="media">Media Inquiry</option>
              <option value="general">General Question</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how you'd like to support or partner with Nest of Nature..."
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                minHeight: '150px',
                resize: 'vertical',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              background: 'var(--nest-green)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Send Message
          </button>
        </form>

        <div
          style={{
            background: 'var(--egg-blue)',
            color: '#064e3b',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🚀 Launching May 16, 2026
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Join us in Cape Town as we officially launch Nest of Nature and begin our mission to support women in the deep south.
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
            Nosipho's phone number will be shared at launch. Until then, please use this form to get in touch.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
