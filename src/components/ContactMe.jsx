import React, { useState } from "react";
import emailjs from "emailjs-com";
import '../styles/contactMe.css';
import Nav from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faSquarePhone, faPaperPlane, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        const namePattern = /^[A-Za-z]+$/;
        const phonePattern = /^\d{1,12}$/;

        if (!formData.firstName) {
            formErrors.firstName = "First name is required";
        } else if (!namePattern.test(formData.firstName)) {
            formErrors.firstName = "First name cannot contain numbers or special characters";
        }

        if (!formData.lastName) {
            formErrors.lastName = "Last name is required";
        } else if (!namePattern.test(formData.lastName)) {
            formErrors.lastName = "Last name cannot contain numbers or special characters";
        }

        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }

        if (!formData.phone) {
            formErrors.phone = "Phone number is required";
        } else if (!phonePattern.test(formData.phone)) {
            formErrors.phone = "Phone number should be up to 12 digits";
        }

        if (!formData.subject) {
            formErrors.subject = "Subject is required";
        }

        if (!formData.message) {
            formErrors.message = "Message is required";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.send(
                'service_vbf0awg', // replace with your service ID
                'template_t9wtjta', // replace with your template ID
                formData,
                'xlQl7JIhQZI6j9R40' // replace with your public user ID
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setErrors({});
            }, (err) => {
                console.log('FAILED...', err);
                setSuccessMessage('Failed to send message, please try again.');
            });
        }
    };

    return (
        <div className="contact-me">
            <div className="contact-me-container"></div>
            <div className='contact-me-content'>
                <div className="opacity-h1">
                    <h1>CONTACT</h1>
                </div>
                <div className="absoloute-container">
                    <h1>GET IN <span>TOUCH</span></h1>
                </div>
            </div>
            <div className="input-content">
                <form onSubmit={handleSubmit}>
                    <div className="personal-contact-form">
                        <div className="personal-contact-info">
                            <h1>My <span>Contacts</span> </h1>
                            <p>
                                Feel free to contact me at any time. If I don't answer right away, please be patient, as I may be occupied. 
                                I will make sure to get back to you as soon as possible.
                            </p>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" color="yellow" />
                                <div className="contact-text">
                                    <h2>My Email:</h2>
                                    <p>kristaps2020@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faSquarePhone} size="2x" color="yellow" />
                                <div className="contact-text">
                                    <h2>My Number:</h2>
                                    <p>+371 29133997</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faLocationDot} size="2x" color="yellow" />
                                <div className="contact-text">
                                    <h2>My Location:</h2>
                                    <p>Riga, Latvia, Bulvāru iela 14, 4. Stāvs LV-4212, Latvia</p>
                                </div>
                            </div>
                            <div className="social-list">
                                <a href="facebook.com"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                                <a href="https://github.com/KristapsAB"><FontAwesomeIcon icon={faGithub} size="xl" /></a>
                                <a href="linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                            </div>
                        </div>
                        <div className="input-fields">
                            <div className="input-field">
                                <div className="input-wrapper">
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        placeholder="FIRST NAME" 
                                        className={errors.firstName ? 'error-input' : ''}
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                    />
                                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                                </div>
                                <div className="input-wrapper">
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        placeholder="LAST NAME" 
                                        className={errors.lastName ? 'error-input' : ''}
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                    />
                                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                                </div>
                            </div>
                            <div className="input-field">
                                <div className="input-wrapper">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="YOUR EMAIL" 
                                        className={errors.email ? 'error-input' : ''}
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </div>
                                <div className="input-wrapper">
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="PHONE NUMBER" 
                                        className={errors.phone ? 'error-input' : ''}
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                    />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                </div>
                            </div>
                            <div className="subject-input">
                                <div className="input-wrapper">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="YOUR SUBJECT" 
                                        className={errors.subject ? 'error-input' : ''}
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                    />
                                    {errors.subject && <span className="error">{errors.subject}</span>}
                                </div>
                                <div className="input-wrapper">
                                    <textarea 
                                        name="message" 
                                        placeholder="YOUR MESSAGE" 
                                        className={errors.message ? 'error-input' : ''}
                                        value={formData.message} 
                                        onChange={handleChange} 
                                    />
                                    {errors.message && <span className="error">{errors.message}</span>}
                                    {successMessage && <p className="success-message">{successMessage}</p>}
                                </div>
                                <div className="button-wrapper">
                                    <button type="submit">SEND MESSAGE <FontAwesomeIcon icon={faPaperPlane} size="2x" color="#A599E9" /></button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Nav />
        </div>
    );
}

export default ContactMe;
