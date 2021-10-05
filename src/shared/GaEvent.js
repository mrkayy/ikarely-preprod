import ReactGA from "react-ga4";
import React from "react";

// analytics page wrapper
function SendPageView(props) {
  const { pageDesc, page } = props;
  React.useEffect(() => {
    ReactGA.send({ hitType: pageDesc, page });
  }, []);
  return <div>{props.children}</div>;
}

export default SendPageView;

const raiseEvent = ({
  category,
  action,
  label,
  value,
  nonInteraction,
  transport,
}) => {
  return ReactGA.event({
    category,
    action,
    label,
    value,
    nonInteraction,
    transport,
  });
};
