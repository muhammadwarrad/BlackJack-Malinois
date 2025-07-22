import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  // Handle dog information when navigating from dog profile
  useEffect(() => {
    if (location.state?.selectedDog) {
      // No-op: previously used to prefill form, now unused
    }
  }, [location.state]);

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        {location.state?.selectedDog && (
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(65, 105, 225, 0.1)',
            borderRadius: '15px',
            border: '2px solid #4169E1',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ color: '#4169E1', marginBottom: '0.5rem' }}>
              🐕 Interested in {location.state.selectedDog}
            </h3>
            <p style={{ color: 'white', margin: 0 }}>
              We've pre-filled your message with information about {location.state.selectedDog}. 
              Feel free to modify the message or add additional requirements.
            </p>
          </div>
        )}
        
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          padding: '2rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          border: '2px solid #4169E1',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{ color: '#4169E1', marginBottom: '1rem' }}>
            🛡️ Ready to Enhance Your Department?
          </h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>
            Ready to enhance your department with elite K-9 units? Contact us for detailed information about our dogs and training programs.
          </p>
          <p style={{ fontSize: '1rem', color: '#bdc3c7' }}>
            We work with law enforcement agencies nationwide to provide the highest quality Belgian Malinois and comprehensive training programs.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form name="contact" method="POST" data-netlify="true" action="/thank-you">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department/Agency *</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="e.g., City Police Department"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">Primary Interest</label>
                <select
                  id="interest"
                  name="interest"
                >
                  <option value="dogs">Police K-9s for Sale</option>
                  <option value="training">Handler Training Course</option>
                  <option value="puppy">Puppy Development Program</option>
                  <option value="consultation">Consultation Services</option>
                  <option value="maintenance">Maintenance Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Please describe your requirements, timeline, and any specific needs for your department..."
                  defaultValue={
                    location.state?.dogInfo
                      ? `I'm interested in ${location.state.dogInfo}. Please provide more information.`
                      : location.state?.selectedDog
                        ? `I'm interested in ${location.state.selectedDog}. Please provide more information.`
                        : ''
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3 style={{ color: '#4169E1', marginBottom: '2rem' }}>Get in Touch</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <strong style={{ color: 'white' }}>Phone</strong><br />
                <a href="tel:+1-601-463-0190" style={{ color: '#4169E1', textDecoration: 'none' }}>(601) 463-0190</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <strong style={{ color: 'white' }}>Email</strong><br />
                <a href="mailto:sales.blackjackmalinois@gmail.com" style={{ color: '#4169E1', textDecoration: 'none' }}>sales.blackjackmalinois@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <strong style={{ color: 'white' }}>Address</strong><br />
                <span style={{ color: '#bdc3c7' }}>
                  97 Jada Lane<br />
                  Poplarville, MS 39470-6477
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🛡️</div>
              <div>
                <strong style={{ color: 'white' }}>Emergency</strong><br />
                <a href="tel:+1-601-463-0190" style={{ color: '#4169E1', textDecoration: 'none' }}>(601) 463-0190</a>
              </div>
            </div>

            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem',
              backgroundColor: 'rgba(65, 105, 225, 0.1)',
              borderRadius: '10px',
              border: '1px solid #4169E1'
            }}>
              <h4 style={{ color: '#4169E1', marginBottom: '1rem', textAlign: 'center' }}>
                🛡️ Back the Blue - Supporting Law Enforcement
              </h4>
              <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#bdc3c7' }}>
                We are committed to providing law enforcement agencies with the highest quality K-9 units and training programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 