import React, { useState } from "react";

import "./css/addCustomer.css";
import { FirstAddCustomerForm } from "./forms/firstForm/firstForm";
import { SecondAddCustomerForm } from "./forms/secondForm/secondForm";

type addCustomerFormNumber = {
  addCustomerFormNumber: number;
};

export type user = {
  firstName: string;
  lastName: string;
  email: string;
  hPhone: string;
  wPhone: string;
  birthday: string;
};

const initialVal: user = {
  firstName: "",
  lastName: "",
  email: "",
  hPhone: "",
  wPhone: "",
  birthday: "",
};
export const AddCustomers = (props: addCustomerFormNumber) => {
  const { addCustomerFormNumber } = props;
  const [user, setUser] = useState<user>(initialVal);

  return (
    <>
      <div id="beforeAddCustomerFormAreaStart">
        <div className="applicationWidth">
          {addCustomerFormNumber === 1 ? (
            <FirstAddCustomerForm
              user={user}
              setUser={setUser}
            ></FirstAddCustomerForm>
          ) : (
            <SecondAddCustomerForm></SecondAddCustomerForm>
          )}
        </div>
      </div>
    </>
  );
};
