import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

const Resume = () => {
    return (
        <section id="resume" className="section-padding resume-section">
            <div className="container">
                <h2 className="section-title">Resume</h2>

                <div className="resume-grid">
                    {/* Experience Column */}
                    <div className="resume-col">
                        <h3 className="col-title">Experience</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-date">2021 - Present</span>
                                <h4 className="timeline-role">Freelance Graphic Designer</h4>
                                <p className="timeline-desc">
                                    Working with diverse clients to create high-impact visuals, branding materials, and digital assets. specialized in social media and print design.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-date">2020 - 2021</span>
                                <h4 className="timeline-role">Junior Graphic Designer</h4>
                                <p className="timeline-desc">
                                    Assisted in creating marketing collateral and social media posts for local businesses.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Column */}
                    <div className="resume-col">
                        <h3 className="col-title">Software Skills</h3>
                        <div className="skills-list">
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Adobe Photoshop</span>
                                    <span>95%</span>
                                </div>
                                <div className="skill-bar"><div className="skill-fill" style={{ width: '95%' }}></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Adobe Illustrator</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Figma</span>
                                    <span>85%</span>
                                </div>
                                <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>Canva</span>
                                    <span>100%</span>
                                </div>
                                <div className="skill-bar"><div className="skill-fill" style={{ width: '100%' }}></div></div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-info">
                                    <span>PowerPoint</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill-bar"><div className="skill-fill" style={{ width: '90%' }}></div></div>
                            </div>
                        </div>

                        <div className="resume-action">
                            <a href="/resume.pdf" className="btn btn-primary" download>
                                Download Full Resume <Download size={18} style={{ display: 'inline', marginLeft: '6px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .resume-section {
          background-color: var(--bg-black);
        }
        
        .resume-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        
        .col-title {
          font-size: 1.8rem;
          margin-bottom: 30px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        /* Timeline */
        .timeline {
          position: relative;
          border-left: 2px solid rgba(159, 11, 225, 0.3);
          padding-left: 30px;
        }
        
        .timeline-item {
          margin-bottom: 40px;
          position: relative;
        }
        
        .timeline-dot {
          position: absolute;
          left: -37px;
          top: 0;
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
        }
        
        .timeline-date {
          display: inline-block;
          background: rgba(159, 11, 225, 0.1);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.85rem;
          margin-bottom: 10px;
          font-weight: 500;
        }
        
        .timeline-role {
          font-size: 1.4rem;
          margin-bottom: 10px;
        }
        
        .timeline-desc {
          color: var(--text-grey);
          font-size: 0.95rem;
        }
        
        /* Skills */
        .skill-item {
          margin-bottom: 25px;
        }
        
        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .skill-bar {
          height: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-fill {
          height: 100%;
          background: var(--primary);
          border-radius: 4px;
        }
        
        .resume-action {
          margin-top: 40px;
        }
        
        @media (max-width: 768px) {
          .resume-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
        </section>
    );
};

export default Resume;
