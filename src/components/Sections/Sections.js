import React from "react";
import { Link } from "react-router-dom";
import "./Sections.css";

function Sections() {
  return (
    <div className="sections">
          <div className="welcome__section">
        <div className="center__part">
          <h3>Welcome to iKarely</h3>
          <h1>Best Care For Your Good Health</h1>
          <p className="welcome__word">
          We are Uniquely designed for high-acuity patients in a home setting. We’ve designed and made significant investments in a scalable model that is enabled by technology and a threefold business/clinical/tech leadership team.
          </p>

          <button className="eachsection__btn">
               <Link to="/about">Read More</Link>
          </button>
        </div>
      </div>

      <div className="each__section">
        <div className="left__part">
          <img src="images/easy-access.jpg" alt="" />
        </div>
        <div className="right__part">
          <h3>About Us</h3>
          <h2>Your health is our utmost priority</h2>
          <p className="section__word">
          ikarely is a healthtech Company, specializing in delivery of optimal and  quality healthcare services to client at their own comfort and utmost convenience. We are a digital health care company in Africa that is service oriented and works by connecting licensed nurses to patients that need basic health care services like, wound care, vaccination, chemotherapy, Intravenous fluid infusion, catheterization to mention a few. 
          </p>

          <button className="eachsection__btn">
               <Link to="/about">Read More</Link>
          </button>
        </div>
      </div>

      <div className="each__section">
        <div className="right__part">
          <h3>Services</h3>
          <h1>Medical care with clinical services</h1>
          <p className="section__word">
          We believe there is no better time to decongest hospitals especially in Africa where there is the disproportionate patient-to-doctor ratio with facilities that are either unavailable or dysfunctional. It’s an incredibly exciting moment for healthcare to take advantage of digital technology and the growing number of internet-enabled mobile phones in Africa. 
          </p>

          <button className="eachsection__btn">
               <Link to="/service">Read More</Link>
          </button>
        </div>

        <div className="left__part">
          <img src="images/special-care.jpg" alt="" />
        </div>
      </div>

      <div className="each__section">
        <div className="left__part">
          <img src="images/appointment.jpg" alt="" />
        </div>
        <div className="right__part">
          <h3>Blogs</h3>
          <h1>Clinical and health related articles</h1>
          <p className="section__word">
            At Ikarely, We provide real and practical advice to help you prevent illness and cure ailments and stay healthy by providing advice on a full range of medical conditions and preventions through an abundance of articles on our blog.
          </p>

          <button className="eachsection__btn">
               <Link to="/blog">Read More</Link>
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Sections;
