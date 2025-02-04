import React from "react";
import { IoMdSend } from "react-icons/io";
import "./Newsletter.css";

const Newsletter = () => {

    return(
        <div className="newsletter-container">
            <h1 className="newsletter-title">Newsletter</h1>
            <div className="newsletter-desc">What's Fresh and New in the Market</div>
            <div className="input-container">
                <input className="input-container" type="text" placeholder="Your email" />
                <button className="newsletter-button">
                    <IoMdSend className="icon" />
                </button>
            </div>
        </div>
    )
}

export default Newsletter;