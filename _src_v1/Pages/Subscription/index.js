import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLanding from "../../components/pageLanding";
import Plan from "../../components/Plan/Plan";
import "./Subscription.css";

function Subscription(props) {
  const { id } = useParams();

  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const subscriptions = [
    {
      plan: "geriatic care",
      pathname: "geriatic_care",
      plans: [
        {
          type: "Bronze",
          price: 30500,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Free virtual consult with Dr,nurses ,dietician, Dentist",
            "Free health insurance",
          ],
        },
        {
          type: "Silver",
          price: 50500,
          offers: [
            "Dr home visit × 2",
            "Nurses visit × 4",
            "Physiotherapy × 1",
            "Free virtual consult with Dr,nurses ,dietician, Dentist",
            "Free health insurance",
          ],
        },
        {
          type: "Gold",
          price: 100000,
          offers: [
            "Dr home visit × 4",
            "Nurses visit × 8",
            "Physiotherapy × 2",
            "Free virtual consult with Dr,nurses ,dietician, Dentist",
            "Free health insurance",
          ],
        },
      ],
      content:
        "Elderly people don't always have to be hospitalized for minor health concerns that can be delivered to them at home.We provide care for the Elderly, from general checkup to catheterization and lots more.",
    },
    {
      plan: "general checkup",
      pathname: "general_checkup",
      plans: [
        {
          type: "Bronze",
          price: 25500,
          offers: [
            "Dr home visit",
            "Nurses visit (BP,BMI,Glucose check)",
            "Malaria,typhoid, hepatitis and Hiv test",
            "+ Free virtual consult with Dr,nurses, dietician, Dentist",
            "+Free health insurance",
          ],
        },
        {
          type: "Silver",
          price: 50500,
          offers: [
            "Dr home visit",
            "Nurses visit (BP,BMI,Glucose check)",
            "Malaria,typhoid, hepatitis and Hiv test",
            "+ Free virtual consult with Dr,nurses, dietician, Dentist",
            "+Free health insurance",
          ],
        },
      ],
      content:
        "You can request for our professional service for individual and family general checkups like Blood pressure,weight check,glucose check,malaria/HIVtest, Body Mass Index(BMI)all at your convenience.",
    },
    {
      plan: "pregna care",
      pathname: "pregnacare",
      plans: [
        {
          type: "Basic",
          price: 10000,
          offers: [
            "Midwife visit (BP,BMI,Glucose check)",
            "Malaria,typhoid, hepatitis and Hiv test, urinalysis",
            "Obstetrician virtual visit ",
            "+ Free virtual consult",
          ],
        },
        {
          type: "Smart",
          price: 10000,
          offers: [
            "Midwife visit (BP,BMI,Glucose check)",
            "Malaria,typhoid, hepatitis and Hiv test, urinalysis",
            "Obstetrician virtual visit ",
            "+ Free virtual consult",
            "+ Free health insurance",
          ],
        },
      ],
      content: "",
    },
    {
      plan: "diabetes care",
      pathname: "diabetes",
      plans: [
        {
          type: "Basic",
          price: 10000,
          offers: [
            "Dr Visit + prescription ",
            "Strip refill ",
            "Drug refill ",
            "+ Free virtual consult",
          ],
        },
        {
          type: "Smart",
          price: 30500,
          offers: [
            "Dr Visit + prescription x 2",
            "Strip refill ",
            "Drug refill ",
            "+ Free virtual consult",
            "+ Free health insurance",
          ],
        },
      ],
      content:
        "You can request for our professional service for individual and family general check ups like Blood pressure, weight check, glucose check, malaria/HIV test, Body Mass Index (BMI) all at your convenience.",
    },
  ];
  const title = subscriptions.filter(
    (subscription) => subscription.pathname == id
  )[0]["plan"];
  const content = subscriptions.filter(
    (subscription) => subscription.pathname == id
  )[0]["content"];

  // ////console.log()/

  return (
    <div className="subscription">
      <PageLanding image="health-service.jpg" title={"Subscription plans"} />

      <div className="subscription__page">
        <h4 className="subscription__header">{title.toUpperCase()}</h4>
        <p className="subscription__mainword">{content}</p>

        <div className="subscription__plans">
          {subscriptions
            .filter((subscription) => subscription.pathname === id)
            .map(({ plans }, index) =>
              plans.map(({ type, price, offers }) => {
                return (
                  <Plan type={type} price={price} offers={offers} key={index} />
                );
              })
            )}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
