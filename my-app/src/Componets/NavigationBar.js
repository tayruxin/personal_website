import React, { useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div>
      <div className="Navigator">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default NavigationBar;
