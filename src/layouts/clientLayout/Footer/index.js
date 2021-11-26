import React from "react";

function Footer(props) {
  return (
    <>
      <div className="relative p-4 bottom-0">
        Footer
        {props.children}
      </div>
    </>
  );
}

export default Footer;
