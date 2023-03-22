import React from "react";
import "./Footer.scss";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper"; // fro centering the all content

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menu-items">
          <li className="menu-item">Terms Of Use</li>
          <li className="menu-item">Privacy-Policy</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Blog</li>
          <li className="menu-item">FAQ</li>
        </ul>
        <div className="info-text">
          Here you explore millions of Movies, TV shows & more. Here you have
          two sections Movies & Tv shows you can also search for the movies or
          shows which you want. The best thing you get here is trending option
          with Day & Week. Explore & Enjoy
        </div>

        <div className="social-icons">
          <span className="icon">
            <a href="mailto:developerakky@gmail,com" target="_mail">
              <FiMail />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.instagram.com/codingwithakash"
              target="_instagram"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.twitter.com/devakky04" target="_twitter">
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/devakashpandey/"
              target="_linkedin"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
        <div className="copyright">
          Copyright © 2023 Akash Pandey. All Rights Reserved.
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
