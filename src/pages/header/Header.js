import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import ContentWrapper, {
  contentWrapper,
} from "../../components/contentWrapper/ContentWrapper";
import logo from "../../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="logo" height="40px" width="40px" />
          <span className="logo-title">Movix Hub</span>
        </div>
        <ul className="menu-items">
          <li className="menu-item">Movies</li>
          <li className="menu-item">TV Shows</li>
          <li className="menu-item">
            <HiOutlineSearch />
          </li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;
