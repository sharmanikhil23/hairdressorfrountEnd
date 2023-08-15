import React from "react";

import "./css/loading.css";

export const Loading = () => {
  return (
    <>
      <div id="beforeLoader">
        <div id="loader"></div>
        <div id="loaderMessage">Saving...</div>
      </div>
    </>
  );
};
