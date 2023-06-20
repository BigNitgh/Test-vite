import "./port.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="Container">
      <header>
        <div className="logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1683262893/Portfolio/Borcelle_ikamcf.png"
              alt="Logo"
              style={{ width: "80px" }}
            />
          </Link>
        </div>
        <div className="link-all"> 
        {/* corregir activeClassName me da error , poner de classname :active */}
          <NavLink to="/" activeClassName="active-link">
            Inicio
          </NavLink>
          <NavLink to="/about" activeClassName="active-link">
            About Me
          </NavLink>
          <NavLink to="/skills" activeClassName="active-link">
            Skills
          </NavLink>
          <NavLink to="/Contact" activeClassName="active-link">
            Contact Me
          </NavLink>
        </div>
        <div className="social-networks">
          <a href="https://www.facebook.com/eduarmas11/" target="_BLANK">
            <img
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1685228455/Portfolio/facebook_hzinyw.png"
              alt="Facebook-icon"
              style={{ height: "35px" }}
            />
          </a>
          <a href="https://www.instagram.com/edu.armas11/" target="_BLANK">
            <img
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1685228455/Portfolio/instagram_m2sn1a.png"
              alt="Instagram-icon"
              style={{ height: "35px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/edu-armas-1a4b16260/"
            target="_BLANK"
          >
            <img
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1685228455/Portfolio/linkedin_mn7unw.png"
              alt="Linkedin-icon"
              style={{ height: "35px" }}
            />
          </a>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
