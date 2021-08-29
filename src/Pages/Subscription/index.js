import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLanding from "../../components/PageLanding/PageLanding";
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
          price: 50000,
          offers: [
            "Dr home visit × 1",
            "Nurses visit × 2",
            "Physiotherapy × 1",
            "Free virtual consult with Dr ,nurses ,dietician, Dentist",
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
          type: "Gold",
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
      plan: "general checkup",
      pathname: "general_checkup",
      plans: [
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
      plan: "pregnacare",
      pathname: "pregnacare",
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
      pathname: "diabetes",
      plans: [
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
  ];

  console.log({ id });
  const title = subscriptions.filter(
    (subscription) => subscription.pathname === id
  )[0]["pathname"];

  return (
    <div className="subscription">
      <PageLanding image="health-service.jpg" title={"Subscription plans"} />

      <div className="subscription__page">
        <h4 className="subscription__header">{title.toUpperCase()}</h4>
        <p className="subscription__mainword">
          Elderly people don't always have to be hospitalized for minor health
          concerns that can be delivered to them at home. We provide care for
          the Elderly, from general checkup to catheterization and lots more.
        </p>

        <div className="subscription__plans">
          {subscriptions
            .filter((subscription) => subscription.pathname === id)
            .map(({ plans }) =>
              plans.map(({ type, price, offers }) => {
                // console.log({ offers });
                return (
                  <Plan
                    type={type}
                    price={price}
                    title={title}
                    offers={offers}
                  />
                );
              })
            )}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
