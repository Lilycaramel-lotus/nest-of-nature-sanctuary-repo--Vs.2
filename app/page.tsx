'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      <header
        style={{
          background: 'linear-gradient(135deg, var(--nest-green), var(--leaf-dark))',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          boxShadow: 'inset 0 0 100px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.1)',
          borderBottom: '4px solid var(--egg-blue)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
          <ThemeToggle />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <svg
            style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 1.5rem',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
            }}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <path d="M50 20 C30 20 20 40 20 60 C20 80 40 90 50 90 C60 90 80 80 80 60 C80 40 70 20 50 20" fill="white" opacity="0.2" />
            <circle cx="40" cy="75" r="5" fill="var(--egg-blue)" />
            <circle cx="50" cy="75" r="5" fill="var(--egg-blue)" />
            <circle cx="60" cy="75" r="5" fill="var(--egg-blue)" />
            <text x="50" y="55" fontFamily="serif" fontSize="10" textAnchor="middle" fill="white">
              NEST
            </text>
          </svg>

          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', fontFamily: "'Playfair Display', serif", fontWeight: 'bold' }}>
            Nest of Nature
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>A Sanctuary for Healing & Empowerment</p>
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div
          style={{
            background: 'var(--egg-blue)',
            color: '#064e3b',
            padding: '1.5rem',
            borderRadius: '12px',
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: '4rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          }}
        >
          🚀 Launching May 16, 2026 • Cape Town, South Africa
        </div>

        <div style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '4rem', fontWeight: '300', lineHeight: '1.8' }}>
          <p>
            Founded by <strong>Nosipho Banzana</strong>, Nest of Nature is a beacon of hope for women facing domestic abuse in <strong>Masiphumelele</strong>, <strong>Ocean View</strong>, and <strong>Fish Hoek</strong>. We are building a community-driven sanctuary where healing begins and futures are reclaimed.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div
            style={{
              background: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '16px',
              borderLeft: '5px solid var(--nest-green)',
            }}
          >
            <h3 style={{ marginBottom: '1rem', color: 'var(--nest-green)', fontSize: '1.5rem', fontWeight: 'bold' }}>
              🤝 Volunteer
            </h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We are urgently seeking <strong>Nurses</strong> and <strong>Social Workers</strong> to provide critical care and guidance. Your expertise can save lives in the Deep South.
            </p>
            <Link
              href="/volunteer"
              style={{
                display: 'inline-block',
                background: 'var(--nest-green)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Join as Volunteer
            </Link>
          </div>

          <div
            style={{
              background: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '16px',
              borderLeft: '5px solid var(--nest-green)',
            }}
          >
            <h3 style={{ marginBottom: '1rem', color: 'var(--nest-green)', fontSize: '1.5rem', fontWeight: 'bold' }}>
              💚 Sponsor
            </h3>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              From individual donations to corporate grants, every Rand helps. We are currently applying for Lotto funding and seeking partners to secure our sanctuary.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'var(--nest-green)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Become a Sponsor
            </Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--nest-green)' }}>
            Join the Movement
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>
            Help us provide safety, healing, and hope for the women of Cape Town.
          </p>
          <Link
            href="/blog"
            style={{
              display: 'inline-block',
              background: 'var(--leaf-dark)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              marginRight: '1rem',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Read Our Stories
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
