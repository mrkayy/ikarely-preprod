import React from "react";
import TeamProfile from "../../components/TeamProfile/TeamProfile";
import "./Teams.css";

function Teams() {
  const teams = [
    {
      picture: "paul.jpg",
      name: "Paul Jombo",
      title: "Co-Founder & CEO",
    },
    {
      picture: "tolani.jpg",
      name: "Tolani Odukoya",
      title: "Co-founder & COO",
    },
    {
      picture: "mercy.jpg",
      name: "Mercy Thaddeus",
      title: "Co-founder & CTO",
    },
    {
      picture: "victor.jpg",
      name: "Victor Oluwasola",
      title: "Co-founder & Head of Marketing",
    },
    {
      picture: "abiodun.jpg",
      name: "Abiodun Omonijo",
      title: "Head of Products Design",
    },
  ];

  return (
    <div className="teams">
      <div className="teams__section">
        <h1 className="teams__header">Meet the Team</h1>

        <div className="teams__details">
          {teams.map(({ picture, name, title }) => {
            return <TeamProfile picture={picture} name={name} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
