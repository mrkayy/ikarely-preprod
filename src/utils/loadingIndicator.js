import React from "react";
import CustomPortalLayout from "../layouts/portalLayout";

function LoadingIndicator({ action }) {
  return (
    <>
      <CustomPortalLayout>
        <div className="bg-primary-100 p-4 shadow-xl rounded-xl text-xs flex justify-center items-center capitalize space-x-1 text-sm">
          <svg
            fill="none"
            className="w-5 h-5 md:h-6 md:w-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <p className="text-typography-light">
            {action ? action : "processing..."}
          </p>
        </div>
      </CustomPortalLayout>
    </>
  );
}

export default LoadingIndicator;
