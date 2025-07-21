import React from 'react';

const images = [
  {
    src: '/gallery/award-dog.jpg',
    alt: 'Belgian Malinois with awards',
    caption: 'Award-Winning Belgian Malinois'
  },
  {
    src: '/gallery/obedience.jpg',
    alt: 'Handler training with Belgian Malinois',
    caption: 'Expert Handler Training'
  },
  {
    src: '/gallery/k9-team.jpg',
    alt: 'K-9 law enforcement team',
    caption: 'Trusted by Law Enforcement'
  }
];

const HomeGallery = () => (
  <section className="home-gallery-section">
    <div className="container">
      <div className="home-gallery-grid">
        <div className="home-gallery-large">
          <img src={images[0].src} alt={images[0].alt} />
          <div className="home-gallery-caption">{images[0].caption}</div>
        </div>
        <div className="home-gallery-column">
          <div className="home-gallery-small">
            <img src={images[1].src} alt={images[1].alt} />
            <div className="home-gallery-caption">{images[1].caption}</div>
          </div>
          <div className="home-gallery-small">
            <img src={images[2].src} alt={images[2].alt} />
            <div className="home-gallery-caption">{images[2].caption}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeGallery; 