import React from "react";
import "./Register.css";

const Register = () => {
    return(
        <div className="register-container">
            <div className="register-wrapper">
                <form  action="">
                    <div className="input-box">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="input-box">
                        <input type="tel" placeholder="Phone Number" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Cpuntry" />
                    </div>
                    <div className="register-agreement">
                        <label>
                            <input type="checkbox"  /> I agree to the <b>terms</b> and {""} <b>conditions</b>
                        </label>
                    </div>
                    <button className="button" type="submit">Register User</button>
                </form>
            </div>
        </div>
    )
};

export default Register;