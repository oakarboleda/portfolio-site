import React from "react";
import './Footer.scss';



export default function Footer() {
  return (
    <div className="container-fluid m-0">
      <div className="row d-md-flex-row  overflow-hidden">
        <div className="bottom section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="copyright">
                  <p>© <span>2022</span> Oak Arboleda All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}