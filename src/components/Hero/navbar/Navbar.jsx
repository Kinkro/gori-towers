import { useState } from "react";
import { navData } from "../../../data";
import Logo from "/logggo.avif";
import {
  StyledNavLink,
  StyledNavbar,
  StyledIconContainer,
  StyledHambMenu,
} from "./Navbar.styled";
import { FaInstagram,FaFacebook, FaLinkedin} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import {VscChromeClose} from 'react-icons/vsc';
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = ()=>{
    setShowMenu(prev=> !prev);
  }
  const navLinks = navData.map((link) => (
    <NavLink to={link.url} key={link.id}>
      {link.name}
    </NavLink>
  ));
  return (
    <StyledNavbar>
      <img src={Logo} style={{ width: "50px" }} alt="logoi" />
      <StyledNavLink>{navLinks}</StyledNavLink>
      <StyledIconContainer>
        <a href="" target="_blank">
          <FaInstagram />
        </a>
        <a href="" target="_blank">
          <FaFacebook />
        </a>
        <a href="" target="_blank">
          <FaLinkedin />
        </a>
      <StyledHambMenu onClick={handleClick}>
      {!showMenu ? <VscChromeClose /> : <RxHamburgerMenu />}
      </StyledHambMenu>
      </StyledIconContainer>
      <HamburgerMenu navLinks = {navLinks} showmenu={showMenu ? 'none': 'flex'}/>
    </StyledNavbar>
  );
};

export default Navbar;
