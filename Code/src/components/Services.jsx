import React from 'react';
import { Palette, Share2, FileText, Monitor, Linkedin, Briefcase, Image } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Social Media Graphics",
            desc: "Engaging posts & stories to boost your online presence.",
            icon: <Share2 size={32} />
        },
        {
            title: "Visiting Card Design",
            desc: "Professional business cards that make a lasting impression.",
            icon: <Briefcase size={32} />
        },
        {
            title: "PPT / Presentation",
            desc: "Clean & modern slides for impactful presentations.",
            icon: <Monitor size={32} />
        },
        {
            title: "Booklet Design",
            desc: "Creative layouts for magazines, brochures, and booklets.",
            icon: <FileText size={32} />
        },
        {
            title: "Banner Design",
            desc: "Eye-catching banners for web and print advertising.",
            icon: <Image size={32} />
        },
        {
            title: "LinkedIn Revamp",
            desc: "Profile optimization with custom banners and headlines.",
            icon: <Linkedin size={32} />
        },
        {
            title: "Resume Design",
            desc: "ATS-friendly and visually appealing resume layouts.",
            icon: <FileText size={32} />
        }
    ];

    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <h2 className="section-title">My Services</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .services-section {
          background-color: var(--bg-black);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: #111;
          padding: 40px 30px;
          border-radius: 12px;
          transition: var(--transition);
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(159, 11, 225, 0.15);
        }

        .service-icon {
          color: var(--primary);
          margin-bottom: 25px;
          background: rgba(159, 11, 225, 0.1);
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: var(--transition);
        }

        .service-card:hover .service-icon {
          background: var(--primary);
          color: white;
        }

        .service-title {
          font-size: 1.4rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-desc {
          color: var(--text-grey);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default Services;
