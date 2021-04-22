import React from "react";

import PageLanding from "../../components/PageLanding/PageLanding";
import InputBox from "../../shared/InputBox";
import "./Contact.css";

function Contact() {

  return (
    <div className="contactus">
      
      <PageLanding image='health-service.jpg' title='Contact us'/>

      <div className="contact">
        <h2 className="contactus__description__top">
          We will like to hear from you!
        </h2>
        <div className="contactus__form">
          <div className="contactus__headers">
            <h3 className="contactus__header">Leave a Message</h3>
          </div>



          <form action="" className="contactus__inputs">
            <InputBox
            label="Email or Phone" 
            name="email"
            type="email"
             />

            <div className="input__box">
              <label htmlFor="password">your message</label>
              <textarea />
            </div>

            <button className="send__message__btn">Send Message</button>
          </form>

         
        </div>
        <h2 className="contactus__description__bottom">
        Would you rather phone in? <br/> <a href= "tel:+2348035418437">08035418437,</a> <a href= "tel:+2349063870220"> 09063870220</a> 
        </h2>
      </div>
    </div>
  );
}

export default Contact;
