
import React from "react";

function LayoutMargin(props) {
  return (
    <div className={`${props.bg} mx-auto w-11/12 sm:w-10/12 2xl:w-8/12`}>
      {props.children}
    </div>
  );
}

export default LayoutMargin;
