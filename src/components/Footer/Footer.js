import React from "react";
import './Footer.scss';
import { FaGithubSquare, FaHeart, FaLinkedinIn, FaReact, FaRegCalendarAlt, FaRegCopyright } from 'react-icons/fa';



export default function Footer() {
  return (
    <div className="outer-container">
      <div className="footer-container">
        <div className="news-letter">
          <div className="letter-title">Oak Arboleda</div>
          <div className="row m-3">
         <span className="p-2">
           <a href="https://www.linkedin.com/in/oakarboleda/" target=" _blank" className="btn btn-outline-secondary btn-sm m-1">
          <FaLinkedinIn />
        </a>
         </span>
            <span  className="p-2">
            <a href="https://calendly.com/oakarboleda/15min" target=" _blank" className="btn btn-outline-secondary btn-sm m-1">
            <FaRegCalendarAlt/>
            </a>

         </span>
            <span  className="p-2">
            <a href="https://github.com/oakarboleda" target=" _blank" className="btn btn-outline-secondary btn-sm m-1">
              <FaGithubSquare />
            </a>
            </span>
          </div>
        </div>
        <div className="footer-end">
          <span>
            <i className="fas fa-code" /> with <FaHeart/> by{" "}
            <a
              className="badge badge-dark"
              rel="noopener"
              href="https://github.com/oakarboleda"
              aria-label="My GitHub"
            >
         Oak Arboleda
        </a>{" "}
            using <FaReact />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
          </span>
        </div>
      </div>
    </div>


  );
}