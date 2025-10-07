// import React, { useState } from 'react';
// import './ContactSection.css';
// import ContactUsGif from '../../assets/images/ContactUs.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faPhone,
//     faEnvelope,
//     faLocationDot,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//     faWhatsapp,
// } from '@fortawesome/free-brands-svg-icons';
// import emailjs from "@emailjs/browser"

// const ContactSection = () => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")
//     const [company, setComapany] = useState("")
//     const [message, setMessage] = useState("")
//     const templateParams = {
//         from_name: name,
//         from_email: email,
//         from_phone: phone,
//         from_company: company,
//         message: message,
//         to_email: "ziostechdirector2024@gmail.com",
//         to_name: "Aditya Singh"
//     }
//     // console.log(templateParams)
//     const send = (e) => {
//         // const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
//         // const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
//         // const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY
//         e.preventDefault();

//         // emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
//         //     .then(
//         //         () => {
//         //             console.log('SUCCESS!');
//         //         },
//         //         (error) => {
//         //             console.log('FAILED...', error.text);
//         //         }
//         //     );

//     };

//     return (
//         <div className="contact-us">
//             <div className="container">
//                 <div className="row">
//                     {/* Left Column */}
//                     <div className="col left-column">
//                         <h2>Let's Start a Project</h2>
//                         <p>Our team is ready to collaborate and create something extraordinary together. Contact us now!</p>
//                         <form onSubmit={send}>
//                             <div className="form-group">
//                                 <label htmlFor="fullName">Full Name</label>
//                                 <input type="text" id="fullName" name="from_name" onChange={(e) => setName(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email Address</label>
//                                 <input type="email" id="email" name="from_email" onChange={(e) => setEmail(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="phone">Phone Number</label>
//                                 <input type="tel" id="phone" name="from_phone" onChange={(e) => setPhone(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="company">Company Name</label>
//                                 <input type="text" id="company" name="from_company" onChange={(e) => setComapany(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="projectDescription">Short Description of Your Project</label>
//                                 <textarea id="projectDescription" rows="4" name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
//                             </div>
//                             <button type="submit" className="submit-btn" value="Send">Submit</button>
//                         </form>
//                         {/* <form onSubmit={send}>
//                             <div className="form-group">
//                                 <label htmlFor="fullName">Full Name</label>
//                                 <input type="text" id="fullName" name="from_name" required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email Address</label>
//                                 <input type="email" id="email" name="from_email" required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="phone">Phone Number</label>
//                                 <input type="tel" id="phone" name="from_phone" required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="company">Company Name</label>
//                                 <input type="text" id="company" name="from_company" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="projectDescription">Short Description of Your Project</label>
//                                 <textarea id="projectDescription" rows="4" name="message" required></textarea>
//                             </div>
//                             <button type="submit" className="submit-btn">Submit</button>
//                         </form> */}

//                     </div>

//                     {/* Right Column */}
//                     <div className="col right-column">
//                         <img src={ContactUsGif} alt="Project GIF" className="contactgif" />
//                         <h2>Contact Us</h2>
//                         <p>Tell us about your project...
//                             We'd love to hear about the project you're working on.</p>
//                         <ul>
//                             <li>
//                                 <FontAwesomeIcon className='contact-icon' icon={faPhone} /> +91 9335141563
//                             </li>
//                             <li>
//                                 <FontAwesomeIcon className='contact-icon' icon={faWhatsapp} /> +91 9335141563
//                             </li>
//                             {/* <li>
//                                 <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /> ziostechsolutions@gmail.com
//                             </li> */}
//                             <li>
//                                 <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /> 	ceo.office@ziostechsolutions.com
//                             </li>
//                             {/* <li>
//                                 <FontAwesomeIcon className='contact-icon' icon={faLocationDot} /> H 2203, Tower-H, Ajnara Lee Garden, Greater Noida West, Sector 16-B
//                                 201301
//                             </li>
//                             <li>
//                                 <FontAwesomeIcon className='contact-icon' icon={faLocationDot} /> Dennis Street, Clayton, Victoria 3168
//                             </li> */}
//                             <div className="location-section">
//                                 <h2 id="location-heading">Our Locations</h2>
//                                 <div className="location-cards">
//                                     {/* Location 2 */}
//                                     <div className="location-card">
//                                         <FontAwesomeIcon className="location-icon" icon={faLocationDot} /> Australia Office
//                                         <div className="location-details">
//                                             <p> Dennis Street, Clayton, Victoria 3168</p>
//                                         </div>
//                                     </div>
//                                     {/* Location 1 */}
//                                     <div className="location-card">
//                                         <FontAwesomeIcon className="location-icon" icon={faLocationDot} /> India Office
//                                         <div className="location-details">

                                            
// {/*                                             <p> H 2203, Tower-H, Ajnara Lee Garden, Greater Noida West, Sector 16-B, 201301</p> */}
                                            
//                                             <p>H.No - 104A, Sundarshan Society Vinayakpur Kanpur Nagar, Uttar Pradesh, India 208024, IN</p>
//                                         </div>
//                                     </div>


//                                 </div>

//                             </div>

//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactSection;


'use client'
import React, { useState } from 'react';
import './ContactSection.css';
import ContactUsGif from '../../assets/images/ContactUs.png';

import emailjs from "@emailjs/browser"

const ContactSection = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setComapany] = useState("")
    const [message, setMessage] = useState("")
    const templateParams = {
        from_name: name,
        from_email: email,
        from_phone: phone,
        from_company: company,
        message: message,
        to_email: "ziostechdirector2024@gmail.com",
        to_name: "Aditya Singh"
    }
    // console.log(templateParams)
    const send = (e) => {
        const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
        const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
        const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY
        e.preventDefault();

        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        setName("");
        setEmail("");
        setPhone("");
        setComapany("");
        setMessage("");

    };

    return (
        <div className="contact-us">
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col left-column">
                        <h2>Let's Start a Project</h2>
                        <p>Our team is ready to collaborate and create something extraordinary together. Contact us now!</p>
                        <form onSubmit={send}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="from_name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="from_phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="from_company" value={company} onChange={(e) => setComapany(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDescription">Short Description of Your Project</label>
                                <textarea id="projectDescription" rows="4" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" value="Send">Submit</button>
                        </form>
                        {/* <form onSubmit={send}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="from_name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="from_email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="from_phone" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="from_company" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDescription">Short Description of Your Project</label>
                                <textarea id="projectDescription" rows="4" name="message" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form> */}

                    </div>

                    {/* Right Column */}
                    <div className="col right-column">
                        <img src={ContactUsGif} alt="Project GIF" className="contactgif" />
                        <h2>Contact Us</h2>
                        <p>Tell us about your project...
                            We'd love to hear about the project you're working on.</p>
                        <ul>
                            <li>
                                {/* <FontAwesomeIcon className='contact-icon' icon={faPhone} /> +91 9335141563 */}
                            </li>
                            <li>
                                {/* <FontAwesomeIcon className='contact-icon' icon={faWhatsapp} /> +91 9335141563 */}
                            </li>
                            {/* <li>
                                <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /> ziostechsolutions@gmail.com
                            </li> */}
                            <li>
                                {/* <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /> 	ceo.office@ziostechsolutions.com */}
                            </li>
                            {/* <li>
                                <FontAwesomeIcon className='contact-icon' icon={faLocationDot} /> H 2203, Tower-H, Ajnara Lee Garden, Greater Noida West, Sector 16-B
                                201301
                            </li>
                            <li>
                                <FontAwesomeIcon className='contact-icon' icon={faLocationDot} /> Dennis Street, Clayton, Victoria 3168
                            </li> */}
                            <div className="location-section">
                                <h2 id="location-heading">Our Locations</h2>
                                <div className="location-cards">
                                    {/* Location 2 */}
                                    <div className="location-card">
                                        {/* <FontAwesomeIcon className="location-icon" icon={faLocationDot} /> Australia Office */}
                                        <div className="location-details">
                                            <p> Dennis Street, Clayton, Victoria 3168</p>
                                        </div>
                                    </div>
                                    {/* Location 1 */}
                                    <div className="location-card">
                                        {/* <FontAwesomeIcon className="location-icon" icon={faLocationDot} /> India Office */}
                                        <div className="location-details">

                                            {/* <p> H 2203, Tower-H, Ajnara Lee Garden, Greater Noida West, Sector 16-B, 201301</p> */}
                                            <p>H.No - 104A, Vinayakpur, Kanpur Nagar, Uttar Pradesh, India 208024, IN</p>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

