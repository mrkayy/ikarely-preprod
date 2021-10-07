import ReactGA from "react-ga4";
import propTypes from "prop-types";

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

raiseEvent.propTypes = {
  category: propTypes,
action: propTypes,
label: propTypes,
value: propTypes,
nonInteraction: propTypes,
transport: propTypes,
};

export default raiseEvent;
