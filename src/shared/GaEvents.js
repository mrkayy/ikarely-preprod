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

raiseEvent.propTypes = {};

export default raiseEvent;
