'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--leaf-dark)', color: 'white', marginTop: '4rem', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Nest of Nature</h3>
            <p style={{ opacity: 0.9 }}>A sanctuary for healing and empowerment in Cape Town's deep south.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}><Link href="/" style={{ color: 'var(--egg-blue)', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link href="/blog" style={{ color: 'var(--egg-blue)', textDecoration: 'none' }}>Stories</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link href="/volunteer" style={{ color: 'var(--egg-blue)', textDecoration: 'none' }}>Volunteer</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--egg-blue)', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Support Us</h4>
            <p style={{ marginBottom: '0.5rem', opacity: 0.9 }}>Help us support women in Masiphumelele, Ocean View, and Fish Hoek.</p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Launching May 16, 2026 • Cape Town</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.8, fontSize: '0.9rem' }}>
          <p>© {year} Nest of Nature. All rights reserved. | Founded by Nosipho Banzana</p>
        </div>
      </div>
    </footer>
  );
}
