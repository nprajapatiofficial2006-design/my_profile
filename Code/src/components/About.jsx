import React from 'react';
import { Clock, Star, Award, UserCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-description">
                            I am a <span className="text-primary">freelance graphic designer</span> with 3 years of experience in digital and print design. I focus on creating clean, creative, and result-driven visuals for brands and professionals. I believe in the power of visual storytelling to elevate business identities.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <Clock className="stat-icon" size={32} />
                                <h3>3+ Years</h3>
                                <p>Experience</p>
                            </div>
                            <div className="stat-card">
                                <Star className="stat-icon" size={32} />
                                <h3>Creative</h3>
                                <p>& Detail-Oriented</p>
                            </div>
                            <div className="stat-card">
                                <Award className="stat-icon" size={32} />
                                <h3>On-Time</h3>
                                <p>Delivery</p>
                            </div>
                            <div className="stat-card">
                                <UserCheck className="stat-icon" size={32} />
                                <h3>100% Client</h3>
                                <p>Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .about-section {
          background-color: var(--bg-dark-grey);
        }
        
        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 50px;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background-color: var(--primary);
          margin: 15px auto 0;
          border-radius: 2px;
        }
        
        .about-description {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 50px;
          text-align: center;
          color: var(--text-grey);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }
        
        .stat-card {
          background: rgba(0, 0, 0, 0.3);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }
        
        .stat-icon {
          color: var(--primary);
          margin-bottom: 15px;
        }
        
        .stat-card h3 {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }
        
        .stat-card p {
          color: var(--text-grey);
          font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default About;
