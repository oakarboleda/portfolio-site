import React from "react";
import './Footer.scss';
import { FaGithubSquare, FaLinkedinIn, FaRegCalendarAlt, FaRegCopyright } from 'react-icons/fa';



export default function Footer() {
  return (
    <div className="outer-container">
      <div className="footer-container">
        <div className="news-letter">
          <div className="letter-title">Oak Arboleda</div>
          <div className="row m-3">
         <span className="p-2">
           <FaLinkedinIn/>
         </span>
            <span  className="p-2">
           <FaRegCalendarAlt/>
         </span>
            <span  className="p-2">
            <FaGithubSquare />
          </span>

          </div>
        </div>
        <div className="footer-end">
          <span>
            <FaRegCopyright />Copyright Oak Arboleda. All
            rights reserved.
          </span>
        </div>
      </div>
    </div>


  );
}