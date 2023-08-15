import React, { useState } from "react";

import "./css/addCustomer.css";
import { FirstAddCustomerForm } from "./forms/firstForm/firstForm";
import { SecondAddCustomerForm } from "./forms/secondForm/secondForm";

type addCustomerFormNumber = {
  addCustomerFormNumber: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  level: string;
  tone: string;
  front: string;
  back: string;
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

export const userInitialHairValue: userInitialHair = {
  condition: "",
  naturalForm: "",
  level: "",
  tone: "",
  front: "",
  back: "",
  perm: false,
  semi: false,
  highlighted: false,
  relaxer: false,
  tint: false,
  bleach: false,
  date: "",
  result: "",
  texture: "",
};

export const AddCustomers = (props: addCustomerFormNumber) => {
  const { addCustomerFormNumber, setLoading } = props;
  const [user, setUser] = useState<user>(initialUser);
  const [userHair, setUserHair] =
    useState<userInitialHair>(userInitialHairValue);

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
            <SecondAddCustomerForm
              userHair={userHair}
              setUserHair={setUserHair}
              setLoading={setLoading}
            ></SecondAddCustomerForm>
          )}
        </div>
      </div>
    </>
  );
};
