import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Plan from "../../../../components/plan/plan";
import PageLanding from "../../../../components/pageLanding";
import ArticleSection from "../../../../components/articleSection";
import LayoutMargin from "../../../../components/layoutWrapper";
import AuthenticationStore from "../../../../controllers/authentication_store";
import { observer } from "mobx-react-lite";
import { Redirect, useHistory } from "react-router-dom";

function Subscription(props) {
  const { id } = useParams();
  const history = useHistory();
  const { user } = useContext(AuthenticationStore);
  useEffect(() => {
    autoScroll();
  }, []);

  const autoScroll = () => {
    return window.scrollTo(0, 0);
  };

  const subscriptions = [
    {
      plan: "geriatic care",
      pathname: "geriatic-care",
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
      pathname: "general-checkup",
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
          type: "Bronze",
          price: 10000,
          offers: [
            "Midwife visit (BP,BMI,Glucose check)",
            "Malaria,typhoid, hepatitis and Hiv test, urinalysis",
            "Obstetrician virtual visit ",
            "+ Free virtual consult",
          ],
        },
        {
          type: "Silver",
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
          type: "Bronze",
          price: 10000,
          offers: [
            "Dr Visit + prescription ",
            "Strip refill ",
            "Drug refill ",
            "+ Free virtual consult",
          ],
        },
        {
          type: "Silver",
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
    (subscription) => subscription.pathname === id
  )[0]["plan"];

  const content = subscriptions.filter(
    (subscription) => subscription.pathname === id
  )[0]["content"];

  console.log({ user });

  return user === null ? (
    <Redirect
      to={{
        pathname: "/service",
        state: {
          from: history.location,
        },
      }}
    />
  ) : (
    <div className="subscription">
      <PageLanding image={"bg-doctor3"} title="Subscription Service" />
      <LayoutMargin>
        <div className="md:flex md:justify-between md:items-start">
          <div className="md:w-full lg:w-2/5 xl:w-6/12 ">
            <ArticleSection heading={title} title="" desc={content} />
          </div>
          <div className="hidden mb:block sm:hidden lg:block sm:bg-section-2 lg:w-6/12 xl:w-2/5 h-3/4 sm:shadow-md">
            <div className="bg-homecare2 bg-section-1 shadow-md sm:bg-transparent sm:shadow-none h-96 bg-cover bg-no-repeat bg-center"></div>
          </div>
        </div>
      </LayoutMargin>
      <div className="bg-section-1 my-16 py-16 h-9/12">
        <LayoutMargin>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-typography-main mt-3 mb-1 px-6 py-3 sm:px-0 sm:py-0">
              Subscription Plans
            </h3>
            <h6 className="text-center text-sm sm:text-md xl:text-base text-typography-light mb-6 leading-5 sm:leading-6 tracking-tight lg:leading-relaxed px-6 sm:px-0">
              {" "}
              Please choose the best plan for you.All plans have flexible
              payment methods for everyone…
            </h6>
          </div>
          <div className="grid gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8">
            {subscriptions
              .filter((subscription) => subscription.pathname === id)
              .map(({ plans, plan }) =>
                plans.map(({ type, price, offers }) => {
                  return (
                    <Plan
                      plan={plan}
                      type={type}
                      price={price}
                      offers={offers}
                      key={type}
                    />
                  );
                })
              )}
          </div>
        </LayoutMargin>
      </div>
    </div>
  );
}

export default observer(Subscription);
