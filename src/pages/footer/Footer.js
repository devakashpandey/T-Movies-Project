import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper"; // fro centering the all content

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Here you explore millions of Movies, TV shows & more. Here you have
          two sections Movies & Tv shows you can also search for the movies or
          shows which you want. Explore & Enjoy
        </div>

        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
        <div className="copyright">
          Copyright © 2023 Akash Pandey. All rights reserved.
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
