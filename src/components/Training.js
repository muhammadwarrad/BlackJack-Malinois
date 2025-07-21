import React from 'react';
import { Link } from 'react-router-dom';

const Training = () => {
  const trainingPrograms = [
    {
      title: "2-Week Handler Course",
      description: "Condensed version for single purpose teams or those needing a refresher before recertification. Focused on essential handling skills and certification preparation.",
      duration: "2 weeks",
      price: "$4,500",
      features: ["Essential handling skills", "Certification prep", "Single purpose training", "Refresher course"]
    },
    {
      title: "4-Week Handler Course",
      description: "Standard handler training program with comprehensive instruction. Perfect for new K-9 teams and agencies requiring thorough preparation.",
      duration: "4 weeks",
      price: "$7,500",
      features: ["Comprehensive training", "NNDDA certification", "Health & emergency care", "Legal updates"]
    },
    {
      title: "6-Week Handler Course",
      description: "Extended training program for multi-purpose K-9 teams. Includes advanced techniques and specialized training modules.",
      duration: "6 weeks",
      price: "$10,500",
      features: ["Multi-purpose training", "Advanced techniques", "Specialized modules", "Extended certification"]
    },
    {
      title: "8-Week Handler Course",
      description: "Complete trainer's handler course for those wanting to participate in advanced training. Our most comprehensive program.",
      duration: "8 weeks",
      price: "$13,500",
      features: ["Trainer development", "Problem solving skills", "Advanced certification", "Complete preparation"]
    },
    {
      title: "Puppy Development Program",
      description: "Internal puppy development program for agencies with existing infrastructure. We provide guidance and support for your breeding program.",
      duration: "Ongoing",
      price: "$2,500/month",
      features: ["Breeding guidance", "Puppy development", "Health monitoring", "Training support"]
    },
    {
      title: "Maintenance Training",
      description: "Ongoing training and skill maintenance for existing K-9 teams to ensure peak performance and certification compliance.",
      duration: "Ongoing",
      price: "$2,500/month",
      features: ["Skill maintenance", "Certification renewal", "Performance evaluation", "Advanced techniques"]
    }
  ];

  return (
    <section className="training-section">
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>Blackjack Malinois Police K9 Handlers Course</h2>
        
        <div style={{ 
          textAlign: 'center', 
          fontSize: '1.2rem', 
          marginBottom: '3rem',
          color: '#bdc3c7',
          maxWidth: '1000px',
          margin: '0 auto 3rem auto'
        }}>
          <p style={{ marginBottom: '2rem' }}>
            We offer a 2, 4, 6, or 8 week handlers course that is tailored to your agency's specific needs. Together our instructors have over 40 years combined working dog experience and 15 years of Law Enforcement K-9 experience.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Additionally, we host guest speakers who are subject matter experts in their respective fields throughout the course. A licensed Veterinarian covers the K-9 health and emergency care portion of our course and a practicing criminal attorney covers the K-9 law and legal update portion of our course.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Upon completion of our course, our teams are certified through a 3rd party NNDDA certifier. While unforeseen challenges can and do arise, we work with agencies to ensure every dog and handler is ready for certification, even if it means we extend the course a bit for those teams needing the extra time. <strong>All K-9 teams are guaranteed to certify upon completion of our course.</strong>
          </p>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          padding: '2rem', 
          borderRadius: '15px', 
          marginBottom: '3rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem', textAlign: 'center' }}>
            Our Course Ensures Success
          </h3>
          <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            Our course ensures that your new K-9 team is an asset to your agency instead of a liability. Not only are we preparing our students to be proficient handlers but we encourage them to strive to be trainers while developing their essential problem solving skills that will assist your agency for years to come.
          </p>
        </div>
        
        <div className="training-grid">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="training-card fade-in-up">
              <h3>{program.title}</h3>
              <p style={{ marginBottom: '1rem' }}>{program.description}</p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <span><strong>Duration:</strong> {program.duration}</span>
                <span><strong>Price:</strong> {program.price}</span>
              </div>
              
              <div>
                <strong>Program Features:</strong>
                <ul style={{ 
                  marginTop: '0.5rem', 
                  paddingLeft: '1.5rem',
                  listStyle: 'disc'
                }}>
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
            Course Guarantee
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>All K-9 teams are guaranteed to certify upon completion of our course.</strong> We work with agencies to ensure every dog and handler is ready for certification, even if it means we extend the course for those teams needing extra time.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Request Course Information
          </Link>
        </div>

        <div style={{ 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'rgba(65, 105, 225, 0.1)',
          borderRadius: '15px',
          border: '2px solid #4169E1',
          cursor: 'default'
        }}>
          <h3 style={{ 
            color: '#4169E1', 
            marginBottom: '1rem', 
            textAlign: 'center',
            userSelect: 'none',
            pointerEvents: 'none'
          }}>
            🛡️ Back the Blue - Supporting Law Enforcement
          </h3>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem',
            userSelect: 'none',
            pointerEvents: 'none'
          }}>
            We are committed to providing law enforcement agencies with the highest quality K-9 units and training programs. Our mission is to ensure every officer has the tools they need to serve and protect their communities safely and effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training; 