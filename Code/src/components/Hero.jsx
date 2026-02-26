import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Creative Graphic Designer Crafting <span className="text-primary">Impactful Visuals</span>
                    </h1>
                    <p className="hero-subtitle">
                        Hi, I’m <span className="text-primary">Nisha Prajapati</span> — a freelance graphic designer with 3 years of experience creating designs that help brands stand out.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">Hire Me</a>
                        <a href="/resume.pdf" className="btn btn-outline" download>
                            Download Resume <Download size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
                        </a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <img src="/images/profile/Profile.png" alt="Nisha Prajapati" className="hero-image" />
                    </div>
                </div>
            </div>

            <style>{`
        .hero-section {
          background: linear-gradient(135deg, #000000 0%, #1a0525 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 50px;
          padding-top: 60px; /* Navbar space if any */
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-grey);
          margin-bottom: 30px;
          max-width: 90%;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
        }
        
        .hero-image-container {
          position: relative;
          width: 400px;
          height: 400px;
          margin: 0 auto;
        }
        
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--primary);
          box-shadow: 0 0 30px rgba(159, 11, 225, 0.3);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-subtitle {
            margin: 0 auto 30px;
          }
          
          .hero-image-container {
            width: 300px;
            height: 300px;
            margin-top: 40px;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
