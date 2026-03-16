import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';
import styled from 'styled-components';

const LinkButton = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <a
          href="https://www.facebook.com/milalimon.1.0"
          className="icon facebook"
        >
          <span className="tooltip">Facebook</span>
          <svg
            viewBox="0 0 320 512"
            height="1.2em"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>
        </a>
        <a href="https://www.github.com/Limon-Hassan" className="icon GitHub">
          <span className="tooltip">GitHub</span>
          <IoLogoGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/mahammud-hassan-limon"
          className="icon Linkedin"
        >
          <span className="tooltip">Linkedin</span>
          <FaLinkedinIn size={24} />
        </a>
        <a href="mailto:mahammudhassanlimon@gmail.com" className="icon Email">
          <span className="tooltip">Email</span>
          <MdMailOutline size={24} />
        </a>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: 'Poppins', sans-serif;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    color: #000;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }

  .wrapper .GitHub:hover,
  .wrapper .GitHub:hover .tooltip,
  .wrapper .GitHub:hover .tooltip::before {
    background: #fff;
    color: #000;
  }

  .wrapper .Linkedin:hover,
  .wrapper .Linkedin:hover .tooltip,
  .wrapper .Linkedin:hover .tooltip::before {
    background: #0077b5;
    color: #fff;
  }

  .wrapper .Email:hover,
  .wrapper .Email:hover .tooltip,
  .wrapper .Email:hover .tooltip::before {
    background: orange;
    color: #fff;
  }
`;

export default LinkButton;
