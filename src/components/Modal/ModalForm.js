import React from "react";
import "./ModalForm.css";

function ModalForm({ services }) {
  // console.log(services.title)
 
  return (
    <div className="service__modal">
      <div className="service__request">
        <div className="request__headers">
          <h3 className="request__mainheader">BOOK service</h3>
          <p className="request__word">
            Kindly provide your details so we can reach you
          </p>
        </div>

        <div className="progress__circles">
          <div className="stage__circle">Service</div>
          <div className="stage__circle">Location</div>
          <div className="stage__circle">Profile</div>
          <div className="stage__circle">Confirm</div>
        </div>

        <div className="sub__topic">
          <p className="sub__topic__word">
            charges will be sent upon complettion of details
          </p>
        </div>

        <form className="request__form">
          <label htmlFor="service"></label>
          <select name="" id="">
            {services.map(({title}) => (
              <option value={title} key={title}>{title}</option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
