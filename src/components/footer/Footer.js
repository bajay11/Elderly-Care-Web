import React from 'react'
import './Footer.css'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className='end'>
      <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span> ELDER CARE SYSTEM </span></h3>
                            <p>
                                The platform where we get everything</p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h3>Follow us</h3>
                            <p >Let us be Social</p>
                            <div className="footer-icons">
                                <BsTwitter />
                                <SiLinkedin />
                                <BsYoutube />
                                <FaFacebookF />
                            </div> 
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                       
                            <h3>Quick Links</h3>
                            <p> </p>
                            <p> +91 9866770442</p>
                            <p> elderCare@gmail.com</p>
                            <p> Bachupally,Hyderabad.</p>
                            <p></p>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer text-gray'>
            <h4>Copyright ©2023 All rights are reserved</h4>
            </div>
    </div>
  )
}

export default Footer



















// import React from 'react'
// import './Footer.css'
// import img from "../images/medication.jpg"
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

// function Footer() {
//   return (
   
//     {/* <div className='footer'>
//   <div className="address">
//     <p className="lead">kphb</p>
//     <p className="lead">hyd</p>
//     <p className="lead">986644</p>
//     <p className="lead">telangana</p>
//   </div>
  
// <img src={img} alt='not found' />
//   <div className="address1">
//     <p className="lead">kphb</p>
//     <p className="lead">hyd</p>
//     <p className="lead">986644</p>
//     <p className="lead">telangana</p>
//   </div>
//   </div>  */}

   
//       <div className="Footer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6 col-lg-5 col-12 ft-1">
//                             <h3><span>FARMERSPORTAL </span></h3>
//                             <p>
//                                 Farmers Crop Exchange is a trusted online platform connecting farmers and buyers for direct and fair trade. We empower farmers by providing them with access to the market while offering buyers a diverse selection of locally grown, sustainable crops.Join us in creating a sustainable future for agriculture.</p>
//                         </div>
//                         <div className="col-md-6 col-lg-3 col-12 ft-2">
//                             <h3>Follow us</h3>
//                             <p >Let us be Social</p>
//                             <div className="footer-icons">
//                                 <BsTwitter />
//                                 <SiLinkedin />
//                                 <BsYoutube />
//                                 <FaFacebookF />
//                             </div> 
//                         </div>
//                         <div className="col-md-6 col-lg-4 col-12 ft-3">
                       
//                             <h3>Quick Links</h3>
//                             <p> </p>
//                             <p> +91 8376377477</p>
//                             <p> farmersportal@gmail.com</p>
//                             <p> Bachupally,Hyderabad.</p>
//                             <p></p>
                           
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='Last-footer text-gray'>
//             <h4>Copyright ©2023 All rights reserved</h4>
//             </div>
    
//     )
//   }

// export default Footer;