import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// For a real dynamic implementation using Vite, we would use:
// const images = import.meta.glob('/public/images/work/*/*', { eager: true });
// However, since we are setting up the structure without actual files yet,
// we will simulate the file discovery.

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [activePdf, setActivePdf] = useState(null);

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
    // Social Media
    { id: 101, title: 'Allura Post', category: 'social-media', image: '/images/work/social-media/Allura Post.png' },
    { id: 102, title: 'Beauty Cosmetic Post', category: 'social-media', image: '/images/work/social-media/Beauty Cosmetic Post.png' },
    { id: 103, title: 'Femina Miss India UP Post', category: 'social-media', image: '/images/work/social-media/Femina Miss India UP Post.png' },
    { id: 104, title: 'Generic Bharat Post', category: 'social-media', image: '/images/work/social-media/Generic Bharat Post.png' },
    { id: 105, title: 'Gir Valley Story', category: 'social-media', image: '/images/work/social-media/Gir Valley Story.png' },
    { id: 106, title: 'Goyal Brother Story', category: 'social-media', image: '/images/work/social-media/Goyal Brother Story.png' },
    { id: 107, title: 'Goyal Brothers Post', category: 'social-media', image: '/images/work/social-media/Goyal Brothers Post.png' },
    { id: 108, title: 'Gri Valley Post', category: 'social-media', image: '/images/work/social-media/Gri Valley Post.png' },
    { id: 109, title: 'Kunj Urban Post', category: 'social-media', image: '/images/work/social-media/Kunj Urban Post.png' },
    { id: 110, title: 'Saingo Travelers Post', category: 'social-media', image: '/images/work/social-media/Saingo Travelers Post.png' },
    { id: 111, title: 'Trainscafe Post', category: 'social-media', image: '/images/work/social-media/Trainscafe Post.png' },

    // Visiting Card
    { id: 200, title: 'Allura Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Allura Visiting Card.png' },
    { id: 201, title: 'Beauty Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Beauty Visiting Card.png' },
    { id: 202, title: 'Ganesh Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Ganesh Visiting Card.jpg' },
    { id: 203, title: 'Pawan Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Pawan Viting Card.png' },
    { id: 204, title: 'Resturant Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Resturant Visiting Card.png' },
    { id: 205, title: 'Shivendra Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Shivendra Visiting Card.jpg' },
    { id: 206, title: 'Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Visiting Card.png' },
    { id: 207, title: 'Yoyomiles Visiting Card', category: 'visiting-card', image: '/images/work/visiting-card/Yoyomiles Visiting Card.png' },
    { id: 208, title: 'Hireprow Id Card', category: 'visiting-card', image: '/images/work/visiting-card/Hireprow ID Card PDF.jpeg', pdf: '/images/work/visiting-card/Hireprow Id Card.pdf' },

    // Banner
    { id: 401, title: 'Allura Sanitary', category: 'banner', image: '/images/work/banner/Allura Sanitary FB.png' },
    { id: 402, title: 'DR. Saurabh', category: 'banner', image: '/images/work/banner/DR.Saurabh FB.png' },
    { id: 403, title: 'Femina Miss India UP', category: 'banner', image: '/images/work/banner/Femina Miss India UP FB.png' },
    { id: 404, title: 'Little Heart', category: 'banner', image: '/images/work/banner/Little Heart FB.png' },
    { id: 405, title: 'SVS Foundation', category: 'banner', image: '/images/work/banner/SVS foundation FB.png' },
    { id: 406, title: 'Yoyomiles', category: 'banner', image: '/images/work/banner/Yoyomiles FB.png' },

    // Booklet
    { id: 501, title: 'Allura Pads Booklet', category: 'booklet', image: '/images/work/booklet/Allura Booklet PDF.png', pdf: '/images/work/booklet/Allura Pads Booklet Design.pdf' },
    { id: 502, title: 'Story Book Cover', category: 'booklet', image: '/images/work/booklet/Story book Cover.png' },
    { id: 503, title: 'Book Cover Design', category: 'booklet', image: '/images/work/booklet/Book Cover Design.png' },

    // LinkedIn
    { id: 601, title: 'Linkedin Post', category: 'linkedin', image: '/images/work/linkedin/Linkedin Post.png' },
    { id: 602, title: 'Linkedin Profile Cover', category: 'linkedin', image: '/images/work/linkedin/linkedin Profile Cover.png' },

    // Presentation
    { id: 701, title: 'SVS Foundation Design', category: 'ppt-design', image: '/images/work/ppt-design/SVS Foundation PDF.png', pdf: '/images/work/ppt-design/SVS Foundation Design.pdf' },

    // Resume
    { id: 301, title: 'Krunal Resume', category: 'resume', image: '/images/work/resume/Krunal Resume.png' },
    { id: 302, title: 'Urja Schdev Resume', category: 'resume', image: '/images/work/resume/Urja Schdev Resume.png' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const handleProjectClick = (project) => {
    if (project.pdf) {
      setActivePdf(project.pdf);
    }
  };

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
            <div
              key={project.id}
              className="portfolio-item"
              onClick={() => handleProjectClick(project)}
            >
              <div className="portfolio-image-container">
                <div className="placeholder-bg"></div>
                {project.image.endsWith('.pdf') ? (
                  <div className="pdf-thumbnail-placeholder">
                    <span>PDF Document</span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                )}
              </div>
              <div className="portfolio-overlay">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{categories.find(c => c.id === project.category)?.label}</span>
                {project.pdf && (
                  <span className="pdf-badge">Full PDF Available</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activePdf && (
        <div className="pdf-modal" onClick={() => setActivePdf(null)}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-pdf" onClick={() => setActivePdf(null)}>&times;</button>
            <iframe
              src={activePdf}
              title="PDF Viewer"
              className="pdf-iframe"
            ></iframe>
          </div>
        </div>
      )}

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

        .pdf-badge {
          margin-top: 8px;
          background: var(--primary);
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          width: fit-content;
        }

        .pdf-thumbnail-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          z-index: 2;
          background: rgba(0,0,0,0.5);
        }

        /* PDF Modal Styles */
        .pdf-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .pdf-modal-content {
          width: 95%;
          height: 95%;
          background: white;
          border-radius: 12px;
          position: relative;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .close-pdf {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 2.5rem;
          color: #333;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          line-height: 44px;
          text-align: center;
          cursor: pointer;
          z-index: 2001;
          border: none;
          transition: var(--transition);
        }

        .close-pdf:hover {
          color: var(--primary);
          background: white;
          transform: rotate(90deg);
        }

        @media (max-width: 768px) {
          .pdf-modal-content {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
