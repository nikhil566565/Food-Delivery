import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import ToastNotification from '../toast-notification/toast.js';
function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [toast, setToast] = useState({ show: false, type: "", message: "" })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !oldPassword || !newPassword) {
            setToast({ show: true, type: "error", message: "Please fill all fields!" })
            return;
        }
        try {
            const response = await axios.put("http://localhost:5000/update_password", {
                email,
                oldPassword,
                newPassword,
            })
            setToast({ show: true, type: "success", message: "Password Change Successful!" })
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (err) {
            if (err.response) {
                setToast({ show: true, type: "error", message: err.response.data.error })
            } else {
                setToast({ show: true, type: "error", message: "Something went wrong!" })
            }
        }
    }

    return (
        <>
            <div className="overlay-forgot">
                <div className="login-form-container">
                    {toast.show && (
                        <ToastNotification
                            type={toast.type}
                            message={toast.message}
                            onClose={() => setToast({ show: false })}
                        />
                    )}
                    <p className="login-title">Forgot Password</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="login-input-group">
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="Email" autoComplete="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="oldPassword">Old Password</label>
                            <input type="password" name="oldPassword" id="oldPassword" autoComplete="oldPassword" value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)} required />
                        </div>
                        <div className="login-input-group" style={{ marginBottom: "20px" }}>
                            <label htmlFor="newPassword">New Password</label>
                            <input type="password" name="newPassword" id="newPassword" autoComplete="newPassword" value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)} required />
                        </div>
                        <button className="login-sign" style={{ marginBottom: "20px" }} >Change Password</button>
                    </form>
                    <p className="signup-option">
                        Don't have an account?
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
