'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', formData);
    alert('Thank you for your interest! We will be in touch soon.');
    setFormData({ name: '', email: '', phone: '', profession: '', experience: '', message: '' });
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
          Volunteer With Us
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '4rem', opacity: 0.8, lineHeight: '1.8' }}>
          We are urgently seeking <strong>Nurses</strong>, <strong>Social Workers</strong>, and dedicated volunteers to help us provide critical support to women in Masiphumelele, Ocean View, and Fish Hoek. Your skills and compassion can change lives.
        </p>

        <div
          style={{
            background: 'var(--card-bg)',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '4rem',
            borderLeft: '5px solid var(--nest-green)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--leaf-dark)' }}>
            We Need Your Help
          </h2>
          <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--nest-green)', fontWeight: 'bold' }}>✓</span>
              <strong>Registered Nurses</strong> - Provide medical care and health education
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--nest-green)', fontWeight: 'bold' }}>✓</span>
              <strong>Social Workers</strong> - Offer counseling and case management support
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--nest-green)', fontWeight: 'bold' }}>✓</span>
              <strong>Community Volunteers</strong> - Support programs and outreach initiatives
            </li>
            <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--nest-green)', fontWeight: 'bold' }}>✓</span>
              <strong>Administrative Support</strong> - Help us manage operations and communications
            </li>
          </ul>
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
            Express Your Interest
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
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
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
              Profession / Role *
            </label>
            <select
              name="profession"
              value={formData.profession}
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
              <option value="">Select your profession</option>
              <option value="nurse">Registered Nurse</option>
              <option value="social-worker">Social Worker</option>
              <option value="counselor">Counselor / Therapist</option>
              <option value="volunteer">General Volunteer</option>
              <option value="admin">Administrative Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
              Relevant Experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Tell us about your experience working with vulnerable populations..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                minHeight: '100px',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you want to volunteer with Nest of Nature..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                minHeight: '100px',
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
            Submit Application
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
            Questions?
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Contact Nosipho directly or reach out through our contact page.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#064e3b',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            Get in Touch
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
