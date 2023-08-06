import React from "react";
import { Clients } from "./clientTamplate";

import "./css/Clients.css";

export const CustomerArea: React.FC = () => {
  return (
    <div id="beforeClientStart">
      <div className="applicationWidth" id="clientStart">
        <Clients></Clients>
      </div>
    </div>
  );
};
