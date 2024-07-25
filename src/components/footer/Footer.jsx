import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
         
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Made By Anilkumar More (Full stack Developer).
        </div>
        <div className="socialIcons">
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;