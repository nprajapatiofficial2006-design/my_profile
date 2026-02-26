import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// For a real dynamic implementation using Vite, we would use:
// const images = import.meta.glob('/public/images/work/*/*', { eager: true });
// However, since we are setting up the structure without actual files yet,
// we will simulate the file discovery.

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    // Categories as per requirements
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'social-media', label: 'Social Media' },
        { id: 'visiting-card', label: 'Visiting Card' },
        { id: 'ppt-design', label: 'PPT Design' },
        { id: 'booklet', label: 'Booklet' },
        { id: 'banner', label: 'Banner' },
        { id: 'linkedin', label: 'LinkedIn' },
        { id: 'resume', label: 'Resume' },
    ];

    // Placeholder data - In a real scenario with auto-load, we would map the filenames from the glob result
    // to this structure.
    const projects = [
        { id: 1, title: 'Instagram Campaign', category: 'social-media', image: '/images/work/social-media/placeholder.jpg' },
        { id: 2, title: 'Corporate Identity', category: 'visiting-card', image: '/images/work/visiting-card/placeholder.jpg' },
        { id: 3, title: 'Investor Pitch', category: 'ppt-design', image: '/images/work/ppt-design/placeholder.jpg' },
        { id: 4, title: 'Product Catalog', category: 'booklet', image: '/images/work/booklet/placeholder.jpg' },
        { id: 5, title: 'Event Banner', category: 'banner', image: '/images/work/banner/placeholder.jpg' },
        { id: 6, title: 'Profile Makeover', category: 'linkedin', image: '/images/work/linkedin/placeholder.jpg' },
        { id: 7, title: 'Professional Resume', category: 'resume', image: '/images/work/resume/placeholder.jpg' },
        // Duplicate for grid effect
        { id: 8, title: 'Facebook Ads', category: 'social-media', image: '/images/work/social-media/placeholder.jpg' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="portfolio" className="section-padding portfolio-section">
            <div className="container">
                <h2 className="section-title">My Work</h2>

                <div className="filters">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                            onClick={() => setFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="portfolio-item">
                            <div className="portfolio-image-container">
                                {/* Using a colored div as placeholder if image fails, to keep it looking good */}
                                <div className="placeholder-bg"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="portfolio-image"
                                    onError={(e) => { e.target.style.display = 'none' }}
                                />
                            </div>
                            <div className="portfolio-overlay">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-category">{categories.find(c => c.id === project.category)?.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .portfolio-section {
          background-color: var(--bg-dark-grey);
        }
        
        .filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
        }
        
        .filter-btn {
          background: transparent;
          color: var(--text-grey);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 20px;
          transition: var(--transition);
        }
        
        .filter-btn:hover, .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 4px 10px rgba(159, 11, 225, 0.3);
        }
        
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .portfolio-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
        }
        
        .portfolio-image-container {
          width: 100%;
          height: 100%;
          background: #333; /* Fallback */
        }
        
        .placeholder-bg {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          transition: transform 0.5s ease;
        }
        
        .portfolio-item:hover .portfolio-image {
          transform: scale(1.1);
        }
        
        .portfolio-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          padding: 20px;
          z-index: 3;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          opacity: 0;
        }
        
        .portfolio-item:hover .portfolio-overlay {
          transform: translateY(0);
          opacity: 1;
        }
        
        .project-title {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 5px;
        }
        
        .project-category {
          color: var(--primary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
        </section>
    );
};

export default Portfolio;
