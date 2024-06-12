import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/deeptanshunayak/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
         
          <a href="https://www.linkedin.com/in/deeptanshu-nayak-29254925b" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
         
          <a href="https://github.com/deeptanshunayak" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
