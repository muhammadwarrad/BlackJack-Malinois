import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#4169E1',
                lineHeight: '1'
              }}>
                Bl♣ckJ♣ck
              </div>
              <div style={{ 
                fontSize: '0.8rem', 
                fontWeight: '600', 
                color: '#4169E1',
                marginTop: '2px'
              }}>
                MALINOIS
              </div>
              <div style={{ 
                fontSize: '0.6rem', 
                fontWeight: '500', 
                color: '#e74c3c',
                marginTop: '2px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '2px 6px',
                borderRadius: '8px'
              }}>
                Law Enforcement K-9
              </div>
            </div>
            <p>
              Leading provider of elite police K-9 units and professional training programs. 
              Serving law enforcement agencies nationwide with certified Belgian Malinois 
              and comprehensive training solutions.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <strong>Certifications:</strong><br />
              • Law Enforcement K-9 Training<br />
              • Belgian Malinois Specialists<br />
              • National Police Dog Association<br />
              • International Working Dog Registry<br />
              • NNDDA Certified Training Facility
            </div>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/">Police K-9s for Sale</Link></li>
              <li><Link to="/training">Handler Training Course</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Puppy Development Program</li>
              <li>European Import Services</li>
              <li>Maintenance Training</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Training Programs</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>2-Week Handler Course</li>
              <li>4-Week Handler Course</li>
              <li>6-Week Handler Course</li>
              <li>8-Week Handler Course</li>
              <li>Puppy Development Program</li>
              <li>Maintenance Training</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+1-601-463-0190">(601) 463-0190</a>
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:info@blackjackmalinois.com">info@blackjackmalinois.com</a>
            </p>
            <p>
              <strong>Address:</strong><br />
              97 Jada Lane<br />
              Poplarville, MS 39470-6477
            </p>
            <p>
              <strong>Emergency:</strong><br />
              <a href="tel:+1-601-463-0190">(601) 463-0190</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              © 2024 Blackjack Malinois. All rights reserved.
            </div>
          </div>
          
          <div style={{ 
            marginTop: '1rem', 
            paddingTop: '1rem', 
            borderTop: '1px solid #34495e',
            fontSize: '0.9rem',
            color: '#95a5a6'
          }}>
            <p>
              <strong>Disclaimer:</strong> All dogs are trained and certified according to 
              national law enforcement standards. Training programs meet or exceed 
              industry requirements for police K-9 units. All K-9 teams are guaranteed to certify upon completion of our course.
            </p>
          </div>



          <div style={{ 
            marginTop: '1rem', 
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            border: '1px solid #4169E1',
            textAlign: 'center'
          }}>
            <a 
              href="https://blackjackmalinois.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#4169E1',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}
            >
              🐕 Civilian looking for puppies → Visit Blackjack Malinois
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 