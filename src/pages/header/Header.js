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
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // after changing location our scroll bar moves to up
  }, [location]);

  const controlNavbar = () => {
    //window.scrollY is default method
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar); // removing event after unmounting
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate(`/explore/movie`);
    } else {
      navigate(`/explore/tv`);
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobile-view" : ""}  ${show}`}>
      <ContentWrapper className="content-wrapper">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <span className="logo-title">T-Movies</span>
        </div>
        <ul className="menu-items">
          <li className="menu-item" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menu-item" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menu-item search-icon">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobile-Menu-Items">
          <HiOutlineSearch className="mobile-icon" onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose
              className="mobile-icon"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <SlMenu className="mobile-icon" onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="search-bar">
          <ContentWrapper>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for movies or tv shows..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchHandler}
              />
              <VscChromeClose
                onClick={() => setShowSearch(false)}
                style={{ color: "white" }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
