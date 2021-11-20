import ReactGA from "react-ga4";
import PropTypes from "prop-types";

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
  category: PropTypes,
action: PropTypes,
label: PropTypes,
value: PropTypes,
nonInteraction: PropTypes,
transport: PropTypes,
};

export default raiseEvent;
