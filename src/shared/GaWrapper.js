import ReactGA from "react-ga4";
import React from "react";
import PropTypes from "prop-types";

// analytics page wrapper
function PageViewWrapper(props) {
  const { pageDesc, page } = props;
  React.useEffect(() => {
    ReactGA.send(page);
  }, []);
  return <div>{props.children}</div>;
}

PageViewWrapper.propTypes = {
  pageDesc: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default PageViewWrapper;
