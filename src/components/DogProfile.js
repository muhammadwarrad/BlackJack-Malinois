import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { dogs } from '../data/dogs';

const DogProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get dog data from location state or find by ID
  const dog = location.state?.dog || dogs.find(d => d.id === parseInt(id));
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Extended images for each dog (using the Malimages)
  const dogImages = [
    dog?.image || "/Malimages/Blackjack's Hummer.jpg",
    "/Malimages/Blackjack's Nikki.jpeg",
    "/Malimages/Blackjacks Tank.jpg",
    "/Malimages/Danger.jpeg"
  ];

  if (!dog) {
    return (
      <div style={{ 
        paddingTop: '120px', 
        textAlign: 'center', 
        color: 'white',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a, #2c3e50)'
      }}>
        <h2>Dog not found</h2>
        <button onClick={() => navigate('/dogs')} className="btn btn-primary">
          Back to Dogs
        </button>
      </div>
    );
  }

  const extendedDescription = {
    "Rex": `Rex is an exceptional Belgian Malinois with outstanding working capabilities. At 3 years old, he has reached peak physical and mental maturity, making him ideal for law enforcement applications. His high drive and exceptional tracking abilities make him perfect for narcotics detection and patrol work.

Rex has been extensively trained in multiple disciplines including building searches, area searches, tracking, and apprehension work. His temperament is perfectly suited for law enforcement - he's confident, focused, and maintains excellent handler focus even in high-stress situations.

His training includes:
• Narcotics detection certification
• Building search and apprehension
• Area search and tracking
• Handler protection
• Obedience and control work

Rex has been health tested and certified for law enforcement work. He comes with complete medical records, training documentation, and health guarantees. His drive level is consistently high, making him an excellent choice for active police work.`,
    
    "Athena": `Athena is a remarkable female Belgian Malinois with exceptional multi-purpose training. At 2.5 years old, she combines youthful energy with mature focus, making her perfect for immediate deployment in law enforcement.

Her training encompasses patrol work, tracking, and apprehension with specialized skills in detection work. Athena's work ethic is exceptional - she maintains focus for extended periods and shows excellent problem-solving abilities in the field.

Her specialized training includes:
• Multi-purpose patrol work
• Advanced tracking techniques
• Building and area searches
• Detection work (narcotics/explosives)
• Handler protection and control

Athena has been extensively socialized and tested in various environments. She performs exceptionally well in both urban and rural settings, making her versatile for different law enforcement applications.`,
    
    "Thor": `Thor is a seasoned veteran Belgian Malinois with proven law enforcement experience. At 4 years old, he brings maturity and reliability that's invaluable for police departments seeking a dependable K-9 partner.

His extensive background includes successful deployments in various law enforcement scenarios. Thor's experience makes him particularly valuable for departments that need a dog ready for immediate, reliable service without the training period required for younger dogs.

His proven capabilities include:
• Building searches and suspect apprehension
• Area searches and tracking
• Crowd control and protection work
• Handler protection and control
• Public demonstration and community relations

Thor's temperament is rock-solid - he's confident, stable, and predictable in all situations. His experience makes him an excellent choice for departments that need immediate deployment capability.`,
    
    "Luna": `Luna is a specialized detection dog with exceptional scent discrimination abilities. At 3.5 years old, she has been extensively trained for explosives detection and search operations, making her perfect for specialized law enforcement applications.

Her calm demeanor under pressure makes her ideal for high-stress situations where detection accuracy is critical. Luna's specialized training focuses on precision detection work rather than apprehension, making her perfect for agencies that need specialized detection capabilities.

Her specialized training includes:
• Explosives detection certification
• Precise scent discrimination
• Building and vehicle searches
• Area search and detection
• Handler protection and control

Luna's calm temperament and exceptional detection abilities make her perfect for specialized law enforcement applications where precision and reliability are paramount.`,
    
    "Max": `Max is a young, energetic Belgian Malinois with exceptional potential for long-term law enforcement service. At 2 years old, he combines youthful drive with solid foundation training, making him perfect for departments looking to develop a K-9 partnership.

His strong prey drive and natural working abilities make him ideal for patrol and tracking work. Max shows exceptional potential for advanced training and could easily progress to specialized detection work with additional training.

His current training includes:
• Basic patrol work and obedience
• Tracking and area searches
• Building search foundation
• Handler protection basics
• Socialization and public exposure

Max's youth and energy make him perfect for departments that want to develop a long-term K-9 partnership. His potential for advanced training makes him an excellent investment for the future.`,
    
    "Zara": `Zara is a multi-purpose detection dog trained for both narcotics and explosives detection. At 3 years old, she has reached the perfect balance of experience and energy for law enforcement work.

Her strong work ethic and excellent handler focus make her ready for immediate deployment. Zara's training encompasses both detection and patrol work, making her versatile for various law enforcement applications.

Her comprehensive training includes:
• Narcotics detection certification
• Explosives detection certification
• Building and vehicle searches
• Area search and tracking
• Handler protection and control

Zara's versatility makes her perfect for departments that need multi-purpose capabilities. Her strong work ethic and handler focus ensure reliable performance in all situations.`,
    
    "Kane": `Kane is an experienced patrol and tracking dog with extensive law enforcement background. At 4.5 years old, he brings proven reliability and extensive field experience that's invaluable for police departments.

His background includes successful deployments in various law enforcement scenarios, making him particularly valuable for departments that need immediate, proven capability. Kane's experience makes him an excellent choice for departments that need reliable, immediate deployment.

His proven capabilities include:
• Building searches and suspect apprehension
• Area searches and tracking
• Crowd control and protection work
• Handler protection and control
• Public demonstration and community relations

Kane's extensive experience and proven reliability make him perfect for departments that need immediate deployment capability without the training period required for younger dogs.`,
    
    "Nova": `Nova is a high-drive working dog with exceptional tracking abilities. At 2.5 years old, she combines youthful energy with solid foundation training, making her perfect for law enforcement applications.

Her training focuses on narcotics detection and patrol work, with excellent temperament for law enforcement applications. Nova's drive and focus make her ideal for active police work where reliability and performance are critical.

Her training includes:
• Narcotics detection certification
• Patrol work and obedience
• Building and area searches
• Tracking and apprehension
• Handler protection and control

Nova's high drive and excellent temperament make her perfect for departments that need reliable, high-performance K-9 capabilities. Her youth and energy ensure many years of productive service.`
  };

  return (
    <div style={{ 
      paddingTop: '120px', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
      color: 'white'
    }}>
      <div className="container">
        <button 
          onClick={() => navigate('/dogs')} 
          className="btn btn-secondary"
          style={{ marginBottom: '2rem' }}
        >
          ← Back to Dogs
        </button>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Image Gallery */}
          <div>
            <div style={{ 
              position: 'relative',
              borderRadius: '15px',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <img 
                src={dogImages[currentImageIndex]} 
                alt={dog.name}
                style={{ 
                  width: '100%', 
                  height: '400px', 
                  objectFit: 'contain',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}
              />
            </div>
            
            {/* Thumbnail Navigation */}
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              {dogImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${dog.name} ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{ 
                    width: '80px', 
                    height: '60px', 
                    objectFit: 'contain',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: index === currentImageIndex ? '2px solid #4169E1' : '2px solid transparent',
                    opacity: index === currentImageIndex ? 1 : 0.7,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Dog Information */}
          <div>
            <h1 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1rem',
              color: '#4169E1'
            }}>
              {dog.name}
            </h1>
            
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              marginBottom: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: '#4169E1', marginBottom: '1rem' }}>Basic Information</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <strong>Breed:</strong> {dog.breed}
                </div>
                <div>
                  <strong>Age:</strong> {dog.age}
                </div>
                <div>
                  <strong>Gender:</strong> {dog.gender}
                </div>
                <div>
                  <strong>Training Level:</strong> {dog.stats.trainingLevel}
                </div>
                <div>
                  <strong>Drive:</strong> {dog.stats.drive}
                </div>
                <div>
                  <strong>Temperament:</strong> {dog.stats.temperament}
                </div>
                <div>
                  <strong>Health:</strong> {dog.stats.health}
                </div>
                <div>
                  <strong>Status:</strong> {dog.status}
                </div>
              </div>
            </div>

            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#4169E1',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              {dog.price}
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginBottom: '1rem' }}
              onClick={() => navigate('/contact', { 
                state: { 
                  selectedDog: dog.name,
                  dogInfo: `${dog.name} - ${dog.breed} - ${dog.price}`
                }
              })}
            >
              Contact Us About {dog.name}
            </button>
          </div>
        </div>

        {/* Extended Description */}
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '3rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ color: '#4169E1', marginBottom: '1.5rem' }}>
            Detailed Profile - {dog.name}
          </h2>
          <div style={{ 
            lineHeight: '1.8',
            fontSize: '1.1rem',
            whiteSpace: 'pre-line'
          }}>
            {extendedDescription[dog.name] || dog.description}
          </div>
        </div>

        {/* Training Certifications */}
        <div style={{ 
          backgroundColor: 'rgba(65, 105, 225, 0.1)',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '3rem',
          border: '2px solid #4169E1'
        }}>
          <h3 style={{ color: '#4169E1', marginBottom: '1rem', textAlign: 'center' }}>
            🛡️ Law Enforcement Certified
          </h3>
          <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            {dog.name} has been trained and certified according to national law enforcement standards. 
            All training programs meet or exceed industry requirements for police K-9 units.
          </p>
        </div>

        {/* Contact Section */}
        <div style={{ 
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ color: '#4169E1', marginBottom: '1rem' }}>
            Ready to Add {dog.name} to Your Department?
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Contact us for detailed information about {dog.name}, training programs, and department consultation services.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/contact', { 
              state: { 
                selectedDog: dog.name,
                dogInfo: `${dog.name} - ${dog.breed} - ${dog.price}`
              }
            })}
          >
            Request Information About {dog.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DogProfile; 