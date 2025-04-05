import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactcode.css";
import Swal from 'sweetalert2';

function Contactcode() {

    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8qpsa3m",
                "template_xh0ie53",
                form.current,
                "UzLeAjeKNUfTjZmze"
            )
            .then(
                (result) => {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been sent successfully!',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK',
                        backdrop: true,
                    });
                    setSuccess(true);
                    setError(false);
                    e.target.reset();
                },
                (error) => {
                    setError(true);
                    setSuccess(false);
                }
            );
    };

    return (
        <>
            <div className="contact-page-main-container">
                <div className="contact-page container">
                    <h1 className="contact-page heading">Contact Us</h1>
                    <p className="contact-page subtitle">
                        We consider all the drivers of change gives you the components you
                        need to change to create a truly happens.
                    </p>

                    <div className="contact-page form-card">
                        <form ref={form} onSubmit={sendEmail} className="contact-page form">
                            <div className="contact-page form-row">
                                <div className="contact-page form-group">
                                    <label className="contact-page label">Name</label>
                                    <input type="text" name="name" placeholder="Enter your name" className="contact-page input" required />
                                </div>

                                <div className="contact-page form-group">
                                    <label className="contact-page label">Email</label>
                                    <input type="email" name="email" placeholder="Enter email address" className="contact-page input" required />
                                </div>
                            </div>

                            <div className="contact-page form-group">
                                <label className="contact-page label">Subject</label>
                                <input type="text" name="subject" placeholder="Write a subject" className="contact-page input" required />
                            </div>

                            <div className="contact-page form-group">
                                <label className="contact-page label">Message</label>
                                <textarea name="message" rows="6" placeholder="Write your message" className="contact-page textarea" required></textarea>
                            </div>

                            <button type="submit" className="contact-page submit-button">Send</button>
                        </form>

                        {success && <div className="contact-page success-message">Message sent successfully!</div>}
                        {error && <div className="contact-page error-message">Error sending message. Try again.</div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactcode;
