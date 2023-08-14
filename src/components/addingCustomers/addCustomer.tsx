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

export type userInitialHair = {
  texture: string;
  condition: string;
  naturalForm: string;
  level: number;
  tone: number;
  front: number;
  back: number;
  perm: boolean;
  semi: boolean;
  highlighted: boolean;
  relaxer: boolean;
  tint: boolean;
  bleach: boolean;
  date: string;
  result: string;
};

const initialUser: user = {
  firstName: "",
  lastName: "",
  email: "",
  hPhone: "",
  wPhone: "",
  birthday: "",
};

// const initialUserHair: userInitialHair = {
//   condition: "",
//   naturalForm: "",
//   level: 0,
//   tone: 0,
//   front: 0,
//   back: 0,
//   perm: false,
//   semi: false,
//   highlighted: false,
//   relaxer: false,
//   tint: false,
//   bleach: false,
//   date: "",
//   result: "",
//   texture: "",
// };

export const AddCustomers = (props: addCustomerFormNumber) => {
  const { addCustomerFormNumber } = props;
  const [user, setUser] = useState<user>(initialUser);
  // const [userHair, setUserHair] = useState<userInitialHair>(initialUserHair);

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
