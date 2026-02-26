import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#portfolio' },
        { name: 'Resume', href: '#resume' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    Nisha<span className="text-primary">.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="nav-link">{link.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="mobile-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition);
          padding: 20px 0;
          background: transparent;
        }
        
        .navbar.scrolled {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          letter-spacing: -1px;
        }
        
        .nav-menu {
          display: flex;
          gap: 30px;
        }
        
        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: #ddd;
          position: relative;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-toggle {
          display: none;
          background: transparent;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background: #111;
          padding: 80px 40px;
          transition: var(--transition);
          z-index: 999;
          box-shadow: -5px 0 20px rgba(0,0,0,0.5);
        }
        
        .mobile-menu.active {
          right: 0;
        }
        
        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .mobile-link {
          font-size: 1.2rem;
          color: white;
          display: block;
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
            z-index: 1001;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
