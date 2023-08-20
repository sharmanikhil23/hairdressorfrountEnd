import React, { useState, useEffect } from "react";
import { HomeScreenHeader } from "./homeScreenComponents/header/header";
import { HomeScreenFooter } from "./homeScreenComponents/footer/footer";
import { CustomerArea } from "../clients/clients";
import { Setting } from "../settings/setting";
import { Loading } from "../loading/loading";
import { AddCustomers } from "../addingCustomers/addCustomer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//importing different types and initial values
import {
  pageSelector,
  pageSelectorInitialValue,
} from "../tsDataTypes/pageSelector";

import { currentUser, currentUserValues } from "../tsDataTypes/addingUser";

//importing css
import "./css/HomeScreen.css";

export const HomeScreen = () => {
  useEffect(() => {
    let data: string | null = localStorage.getItem("allUsers");
    if (data != null) {
      setAllUser(JSON.parse(data));
    }
  }, []);

  const savingCustomerInitialInfo = (): void => {
    setLoading((current) => !current);
    let data: string | null = localStorage.getItem("allUsers");
    if (data == null) {
      let temp = [currentUser];
      localStorage.setItem("allUsers", JSON.stringify(temp));
      setAllUser(temp);
    } else {
      let temp = JSON.parse(data);
      temp.unshift(currentUser);
      setAllUser(temp);
      localStorage.setItem("allUsers", JSON.stringify(temp));
    }
    setAddCustomerFormNumber(1);
    setPageSelector((current) => {
      let temp = { ...current, addNew: false, setting: false, customers: true };
      return temp;
    });
    setCurrentUser(currentUserValues);
    setLoading((current) => !current);
  };

  const [allUser, setAllUser] = useState<currentUser[]>([]);

  const [pageSelector, setPageSelector] = useState<pageSelector>(
    pageSelectorInitialValue
  );

  const [addCustomerFormNumber, setAddCustomerFormNumber] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);

  const [currentUser, setCurrentUser] =
    useState<currentUser>(currentUserValues);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <MainTemplate
              pageSelector={pageSelector}
              setPageSelector={setPageSelector}
              addCustomerFormNumber={addCustomerFormNumber}
              setAddCustomerFormNumber={setAddCustomerFormNumber}
              setCurrentUser={setCurrentUser}
              savingCustomerInitialInfo={savingCustomerInitialInfo}
              loading={loading}
            ></MainTemplate>
          ),
          children: [
            {
              path: "/",
              element: <CustomerArea allUser={allUser}></CustomerArea>,
            },
            {
              path: "/addCustomer",
              element: (
                <AddCustomers
                  addCustomerFormNumber={addCustomerFormNumber}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                ></AddCustomers>
              ),
            },
            { path: "/about", element: <Setting></Setting> },
          ],
        },
        { path: "/*" },
      ])}
    ></RouterProvider>
  );
};

type props = {
  pageSelector: pageSelector;
  setPageSelector: React.Dispatch<React.SetStateAction<pageSelector>>;
  addCustomerFormNumber: number;
  setAddCustomerFormNumber: React.Dispatch<React.SetStateAction<number>>;
  setCurrentUser: React.Dispatch<React.SetStateAction<currentUser>>;
  savingCustomerInitialInfo: () => void;
  loading: boolean;
};

const MainTemplate = (props: props) => {
  const {
    pageSelector,
    setPageSelector,
    addCustomerFormNumber,
    setAddCustomerFormNumber,
    setCurrentUser,
    savingCustomerInitialInfo,
    loading,
  } = props;
  return (
    <>
      {loading && <Loading></Loading>}
      <HomeScreenHeader
        pageSelector={pageSelector}
        setPageSelector={setPageSelector}
        addCustomerFormNumber={addCustomerFormNumber}
        setAddCustomerFormNumber={setAddCustomerFormNumber}
        setCurrentUser={setCurrentUser}
      ></HomeScreenHeader>
      <Outlet></Outlet>
      <HomeScreenFooter
        pageSelector={pageSelector}
        setPageSelector={setPageSelector}
        setAddCustomerFormNumber={setAddCustomerFormNumber}
        addCustomerFormNumber={addCustomerFormNumber}
        savingCustomerInitialInfo={savingCustomerInitialInfo}
      ></HomeScreenFooter>
    </>
  );
};
