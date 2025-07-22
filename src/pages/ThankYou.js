import React from 'react';

export default function ThankYou() {
  return (
    <div style={{
      background: '#232A3D',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0
    }}>
      <div style={{
        textAlign: 'center',
        background: 'rgba(65,105,225,0.13)',
        border: '2px solid #4169E1',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ color: '#4169E1', marginBottom: '1rem' }}>Thank You!</h1>
        <p style={{ color: '#bdc3c7', fontSize: '1.2rem' }}>
          Your message has been received. We appreciate your interest and will get back to you as soon as possible.
        </p>
        <p><a href="/" style={{ color: '#4169E1', textDecoration: 'none', fontWeight: 'bold' }}>Return to Home</a></p>
      </div>
    </div>
  );
} 