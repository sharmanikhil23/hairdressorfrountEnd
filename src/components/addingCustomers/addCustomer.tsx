import React from "react";

import "./css/addCustomer.css";
import { FirstAddCustomerForm } from "./forms/firstForm/firstForm";
import { SecondAddCustomerForm } from "./forms/secondForm/secondForm";

type addCustomerFormNumber = {
  addCustomerFormNumber: number;
};

export const AddCustomers = (props: addCustomerFormNumber) => {
  const { addCustomerFormNumber } = props;
  return (
    <>
      <div id="beforeAddCustomerFormAreaStart">
        <div className="applicationWidth">
          {addCustomerFormNumber === 1 ? (
            <FirstAddCustomerForm></FirstAddCustomerForm>
          ) : (
            <SecondAddCustomerForm></SecondAddCustomerForm>
          )}
        </div>
      </div>
    </>
  );
};
