import React from 'react';
import { Link } from 'react-router-dom';

import About from './About';

export default function Navbar() {
  return (
    <div className="navBar">
      <div className="navContainer">
        {/* Brand */}
        <a href="#" className="navBrand">MyWeb</a>

        {/* Navigation Links */}
        <div className="navLinks">
          <a href="#" className="navLink">Home</a>
          <Link to="/About" className="navLink">About</Link>
        </div>

        {/* Search Bar (Now Inside navContainer) */}
        <div className="searchContainer">
          <label htmlFor="search" className="searchLabel"
            onClick={() => document.querySelector(".searchForm").classList.toggle("show")} style={{ cursor: "pointer" }}
          >Search</label>
          <form className="searchForm">
            <input type="search" className="searchInput" placeholder="Search here..." />
            <i className="fa fa-search searchIcon"></i>
          </form>
        </div>
      </div>
    </div>
  );
}
