import React from 'react';
import './dashboard.css';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const Dashboard = ({username}) => {
  console.log(username);

  const services = [
    {
      icon: 'wound.svg',
      title: 'Wound Care',
      params: 'wound_care',
      word: 'Why go through the stress of going to and waiting in the hospital when dealing with wounds is enough stress on its own. We offer wound dressing services for patients with minor burns, pressure ulcer, diabetic foot and any other form of wounds at your utmost convenience.',
    },
    {
      icon: 'injection.svg',
      title: 'Vaccination',
      params: 'vaccination',
      word: "At ikarely, we believe you don't have to stay on a long queue in the hospital to receive vaccination. We simply help reduce the stress by providing vaccination from deadly diseases like, hepatitis, typhoid, polio etc at the comfort of your home. ",
    },
    {
      icon: 'Catherization.svg',
      title: 'Geriatric care',
      params: 'catheterization',
      word: "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home. We provide care for the Elderly, from general checkup to catheterization and lots more.",
    },
    {
      icon: 'teeth-checkup.svg',
      title: 'Dental Care',
      params: 'dental_care',
      word: "We provide a wide range of dental services etc dental cleanings, Fillings, root canals, and extractions. Imagine the comfort of having a dentist come to your home for your dental care, that's exactly what we are offering you.",
    },
    {
      icon: 'healthcare.svg',
      title: 'General Check-up',
      params: 'general_checkup',
      word: 'You can request for our professional service for individual and family general check ups like Blood pressure, weight check, glucose check, malaria/HIV test, Body Mass Index (BMI) all at your convenience.',
    },
  ];
  return (
    <>
      <div className="main">
        <div className="client__title">
          <h3>Welcome {username}</h3>
        </div>
        <div>
          <Divider />
          <div className="service__lists">
            {services.map(({icon, title, word}) => {
              return (
                <Paper className="service__list" key={title}>
                  <div className="list__icon">
                    <img src={`../images/icons/${icon}`} alt="img" />
                  </div>
                  <p className="list__title">{title}</p>
                  <div className="list__word">
                    <p>{word}</p>
                  </div>
                  <div className="service__btn">
                    <Button
                      variant="contained"
                      color="inherit"
                      disableElevation
                      size="small"
                    >
                      <Typography variant="caption">
                        Request Service
                      </Typography>
                    </Button>
                  </div>
                </Paper>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
