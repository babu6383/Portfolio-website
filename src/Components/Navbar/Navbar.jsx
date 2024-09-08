import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu
  };

  return (
    <div className="navbar">
      <h1 className="dinesh">
        <span>D</span> inesh
      </h1>
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt="Open menu"
        className="nav-mob-open"
        data-aos="fade-left"
      />
      <ul
        className="nav-menu"
        role="menu"
        aria-hidden={!isMenuOpen}
        style={{ right: isMenuOpen ? "0" : "-350px" }} // Conditional styling based on state
      >
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={closeMenu}
            data-aos="fade-down"
          >
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={closeMenu}
            data-aos="fade-down"
          >
            <p>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={closeMenu}
            data-aos="fade-down"
          >
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#condact"
            onClick={closeMenu}
            data-aos="fade-down"
          >
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={50}
          href="#condact"
          onClick={closeMenu}
          data-aos="fade-down"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
