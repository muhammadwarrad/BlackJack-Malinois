import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navFont = {
  fontFamily: 'Segoe UI, Arial, sans-serif',
  fontWeight: 600,
  fontSize: '1.2rem',
  letterSpacing: '0.5px',
  color: '#f5f6fa',
};

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/dogs', label: 'Dogs' },
  { to: '/training', label: 'Training' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} style={{
      fontFamily: navFont.fontFamily,
      fontWeight: navFont.fontWeight,
      fontSize: navFont.fontSize,
      position: 'sticky',
      top: 0,
      zIndex: 2000,
      background: 'rgba(0,0,0,0.98)',
      borderBottom: '2px solid #4169E1',
      width: '100%',
      minHeight: 60,
    }}>
      {/* Hamburger and overlay styles */}
      <style>{`
        body.menu-open {
          overflow: hidden !important;
        }
        .navbar-mobile-overlay {
          display: none;
        }
        @media (max-width: 700px) {
          .navbar-container { flex-direction: row; justify-content: space-between; align-items: center; padding: 0 10px; }
          .nav-links { display: none !important; }
          .hamburger {
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 44px;
            height: 44px;
            cursor: pointer;
            z-index: 3100;
            margin-left: auto;
            background: none;
            border: none;
          }
          .hamburger-bar {
            width: 32px !important;
            height: 4px !important;
            background: #374F6B !important;
            margin: 5px 0 !important;
            border-radius: 2px !important;
            display: block !important;
            transition: all 0.3s;
          }
          .navbar-mobile-overlay {
            display: ${menuOpen ? 'flex' : 'none'};
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: #181c24;
            z-index: 3000;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 3.5rem;
            gap: 0;
            animation: fadeIn 0.2s;
            min-height: 100vh;
            min-width: 100vw;
          }
          .navbar-mobile-overlay .close-x {
            position: absolute;
            top: 18px;
            right: 18px;
            font-size: 2.5rem;
            color: #374F6B;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 3100;
          }
          .navbar-mobile-overlay .mobile-menu-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            gap: 2.2rem;
            margin-top: 2.5rem;
          }
          .navbar-mobile-overlay a, .navbar-mobile-overlay button {
            font-size: 1.3rem;
            color: #f5f6fa;
            font-weight: 700;
            text-decoration: none;
            background: none;
            border: none;
            padding: 0.9rem 0;
            width: 90vw;
            max-width: 400px;
            text-align: center;
            border-radius: 8px;
            margin: 0 auto;
            display: block;
          }
          .navbar-mobile-overlay a.active {
            color: #374F6B;
            text-decoration: underline;
          }
          .navbar-mobile-overlay .mobile-puppy-btn {
            background: linear-gradient(135deg, #374F6B 60%, #223047 100%);
            color: #fff;
            font-size: 1.1rem;
            font-weight: 700;
            border-radius: 8px;
            border: 2px solid #374F6B;
            box-shadow: 0 2px 8px rgba(55,79,107,0.15);
            padding: 14px 0;
            margin: 2.2rem auto 0 auto;
            width: 90vw;
            max-width: 400px;
            text-align: center;
            display: block;
          }
        }
        @media (min-width: 701px) {
          .hamburger, .navbar-mobile-overlay { display: none !important; }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
      <div className="navbar-container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1400, margin: '0 auto', minHeight: 60, width: '100%'}}>
        {/* Social + Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <a href="https://www.instagram.com/blackjackmalinois/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/gallery/instagram.webp" alt="Instagram" style={{ width: 32, height: 32, borderRadius: 8, border: '2px solid #4169E1', background: '#fff' }} />
          </a>
          <a href="https://www.facebook.com/blackjackmalinois" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="/gallery/Facebook.webp" alt="Facebook" style={{ width: 32, height: 32, borderRadius: 8, border: '2px solid #4169E1', background: '#fff' }} />
          </a>
          <Link to="/" className="logo" style={{ textDecoration: 'none', marginLeft: 12, fontWeight: 900, fontSize: '1.5rem', color: '#4169E1', letterSpacing: 1 }}>
            Bl♣ckJ♣ck <span style={{ fontWeight: 700, fontSize: '1rem', color: '#4169E1', marginLeft: 4 }}>MALINOIS</span>
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button className="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(m => !m)}>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </button>
        {/* Desktop nav links */}
        <ul className="nav-links" style={{
          display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, fontSize: '1.2rem', fontFamily: navFont.fontFamily, fontWeight: 600, justifyContent: 'flex-end', height: '100%', transition: 'all 0.3s',
        }}>
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link to={link.to} style={{ ...navFont, color: location.pathname === link.to ? '#4169E1' : '#f5f6fa', textDecoration: location.pathname === link.to ? 'underline' : 'none', padding: '8px 12px', borderRadius: 8 }}>{link.label}</Link>
            </li>
          ))}
          <li>
            <a href="https://blackjackmalinois.com/" target="_blank" rel="noopener noreferrer" style={{ ...navFont, color: '#fff', fontWeight: 'bold', textDecoration: 'none', padding: '8px 12px', borderRadius: 8, background: 'linear-gradient(135deg, #4169E1, #000080)', fontSize: '1.05rem', border: '2px solid #4169E1', boxShadow: '0 4px 8px rgba(65, 105, 225, 0.2)', transition: 'all 0.3s', display: 'inline-block', textAlign: 'center', minWidth: 160 }}>Civilian looking for puppies</a>
          </li>
        </ul>
      </div>
      {/* Mobile overlay menu */}
      <div className="navbar-mobile-overlay" style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}>
        <button className="close-x" aria-label="Close menu" onClick={e => { e.stopPropagation(); setMenuOpen(false); }}>&times;</button>
        <div className="mobile-menu-links">
          {NAV_LINKS.map(link => (
            <Link key={link.to} to={link.to} className={location.pathname === link.to ? 'active' : ''} style={{ fontWeight: 700 }} onClick={e => { e.stopPropagation(); setMenuOpen(false); }}>{link.label}</Link>
          ))}
        </div>
        <a href="https://blackjackmalinois.com/" target="_blank" rel="noopener noreferrer" className="mobile-puppy-btn">Civilian looking for puppies</a>
      </div>
    </nav>
  );
};

export default Navbar; 