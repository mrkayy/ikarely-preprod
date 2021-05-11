import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../stores/GlobalLayer';
import jwt_decode from 'jwt-decode';
import './ModalForm.css';
import Joi from 'joi-browser';
import {observer} from 'mobx-react';
import {useAlert} from 'react-alert';
import ServiceStore from '../../stores/Services';
import InputBox from '../../shared/InputBox';
import WebStorage from '../../shared/LocalStorage';

function ModalForm({services, setOpenModal}) {
  const token = WebStorage.get('user_token');
  const [stage, setStage] = useState(0);
  const alert = useAlert();

  const servicecontext = useContext(ServiceStore);

  const user_details = jwt_decode(token);
  // console.table(user_details);
  const {full_name, phone, email} = user_details;

  const {
    loadingReq,
    reqError,
    reqSuccess,
    reqErrMessage,
    reqSuccessMessage,
    sendRequest,
  } = servicecontext;

  const {
    state,
    setState,
    schema,
    setSchemas,
    handleChange,
    validate,
  } = useContext(GlobalContext);

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const todayDate = `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;

  useEffect(() => {
    setStage((prevState) => ({
      ...prevState,
      data: {
        service: '',
        more_details: '',
        address: '',
        bus_stop: '',
        date: todayDate,
      },
    }));

    setSchemas((prevState) => ({
      ...prevState,
      service: Joi.string().required().label('Service'),
      more_details: Joi.string().allow('').optional().label('More details'),
      address: Joi.string().required().label('Address'),
      bus_stop: Joi.string().required().label('Bus Stop'),
      date: Joi.string().required().label('Date'),
    }));

    return () => {
      setState({data: {}, errors: {}});
      setSchemas({});
    };
  }, []);

  const {data, errors} = state;

  // console.log(data)

  const stagesRender = (stage) => {
    // eslint-disable-next-line default-case
    switch (stage) {
      case 0:
        return (
          <>
            <div className="input__box">
              <label htmlFor="service">Please Choose a service</label>
              <select
                name="service"
                onChange={handleChange}
                value={state.data.service}
                className="service select"
              >
                <option value="" className="first__option">
                  Choose a service
                </option>
                {services.map(({title,params}) => (
                  <option value={params} key={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            <div className="input__box">
              <label htmlFor="service">more details</label>
              <textarea
                name="more_details"
                onChange={handleChange}
                value={state.data.more_details}
              ></textarea>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <InputBox label="Address" name="address" type="text" />
            <InputBox label="Closest Bustop" name="bus_stop" type="text" />
            <InputBox label="Preffered Appointment Date" name="date" type="date" />
          </>
        );

      case 2:
        return loadingReq ? (<> 
         <div className="loading__service">
           <h3>Sending Service Request...</h3>
         </div>
        </>):
        (
          <>
            <div className="booking__summary">
              <h2 className="confirm__summary">Request Summary</h2>

              <div className="request__info">
                <div className="request__detail">
                  Name: <span className="detail__value">{full_name}</span>{' '}
                </div>
                <div className="request__detail">
                  Phone: <span className="detail__value">{phone}</span>
                </div>
                <div className="request__detail">
                  Email: <span className="detail__value">{email}</span>
                </div>
                <div className="request__detail">
                  Address:{' '}
                  <span className="detail__value">
                    {`${data.address}`}, {`${data.bus_stop}`}
                  </span>
                </div>
                <div className="request__detail">
                  Date Booked:{' '}
                  <span className="detail__value">{`${data.date}`}</span>
                </div>
                <div className="request__detail">
                  Service:{' '}
                  <span className="detail__value">{`${data.service}`}</span>
                </div>
              </div>

              <p className="summary__message">
                OUR PROFESSIONAL WILL CALL YOU SHORTLY AFTER SUBMITTING.
              </p>
            </div>
          </>
        );
    }
  };

  const checkStageFilled = (stage) => {
    switch (stage) {
      case 0:
        return validate()?.service;
        break;
      case 1:
        return validate()?.address || validate()?.bus_stop;
        break;
      default:
        break;
    }
  };

  const nextStage = () => {
    if (checkStageFilled(stage) == undefined) {
      setStage((prevStage) => prevStage + 1);
    }
  };

  const prevStage = () => {
    if (stage > 0) {
      setStage((prevStage) => prevStage - 1);
    }
  };

  const confirm = (e) => {
    e.preventDefault();
    const errors = validate();
    setState((prevState) => ({
      ...prevState,
      errors: errors || {},
    }));

    if (errors) return;
    const {service, more_details, address, bus_stop, date} = data;

    const req_data = {
      additional_note: more_details,
      service,
      location: `${address + bus_stop}`,
      preferred_date_of_appointment: date,
    };
    sendRequest(req_data);
  };

  const circleStage = (currentStage) => {
    if (checkStageFilled(currentStage - 1) == undefined) {
      setStage(currentStage);
    }
  };
  useEffect(() => {
    circleStage(stage);
  },[])

  return (
    <div className="service__modal">
      <div className="service__request">
        <div className="request__headers">
          <p className="close__icon" onClick={() => setOpenModal(false)}>
            x
          </p>
          <h3 className="request__mainheader">BOOK A SERVICE</h3>
          <p className="request__word">
            Kindly provide your details so we can reach you
          </p>
        </div>

        <div className="line__circle">
          <div className="progress__linebg">
            <div
              className="progress__line"
              style={{width: `${50 * stage}%`}}
            ></div>
          </div>
          <div className="progress__circles">
            <div
              className={`stage__circle ${stage >= 0 && 'not'}`}
              onClick={() => circleStage(0)}
            >
              Service
            </div>
            <div
              className={`stage__circle ${stage >= 1 && 'not'}`}
              onClick={() => circleStage(1)}
            >
              Location
            </div>
            <div
              className={`stage__circle ${stage > 1 && 'not'}`}
              onClick={() => circleStage(2)}
            >
              Confirm
            </div>
          </div>
        </div>

        <div className="sub__topic">
          <p className="sub__topic__word">
            charges will be sent upon complettion of details
          </p>
        </div>

        <form className="request__form">{stagesRender(stage)}</form>
        <div className="prev__next__btn">
          {
            <button
              className={`prev btn ${stage == 0 ? 'notactive' : ''}`}
              onClick={prevStage}
            >
              Prev
            </button>
          }
          {
            <button
              className={`next btn ${
                checkStageFilled(stage) != undefined ? 'notactive' : ''
              }`}
              onClick={stage < 2 ? nextStage : confirm}
            >
              {stage < 2 ? 'Next' : 'Confirm'}
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default observer(ModalForm);
