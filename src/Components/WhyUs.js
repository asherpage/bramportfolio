import React from "react";
import "../Assets/Styles/whyus.css";
import couch from "../Assets/Images/bram2.jpg";
import { RiTeamFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="why-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="why-left-box">
  <h2>Why Choose Us?</h2>
  <p>
    At BRAM Flooring, we pride ourselves on providing high-quality, tailored solutions for our clients. Whether you manage a commercial space or need residential services, our expertise and commitment to excellence make us the perfect choice.
  </p>
  <ul>
    <li>Retirement Communities</li>
    <li>Local Government Offices</li>
    <li>Retail Chains</li>
    <li>Residential/Commercial Property Management</li>
    <li>Hospitals and Clinics</li>
    <li>Education and Institutions</li>
    <li>Corporate Headquarters</li>
  </ul>
  <a href="#gallery">
  <div className="view-work-link">
    View Work <span className="arrow">→</span>
  </div>
  </a>
</div>

        <div className="why-right-box">
          <img src={couch} alt="Couch" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="info-box">
          <div className="why-icon"><RiTeamFill /></div>
          <div className="why-text">
            <h3>Experienced Team</h3>
            <p>Our skilled professionals bring years of expertise to every project.</p>
          </div>
        </div>
        <div className="info-box">
          <div className="why-icon"><FaMoneyBillWave /></div>
          <div className="why-text">
            <h3>Affordable Pricing</h3>
            <p>Competitive rates without compromising on quality.</p>
          </div>
        </div>
        <div className="info-box">
          <div className="why-icon"><FaBook /></div>
          <div className="why-text">
            <h3>Local Knowledge</h3>
            <p>Deep understanding of the local market and client needs.</p>
          </div>
        </div>
        <div className="info-box">
          <div className="why-icon"><RiCustomerService2Fill /></div>
          <div className="why-text">
            <h3>Customer First</h3>
            <p>Your satisfaction is our top priority, every time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
