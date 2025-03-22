import React, { useState } from 'react'
import './signup.css'
import Login from './login'

function Signup() {
    const [showLogin, setShowLogin] = useState(false);
    // const handleOverlayClick = (e) => {
    //     if (e.target.classList.contains("overlay-SignUp")) {
    //         setShowLogin(false);
    //     }
    // };
    return (
        <>
            <div className="login-form-container">
                <p className="login-title">Sign Up</p>
                <form className="login-form">
                    <div className="login-input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="" autoComplete="username" />
                    </div>
                    <div className="login-input-group">
                        <label htmlFor="username">Email</label>
                        <input type="text" name="username" id="username" placeholder="" autoComplete="username" />
                    </div>
                    <div className="login-input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" autoComplete="password" />
                    </div>
                    <div className="login-input-group">
                        <label htmlFor="Confirm-password">Confirm Password</label>
                        <input type="password" name="Confirm-password" id="Confirm-password" placeholder="" autoComplete="confirm-password" />
                    </div>
                    <button className="login-sign Sign-up-btn">Sign Up</button>
                </form>

            </div>
        </>

    )
}

export default Signup
