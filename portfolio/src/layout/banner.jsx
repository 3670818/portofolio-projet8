import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./banner_style.scss"; // Import the style

function Banner() {
  return (
  

    <nav className="banner">
      <NavLink to="/" className="banner-link">
        <div className="nom">
          <h1>Ibrahim Allae</h1>
        </div>
      </NavLink>

      <NavLink to="/" className="banner-link" activeClassName="active">
        <span>Accueil</span>
      </NavLink>

      <NavLink to="/about" className="banner-link" activeClassName="active">
        <span>À propos</span>
      </NavLink>

      <NavLink to="/competence" className="banner-link" activeClassName="active">
        <span>Compétences</span>
      </NavLink>

      <NavLink to="/projets" className="banner-link" activeClassName="active">
        <span>Projets</span>
      </NavLink>
    </nav>
  );
}

export default Banner;
