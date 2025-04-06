import React, { useState } from 'react'
import './login.css'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import ToastNotification from '../toast-notification/toast.js';

function Login({ setIsAuthenticated }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [toast, setToast] = useState({ show: false, type: "", message: "" })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setToast({ show: true, type: "error", message: "Please fill all fields!" })
            return;
        }
        try {
            const response = await axios.post("http://localhost:5000/adminlogin", {
                email,
                password,
            })

            localStorage.setItem("authToken", response.data.token);
            setToast({ show: true, type: "success", message: "Login Successful!" })
            setTimeout(() => {
                setIsAuthenticated(true)
                navigate("/");
            }, 3000);
        } catch (err) {
            if (err.response) {
                setToast({ show: true, type: "error", message: err.response.data.error })
            } else {
                setToast({ show: true, type: "error", message: "Something went wrong. Please try again." })
            }
        }
    }
    return (
        <>
            <div className="overlay-login">
                <div className="login-form-container">
                    {toast.show && (
                        <ToastNotification
                            type={toast.type}
                            message={toast.message}
                            onClose={() => setToast({ show: false })}
                        />
                    )}
                    <p className="login-title">Login</p>
                    <form className="login-form" onSubmit={handleSubmit} >
                        <div className="login-input-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="Email" autoComplete="email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" autoComplete="current-password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login-sign">Sign in</button>
                    </form>
                    {/* <div className="login-social-message">
                        <div className="login-line"></div>
                        <p className="message">Login with social accounts</p>
                        <div className="login-line"></div>
                    </div> */}
                    {/* <div className="login-social-icons">
                        <button aria-label="Log in with Google" className="login-icon">
                            <i className="fab fa-google text-red-500 w-5 h-5"></i>
                        </button>
                        <button aria-label="Log in with Twitter" className="login-icon">
                            <i className="fab fa-twitter text-blue-500 w-5 h-5"></i>
                        </button>
                        <button aria-label="Log in with GitHub" className="login-icon">
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Login
