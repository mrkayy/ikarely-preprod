import ReactGA from "react-ga4";
import React from "react";
import propTypes from "prop-types";

// analytics page wrapper
function PageViewWrapper(props) {
  const { pageDesc, page } = props;
  React.useEffect(() => {
    ReactGA.send({ hitType: pageDesc, page });
  }, []);
  return <div>{props.children}</div>;
}

PageViewWrapper.propTypes = {
  pageDesc: propTypes.string.isRequired,
  page: propTypes.string.isRequired,
};

export default PageViewWrapper;
