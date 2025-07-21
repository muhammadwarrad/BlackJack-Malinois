import React, { useState } from 'react';
import DogCard from './DogCard';
import { dogs } from '../data/dogs';

const DogsList = () => {
  const [filter, setFilter] = useState('all');

  const filteredDogs = dogs.filter(dog => {
    if (filter === 'all') return true;
    if (filter === 'males') return dog.gender === 'Male';
    if (filter === 'females') return dog.gender === 'Female';
    return true;
  });

  return (
    <section className="dogs-section">
      <div className="container">
        <h2 className="section-title">Available Police K-9 Units</h2>
        
        <div style={{ 
          textAlign: 'center', 
          fontSize: '1.2rem', 
          marginBottom: '3rem',
          color: 'white',
          maxWidth: '800px',
          margin: '0 auto 3rem auto'
        }}>
          <p style={{ marginBottom: '2rem' }}>
            Our Belgian Malinois are specifically bred and trained for law enforcement work. 
            Each dog is evaluated for drive, temperament, and working ability to ensure they 
            meet the rigorous standards required for police K-9 units.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            All dogs come with health certifications, training records, and are guaranteed 
            to meet law enforcement standards. Contact us for detailed information about 
            each available K-9 unit.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-all-selected' : 'btn-secondary'}`}
            style={{ minWidth: '120px' }}
          >
            All Dogs
          </button>
          <button 
            onClick={() => setFilter('males')}
            className={`btn ${filter === 'males' ? 'btn-male-selected' : 'btn-secondary'}`}
            style={{ minWidth: '120px' }}
          >
            Males
          </button>
          <button 
            onClick={() => setFilter('females')}
            className={`btn ${filter === 'females' ? 'btn-female-selected' : 'btn-secondary'}`}
            style={{ minWidth: '120px' }}
          >
           Females
          </button>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(65, 105, 225, 0.1)', 
          padding: '2rem', 
          borderRadius: '15px', 
          marginBottom: '3rem',
          border: '2px solid #4169E1'
        }}>
          <h3 style={{ color: '#4169E1', marginBottom: '1rem', textAlign: 'center' }}>
            🛡️ Back the Blue - Law Enforcement K-9 Units
          </h3>
          <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            Our dogs are trained to the highest standards for police work. Each K-9 unit 
            is carefully selected and prepared to serve alongside law enforcement officers 
            in protecting our communities.
          </p>
        </div>

        {filteredDogs.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: '15px',
            border: '2px solid #4169E1'
          }}>
            <h3 style={{ color: '#4169E1', marginBottom: '1rem' }}>
              No dogs available in this category
            </h3>
            <p>Please check back soon or contact us for current availability.</p>
          </div>
        ) : (
          <div className="dogs-grid">
            {filteredDogs.map((dog, index) => (
              <DogCard key={index} dog={dog} />
            ))}
          </div>
        )}

        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          border: '2px solid #4169E1'
        }}>
          <h3 style={{ color: '#4169E1', marginBottom: '1rem' }}>
            Ready to Add a K-9 to Your Department?
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Contact us for detailed information about our available K-9 units, 
            training programs, and department consultation services.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us for Availability
          </a>
        </div>
      </div>
    </section>
  );
};

export default DogsList; 