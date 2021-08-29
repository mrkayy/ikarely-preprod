import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import PageLanding from "../../components/PageLanding/PageLanding";
import Plan from "../../components/Plan/Plan";
import "./Subscription.css";

function Subscription(props) {
  console.log({ props });
  console.log(props.location);
  console.log(props.location.pathname);

  useEffect(() => {
    autoScroll();
  }, []);

  useEffect(() => {
    console.log({ path: props.location.pathname });
  }, [props.location.pathname]);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const subscriptions = [
    {
      plan: "geriatic care",
      pathname: "geriatic_care",
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
      plan: "general checkup",
      pathname: "general_checkup",
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
      <PageLanding image="health-service.jpg" title={"geriatic_care"} />

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
            .filter((subscription) => subscription.pathname === "geriatic_care")
            .map(({ plans }) =>
              plans.map(({ type, price, offers }) => {
                console.log({ offers });
                return <Plan type={type} price={price} offers={offers} />;
              })
            )}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
