import React from "react";
import { Clients } from "./clientTamplate";
import { currentUser } from "../tsDataTypes/addingUser";

import "./css/Clients.css";

export type allUser = {
  allUser: currentUser[];
};

export const CustomerArea = (props: allUser) => {
  return (
    <div id="beforeClientStart">
      <div className="applicationWidth" id="clientStart">
        <Clients allUser={props.allUser}></Clients>
      </div>
    </div>
  );
};
