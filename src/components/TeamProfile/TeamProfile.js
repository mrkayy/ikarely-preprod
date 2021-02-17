import React from "react";
import "./TeamProfile.css";

function TeamProfile({ picture, name, title }) {
  return (
    <figure className="team__detail">
      <img src={`images/${picture}`} alt="" />
      <figcaption className="team__info">
          <h2 className="team__name">{name}</h2>
          <h5 className="team__title">{title}</h5>
          {/* <p className="team__profile">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sunt qui modi, accusamus similique esse laudantium a dolores nihil illo odio voluptates vitae! Consequatur, doloremque cumque. Saepe ratione natus tempora.
          </p> */}
      </figcaption>
    </figure>
  );
}

export default TeamProfile;
