import React, {useEffect, useState} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import {CSSTransition} from "react-transition-group"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import"./header.css"

export default function Header(){
  /* Navigation */
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches){
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return() => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  return(
    <header classname="Header">
      <div className="Headerbox">
      <Link to="/" className="navLinkText">
        <StaticImage
          alt="UKWMS"
          src="../images/header v3.png"
        />
      </Link>
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
          <nav className="Nav">
              <Link to="/" className="navLinkText">Home</Link>
              <Link to="/fasilitas" className="navLinkText">Fasilitas</Link>
              <Link to="/akademik" className="navLinkText">Akademik</Link>
              <Link to="/admisi" className="navLinkText">Admisi</Link>
              <Link to="/dosen-dan-staff" className="navLinkText">Dosen dan Staff</Link>
              <Link to="/informasi" className="navLinkText">Informasi</Link>
              <Link to="/publikasi" className="navLinkText">Publikasi</Link>
              <Link to="/contact-us" className="navLinkText">Contact Us</Link>
              <Link to="/member" className="navLinkText">Member</Link>
          </nav>
        </CSSTransition>

        <button onClick={toggleNav} className="Burger">
          <StaticImage
            alt="UKWMS"
            src="../images/icon/menu.png"
            height="30"
          />
        </button>
      </div>
    </header>
  )
}