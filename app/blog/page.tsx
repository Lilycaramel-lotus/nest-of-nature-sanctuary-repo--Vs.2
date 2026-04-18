'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

const stories = [
  {
    id: 1,
    title: 'Masiphumelele: A Community Rising',
    excerpt: 'Discover how women in Masiphumelele are finding strength through our sanctuary programs.',
    date: 'May 2026',
  },
  {
    id: 2,
    title: 'Ocean View Stories: Healing Begins',
    excerpt: 'Real stories of resilience and recovery from women in Ocean View township.',
    date: 'May 2026',
  },
  {
    id: 3,
    title: 'Fish Hoek: Building Futures',
    excerpt: 'How our volunteer nurses and social workers are making a difference in Fish Hoek.',
    date: 'May 2026',
  },
];

export default function Blog() {
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
          Township Stories
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '4rem', opacity: 0.8 }}>
          Real stories of resilience, hope, and transformation from the women we serve in Cape Town's deep south.
        </p>

        <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
          {stories.map((story) => (
            <article
              key={story.id}
              style={{
                background: 'var(--card-bg)',
                padding: '2rem',
                borderRadius: '12px',
                borderLeft: '5px solid var(--nest-green)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--leaf-dark)' }}>
                {story.title}
              </h2>
              <p style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '1rem' }}>{story.date}</p>
              <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{story.excerpt}</p>
              <a
                href="#"
                style={{
                  color: 'var(--nest-green)',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Read Story →
              </a>
            </article>
          ))}
        </div>

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
            Have a story to share?
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We want to amplify the voices of women in our community.
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
