import React from 'react';
import { contactInfo} from "../../resumeData";

const ContactPage = () => (
  <div className="ContactPage container fluid py-1">
   <div className="container">
       <div className="main contact-margin-top" id="contact">
         <div className="contact-div-main">
           <div className="contact-header">
             <h1 className="heading contact-title">{contactInfo.title}</h1>
             <p className="subTitle contact-subtitle"
             >
               {contactInfo.subtitle}
             </p>
             <div
               className= "contact-text-div"
             >
               <a className="contact-detail" href={"tel:" + contactInfo.number}>
                 {contactInfo.number}
               </a>
               <br />
               <br />
               <a
                 className="contact-detail-email"
                 href={"mailto:" + contactInfo.email_address}
               >
                 {contactInfo.email_address}
               </a>
               <br />
               <br />

             </div>
           </div>

         </div>
       </div>

   </div>
  </div>
);


export default ContactPage;
