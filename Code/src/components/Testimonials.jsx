import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "Nisha is an incredibly talented designer. She understood our brand vision immediately and delivered designs that exceeded our expectations.",
            name: "Rahul Sharma",
            role: "Marketing Director, TechFlow"
        },
        {
            id: 2,
            text: "Professional, creative, and timely. The presentation desk she designed for our investor meeting was a game changer.",
            name: "Priya Patel",
            role: "Founder, GreenEarth"
        },
        {
            id: 3,
            text: "I hired Nisha for a LinkedIn revamp and the results were instant. My profile looks so much more professional now.",
            name: "Amit Kumar",
            role: "Sales Executive"
        }
    ];

    return (
        <section id="testimonials" className="section-padding testimonials-section">
            <div className="container">
                <h2 className="section-title">Client Feedback</h2>

                <div className="testimonials-grid">
                    {testimonials.map(item => (
                        <div key={item.id} className="testimonial-card">
                            <Quote className="quote-icon" size={40} />
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.name.charAt(0)}</div>
                                <div className="author-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-section {
          background-color: var(--bg-dark-grey);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .testimonial-card {
          background: rgba(0,0,0,0.2);
          padding: 40px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        
        .quote-icon {
          color: var(--primary);
          margin-bottom: 20px;
          opacity: 0.5;
        }
        
        .testimonial-text {
          font-style: italic;
          color: #ddd;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .author-avatar {
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .author-info h4 {
          font-size: 1.1rem;
          margin-bottom: 2px;
        }
        
        .author-info span {
          font-size: 0.85rem;
          color: var(--text-grey);
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
