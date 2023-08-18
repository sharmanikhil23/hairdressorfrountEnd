import React from "react";

import { currentUser } from "../tsDataTypes/addingUser";

import "./css/addCustomer.css";
import { FirstAddCustomerForm } from "./forms/firstForm/firstForm";
import { SecondAddCustomerForm } from "./forms/secondForm/secondForm";

type addCustomerFormNumber = {
  addCustomerFormNumber: number;
};

export type currentUserType = {
  currentUser: currentUser;
  setCurrentUser: React.Dispatch<React.SetStateAction<currentUser>>;
};

type prop = addCustomerFormNumber & currentUserType;

export const AddCustomers = (props: prop) => {
  const { currentUser, setCurrentUser, addCustomerFormNumber } = props;

  return (
    <>
      <div id="beforeAddCustomerFormAreaStart">
        <div className="applicationWidth">
          {addCustomerFormNumber === 1 ? (
            <FirstAddCustomerForm
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            ></FirstAddCustomerForm>
          ) : (
            <SecondAddCustomerForm
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            ></SecondAddCustomerForm>
          )}
        </div>
      </div>
    </>
  );
};
