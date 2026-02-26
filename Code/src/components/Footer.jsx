import React from 'react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Nisha Prajapati</h3>
                    <p>Freelance Graphic Designer</p>
                </div>

                <div className="social-links">
                    <a href="#" className="social-icon"><Instagram size={20} /></a>
                    <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    <a href="#" className="social-icon"><Twitter size={20} /></a>
                    <a href="mailto:example@email.com" className="social-icon"><Mail size={20} /></a>
                </div>

                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Designed by Nisha Prajapati</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: #000;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 50px 0 30px;
          text-align: center;
        }
        
        .footer-brand h3 {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }
        
        .footer-brand p {
          color: var(--text-grey);
          font-size: 0.9rem;
          margin-bottom: 25px;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 25px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          color: white;
        }
        
        .social-icon:hover {
          background: var(--primary);
          transform: translateY(-3px);
        }
        
        .copyright {
          border-top: 1px solid #111;
          padding-top: 20px;
          color: #555;
          font-size: 0.8rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
