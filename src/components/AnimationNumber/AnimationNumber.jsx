import React from "react";
import CountUp from "react-countup";
import "./AnimationNumber.css";

const AnimationNumber = () => {
    return (
        <div className="flex-container">
            {/* Project Handled */}
            <div className="stat-card">
                <h5>Project Handled</h5>
                <div className="stat-number">
                    <CountUp end={100} enableScrollSpy />+
                </div>
            </div>
            <div className="divider"></div>

            {/* Happy Clients
            <div className="stat-card">
                <h5>Happy Clients</h5>
                <div className="stat-number">
                    <CountUp end={70} enableScrollSpy />+
                </div>
            </div> */}

            {/* Business Consultant */}
            <div className="stat-card">
                <h5>Business Consultant</h5>
                <div className="stat-number">
                    <CountUp end={5} enableScrollSpy />+
                </div>
            </div>
            <div className="divider"></div>


            {/* Employees */}
            <div className="stat-card">
                <h5 >Employees</h5>
                <div className="stat-number">
                    <CountUp end={10} enableScrollSpy />+
                </div>
            </div>
        </div>
    );
};

export default AnimationNumber;
