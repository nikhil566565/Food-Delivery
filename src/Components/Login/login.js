import React, { useState } from 'react'
import './login.css'
import Signup from './Signup.js';

function Login() {
    const [showSignUp, setShowSignUp] = useState(false);
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("overlay-login")) {
            setShowSignUp(false);
        }
    };
    return (
        <>
            {!showSignUp ? (
                <div className="login-form-container">
                    <p className="login-title">Login</p>
                    <form className="login-form">
                        <div className="login-input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="" autoComplete="username" />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" autoComplete="current-password" />
                            <div className="login-forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>
                        <button className="login-sign">Sign in</button>
                    </form>
                    <div className="login-social-message">
                        <div className="login-line"></div>
                        <p className="message">Login with social accounts</p>
                        <div className="login-line"></div>
                    </div>
                    <div className="login-social-icons">
                        <button aria-label="Log in with Google" className="login-icon">
                            <i className="fab fa-google text-red-500 w-5 h-5"></i>

                        </button>
                        <button aria-label="Log in with Twitter" className="login-icon">
                            <i className="fab fa-twitter text-blue-500 w-5 h-5"></i>

                        </button>
                        <button aria-label="Log in with GitHub" className="login-icon">

                        </button>
                    </div>
                    <p className="signup-option">
                        Don't have an account?
                        <a rel="noopener noreferrer" href="#" onClick={() => setShowSignUp(true)}>Sign up</a>
                    </p>
                </div>

            ) : (
                <div className="overlay-login" onClick={handleOverlayClick}>
                    {/* <Login /> */}
                    <Signup />
                </div>
            )}

        </>
    )
}

export default Login
