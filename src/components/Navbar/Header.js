import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">AJIO</div>
      <input className="search-bar" type="text" placeholder="Search by product, brand..." />
      <div className="header-icons">
        <span>🔔</span>
        <span>❤️</span>
        <span>🛒</span>
      </div>
    </header>
  );
}

export default Header;

