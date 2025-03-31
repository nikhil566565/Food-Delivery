import React from "react";
import "./contactcode.css";

function Contactcode() {
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
                        <form id="contactForm" className="contact-page form">
                            <div className="contact-page form-row">
                                <div className="contact-page form-group">
                                    <label htmlFor="name" className="contact-page label">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" className="contact-page input" required
                                    />
                                </div>

                                {/* <!-- Email Field --> */}
                                <div className="contact-page form-group">
                                    <label htmlFor="email" className="contact-page label">
                                        Email
                                    </label>
                                    <input type="email" id="email" name="email" placeholder="Enter email address" className="contact-page input" required
                                    />
                                </div>
                            </div>

                            {/* <!-- Subject Field --> */}
                            <div className="contact-page form-group">
                                <label htmlFor="subject" className="contact-page label">
                                    Subject
                                </label>
                                <input type="text" id="subject" name="subject" placeholder="Write a subject" className="contact-page input" required
                                />
                            </div>

                            {/* <!-- Message Field --> */}
                            <div className="contact-page form-group">
                                <label htmlFor="message" className="contact-page label">
                                    Message
                                </label>
                                <textarea id="message" name="message" rows="6" placeholder="Write your message" className="contact-page textarea" required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-page submit-button">
                                Send
                            </button>
                        </form>

                        <div id="successMessage" className="contact-page success-message">
                            Thank you! Your message has been sent successfully.
                        </div>

                        <div id="errorMessage" className="contact-page error-message">
                            Sorry, there was an error sending your message. Please try again.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactcode;
