import React, { useState, useEffect } from 'react';
import './navbar.scss';

const Navbar = ({ onSelectSection }) => {
  // State to manage navbar visibility
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle navbar open/close
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle window resize
  useEffect(() => {
    // Handler to check window size and update isOpen state
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true); // Always open on larger screens
      } else {
        setIsOpen(false); // Close on smaller screens
      }
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handler once to set initial state based on current window size
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      {/* Toggle Button */}
      <button
        className="toggle-button"
        onClick={toggleNavbar}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Navbar */}
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <button
              onClick={() => {
                onSelectSection('profile');
                toggleNavbar();
              }}
              className="nav-link"
            >
              Profile
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                onSelectSection('lecture');
                toggleNavbar();
              }}
              className="nav-link"
            >
              Lectures
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                onSelectSection('publication');
                toggleNavbar();
              }}
              className="nav-link"
            >
              Publications
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                onSelectSection('gallery');
                toggleNavbar();
              }}
              className="nav-link"
            >
              Gallery
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
