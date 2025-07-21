import React from 'react';
import { Link } from 'react-router-dom';
import HomeGallery from './HomeGallery';

const Hero = () => {
  return (
    <>
      {/* Responsive styles for Hero section */}
      <style>{`
        @media (max-width: 900px) {
          .hero-content > div[style*='max-width'] {
            max-width: 98vw !important;
            padding: 1.2rem !important;
          }
        }
        @media (max-width: 700px) {
          .hero-content h1 {
            font-size: 1.3rem !important;
          }
          .hero-content > div[style*='max-width'] {
            padding: 0.7rem !important;
            border-radius: 10px !important;
          }
          .hero-content h3 {
            font-size: 1.1rem !important;
          }
          .hero-content p, .hero-content strong {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 500px) {
          .hero-content h1 {
            font-size: 1.1rem !important;
          }
          .hero-content > div[style*='max-width'] {
            padding: 0.4rem !important;
            border-radius: 7px !important;
          }
          .hero-content h3 {
            font-size: 0.95rem !important;
          }
          .hero-content p, .hero-content strong {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
      <section className="hero" style={{ paddingTop: '100px', paddingBottom: '0' }}>
        <div className="hero-content">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '1.2rem',
            gap: '0.5rem',
            flexDirection: 'column'
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '0.7rem'
            }}>
              <div style={{ 
                fontSize: '3.2rem', 
                fontWeight: 'bold', 
                color: 'white',
                lineHeight: '1',
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
              }}>
                Bl♣ckJ♣ck
              </div>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: 'white',
                marginTop: '6px',
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
              }}>
                MALINOIS
              </div>
              <div style={{ 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                color: '#e74c3c',
                marginTop: '6px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                backgroundColor: 'rgba(255,255,255,0.95)',
                padding: '7px 18px',
                borderRadius: '16px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Law Enforcement K-9
              </div>
            </div>
            <h1 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 900, letterSpacing: '1px', color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>Elite Police K-9s for Law Enforcement</h1>
          </div>
          <div style={{ 
            maxWidth: '1000px', 
            margin: '0 auto 1.5rem auto',
            textAlign: 'left',
            backgroundColor: 'rgba(0,0,0,0.4)',
            padding: '2.5rem',
            borderRadius: '20px',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            border: '1px solid rgba(65,105,225,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Professional header with accent line */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem',
              position: 'relative'
            }}>
              <h3 style={{ 
                color: '#4169E1', 
                marginBottom: '0.5rem', 
                fontSize: '1.8rem', 
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>
                About Us
              </h3>
              <div style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #4169E1, #000080)',
                margin: '0 auto',
                borderRadius: '2px'
              }}></div>
              <p style={{
                color: '#bdc3c7',
                fontSize: '1.1rem',
                marginTop: '0.5rem',
                fontWeight: 400,
                fontStyle: 'italic'
              }}>
                Why We Love What We Do
              </p>
            </div>
            
            {/* Professional content with better typography */}
            <div style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              <p style={{ 
                fontFamily: 'Inter, Segoe UI, Arial, sans-serif', 
                fontSize: '1.4rem', 
                lineHeight: '1.8', 
                color: '#f8f9fa', 
                fontWeight: 400,
                margin: 0
              }}>
                At <strong style={{color: '#4169E1'}}>Blackjack Malinois</strong>, we are passionate about serving law enforcement agencies with the highest quality Belgian Malinois K-9 units. Our mission is to provide police departments with exceptional working dogs that enhance officer safety and community protection.
              </p>
              
              <p style={{ 
                fontFamily: 'Inter, Segoe UI, Arial, sans-serif', 
                fontSize: '1.4rem', 
                lineHeight: '1.8', 
                color: '#f8f9fa', 
                fontWeight: 400,
                margin: 0
              }}>
                We love what we do because every K-9 we train and place represents another layer of protection for our law enforcement officers and the communities they serve. Our dogs are more than just working animals - they are <strong style={{color: '#4169E1'}}>partners in keeping our streets safe</strong>.
              </p>
              
              <p style={{ 
                fontFamily: 'Inter, Segoe UI, Arial, sans-serif', 
                fontSize: '1.4rem', 
                lineHeight: '1.8', 
                color: '#f8f9fa', 
                fontWeight: 400,
                margin: 0
              }}>
                With over <strong style={{color: '#4169E1'}}>40 years of combined working dog experience</strong> and <strong style={{color: '#4169E1'}}>15 years of Law Enforcement K-9 experience</strong>, our team understands the critical role these animals play in modern policing. We take pride in knowing that our dogs are out there every day, helping officers do their jobs more safely and effectively.
              </p>
            </div>
          </div>
          {/* New Key Highlights Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.2rem',
            marginBottom: '1.2rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              background: 'rgba(65,105,225,0.13)',
              border: '2px solid #4169E1',
              borderRadius: '12px',
              padding: '1rem 1.2rem',
              minWidth: '180px',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.05rem',
              boxShadow: '0 2px 8px rgba(65,105,225,0.08)'
            }}>
              <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>👮‍♂️</span>
              Trusted by Law Enforcement
            </div>
            <div style={{
              background: 'rgba(65,105,225,0.13)',
              border: '2px solid #4169E1',
              borderRadius: '12px',
              padding: '1rem 1.2rem',
              minWidth: '180px',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.05rem',
              boxShadow: '0 2px 8px rgba(65,105,225,0.08)'
            }}>
              <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>✅</span>
              Certified K-9 Units
            </div>
            <div style={{
              background: 'rgba(65,105,225,0.13)',
              border: '2px solid #4169E1',
              borderRadius: '12px',
              padding: '1rem 1.2rem',
              minWidth: '180px',
              textAlign: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.05rem',
              boxShadow: '0 2px 8px rgba(65,105,225,0.08)'
            }}>
              <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem' }}>🚚</span>
              Nationwide Delivery
            </div>
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '0.7rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '0.2rem'
          }}>
            <Link to="/dogs" className="btn btn-primary">
              View Available K-9s
            </Link>
            <Link to="/training" className="btn btn-secondary">
              Handler Training Course
            </Link>
          </div>
          {/* Remove the blue badge row at the bottom */}
        </div>
      </section>
      <HomeGallery />
    </>
  );
};

export default Hero; 