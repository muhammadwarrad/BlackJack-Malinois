import React from 'react';
import { useNavigate } from 'react-router-dom';

const DogCard = ({ dog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dog/${dog.id}`, { state: { dog } });
  };

  return (
    <div className="dog-card fade-in-up" onClick={handleClick} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <img src={dog.image} alt={dog.name} className="dog-image" />
      <div className="dog-info" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 className="dog-name">{dog.name}</h3>
        <p className="dog-breed">{dog.breed}</p>
        <p className="dog-description">{dog.description}</p>
        
        <div className="dog-stats">
          <div className="dog-stat">
            <span className="dog-stat-value">{dog.age}</span>
            <span className="dog-stat-label">Age</span>
          </div>
          <div className="dog-stat">
            <span className="dog-stat-value">{dog.gender}</span>
            <span className="dog-stat-label">Gender</span>
          </div>
          <div className="dog-stat">
            <span className="dog-stat-value">{dog.stats.trainingLevel}</span>
            <span className="dog-stat-label">Training</span>
          </div>
          <div className="dog-stat">
            <span className="dog-stat-value">{dog.stats.drive}</span>
            <span className="dog-stat-label">Drive</span>
          </div>
        </div>
        
        {/* Price and status row pinned to bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4169E1' }}>
            {dog.price}
          </div>
          {dog.status === 'Sold' ? (
            <div className="status-sold" style={{
              background: 'linear-gradient(135deg, #b71c1c, #e53935)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '0.9rem',
              boxShadow: '0 2px 4px rgba(183,28,28,0.2)'
            }}>
              Sold
            </div>
          ) : (
            <div className="status-available">
              {dog.status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogCard; 