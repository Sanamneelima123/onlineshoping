import React from "react";
import "./Login.css";

const Login = () =>{

    return(
        <div className="login-container">
            <div className="login-wrapper">
                <form action="">
                    <div className="input-box">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Enter Your Password" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                        <a href="/#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <p>don't have an account? <a href="/register"><b>Register Here</b></a></p>
                </form>
            </div>
        </div>
    )
}

export default Login;