import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <h2 className="section-title">Let’s Create Something <span className="text-primary">Amazing</span></h2>

                <div className="contact-wrapper">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>

                        <div className="form-group">
                            <label>Project Details</label>
                            <textarea placeholder="Tell me about your project..." rows="5"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} style={{ display: 'inline', marginLeft: '8px' }} />
                        </button>
                    </form>

                    <div className="contact-info">
                        {/* Optional additional info could go here */}
                    </div>
                </div>
            </div>

            <style>{`
        .contact-section {
          background-color: var(--bg-black);
          text-align: center;
        }
        
        .contact-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-form {
          text-align: left;
          background: #111;
          padding: 40px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-grey);
          font-size: 0.9rem;
        }
        
        .form-group input, 
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          background: #000;
          border: 1px solid #333;
          border-radius: 8px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }
        
        .form-group input:focus, 
        .form-group textarea:focus {
          border-color: var(--primary);
          outline: none;
        }
        
        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
        </section>
    );
};

export default Contact;
