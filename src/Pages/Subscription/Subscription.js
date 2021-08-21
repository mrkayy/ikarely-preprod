import React from "react";
import {Link, useParams } from 'react-router-dom'
import PageLanding from "../../components/PageLanding/PageLanding";
import Plan from "../../components/Plan/Plan";
import "./Subscription.css";

function Subscription({match: {url}}) {

  const startPos = url.lastIndexOf('/')+1

  // console.log(startPos)
  const title = url.slice(startPos)

  



  const check = "injection";

  const subscriptions = [
    {
      plan: "geriatic_care",
      plans: [
        {
          type: "Gold",
          price: 50000,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
        {
          type: "Silver",
          price: 35500,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
        {
          type: "Bronze",
          price: 35000,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
      ],
    },
    {
      plan: "general_checkup",
      plans: [
        {
          type: "Gold",
          price: 50000,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
        {
          type: "Silver",
          price: 35500,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
      ],
    },
    {
      plan: "pregnacare",
      plans: [
        {
          type: "Gold",
          price: 50000,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
      ],
    },
    {
      plan: "diabetes",
      plans: [
        {
          type: "Gold",
          price: 50000,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
        {
          type: "Silver",
          price: 35500,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Nurses visit × 2",
            "Free health insurance",
          ],
        },
      ],
    },
  ];

  return (
    <div className="subscription">
      <PageLanding image="easy-access.jpg" title={title} />

      <div className="subscription__page">
        <p className="subscription__mainword">
          Elderly people don't always have to be hospitalized for minor health
          concerns that can be delivered to them at home. We provide care for
          the Elderly, from general checkup to catheterization and lots more.
        </p>

        <h4 className="subscription__header">Subscription Plans</h4>
        <p className="subscription__subheader">
          Please choose the best plan for you.All plans have flexible payment
          methods for everyone…
        </p>

        <div className="subscription__plans">
          {subscriptions
            .filter((subscription) => subscription.plan === title)
            .map(({ plans }) =>
              plans.map(({ type, price, offers }) => {
                return <Plan type={type} price={price} offers={offers} />;
              })
            )}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
