import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import payment from "../../src/assets/payment.png"
import { footerLinks } from "../data";

const Footer = () =>{

    return(
        <div className="footer-container">

            <div className="footer-left">
            <h1 className="footer-logo">New Trending Code.</h1>
            <p className="footer-desc">lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quae dignissimos</p>
            <div className="social-container">
                <div className="social-icon" style={{background:'#3b5999'}}>
                    <FaFacebook className="icon" />
                </div>
                <div className="social-icon" style={{background:'#e44059'}}>
                    <FaInstagram className="icon" />
                </div>
                <div className="social-icon" style={{background:'#55acee'}}>
                    <CiTwitter className="icon" />
                </div>
                <div className="social-icon" style={{background:'#e60023'}}>
                    <FaPinterest className="icon" />
                </div>
            </div>
            </div>

            <div className="footer-center">
                <h3>Useful Links</h3>
                <ul className="footer-list">
                {footerLinks && footerLinks.length > 0 ? (
                    footerLinks.map((link) => (
                        <li key={link.id} className="footer-list-item">{link.title}</li>
                    ))
                    ) : (
                    <li>No links available</li>
                    )}

                </ul>
            </div>

            <div className="footer-right">
                <h3 className="footer-contact">Contact</h3>
                <div className="contact-item">
                    <FaLocationDot style={{marginRight:'10px'}} /> KPHB Colony 9th Phase Kukatpally Hyderabad 500085
                </div>
                <div className="contact-item">
                    <FaPhoneAlt style={{marginRight:'10px'}} /> 9346648689
                </div>
                <div className="contact-item">
                    <IoMdMail style={{marginRight:'10px'}} /> baluangular225@gmail.com
                </div>
                <img src={payment} className="payment" alt="" />
            </div>

        </div>
    )
}

export default Footer;