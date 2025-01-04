import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import LeetCodeIcon from './leetcode.svg'; // Adjust the path as needed

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/raj-srimann/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://leetcode.com/u/rajsrimann15/" target="_blank" rel="noreferrer">
        <img src={LeetCodeIcon} alt="LeetCode" width="24" height="24" />
      </a>
    </div>
  );
};

export default HeaderSocials;
