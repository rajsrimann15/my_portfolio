import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';
import LeetCodeIcon from './leetcode.svg';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Raj Srimann K</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/rasif-tagizada/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://leetcode.com/u/rajsrimann15/" target="_blank" rel="noreferrer">
        <img src={LeetCodeIcon} alt="LeetCode" width="24" height="24" />
      </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Raj 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer