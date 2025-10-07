import React from "react";
import "./MissionSection.css";

const MissionSection = () => {
    return (
        <section className="about-us-mission">
            {/* Mission Section */}
            <div id="missisonSection" className="section mission ">
                <h2>Mission</h2>
                <p>
                    Empowering businesses with innovative, reliable, and scalable IT
                    solutions, ensuring seamless digital transformation and driving
                    growth through cutting-edge technology and exceptional customer
                    service.
                </p>
            </div>

            {/* Vision Section */}
            <div id="missisonSection" className="section vision">
                <h2>Vision</h2>
                <p>
                    To be the global leader in innovative IT solutions, transforming
                    businesses through cutting-edge technology, exceptional service, and
                    a relentless commitment to empowering digital success.
                </p>
            </div>
            <div id="missisonSection" className="section value">
                <h2>Our Values</h2>
                <p>
                    Essential to emphasize principles that build trust, demonstrate
                    expertise, and show a commitment to customer success.
                </p>
            </div>

            {/* Our Values Section */}
            <div className="section values">
                <div className="values-grid">
                    <div className="value-item">
                        <span className="material-symbols-outlined">policy</span>
                        <h3>Integrity</h3>
                        <p>
                            Building trust by delivering on our promises and maintaining
                            ethical standards.
                        </p>
                    </div>
                    <div className="value-item">
                        <span className="material-symbols-outlined">verified</span>
                        <h3>Quality and Excellence</h3>
                        <p>
                            Ensuring high-quality, reliable solutions that meet the highest
                            industry standards.
                        </p>
                    </div>
                    <div className="value-item">
                        <span className="material-symbols-outlined">groups</span>
                        <h3>Collaboration</h3>
                        <p>
                            Fostering partnerships with clients and internally to achieve the
                            best results.
                        </p>
                    </div>
                    <div className="value-item">
                        <span className="material-symbols-outlined">shield_lock</span>
                        <h3>Security and Privacy</h3>
                        <p>
                            Implementing best-in-class cybersecurity measures to protect
                            their interests.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default MissionSection;