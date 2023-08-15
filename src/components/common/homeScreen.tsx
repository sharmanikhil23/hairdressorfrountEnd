import React, { useState } from "react";
import { HomeScreenHeader } from "./homeScreenComponents/header/header";
import { HomeScreenFooter } from "./homeScreenComponents/footer/footer";
import { CustomerArea } from "../clients/clients";
import { Setting } from "../settings/setting";
import { Loading } from "../loading/loading";

//importing css
import "./css/HomeScreen.css";
import { AddCustomers } from "../addingCustomers/addCustomer";

export const HomeScreen = () => {
  const [pageSelector, setPageSelector] = useState<{
    addNew: boolean;
    setting: boolean;
    customers: boolean;
  }>({
    addNew: false,
    setting: false,
    customers: true,
  });

  const [addCustomerFormNumber, setAddCustomerFormNumber] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {
        <>
          {loading && <Loading></Loading>}
          <HomeScreenHeader
            pageSelector={pageSelector}
            setPageSelector={setPageSelector}
            addCustomerFormNumber={addCustomerFormNumber}
            setAddCustomerFormNumber={setAddCustomerFormNumber}
          ></HomeScreenHeader>
          {pageSelector.addNew && (
            <AddCustomers
              addCustomerFormNumber={addCustomerFormNumber}
              setLoading={setLoading}
            ></AddCustomers>
          )}
          {pageSelector.customers && <CustomerArea></CustomerArea>}
          {pageSelector.setting && <Setting></Setting>}
          <HomeScreenFooter
            pageSelector={pageSelector}
            setPageSelector={setPageSelector}
            setAddCustomerFormNumber={setAddCustomerFormNumber}
            addCustomerFormNumber={addCustomerFormNumber}
          ></HomeScreenFooter>
        </>
      }
    </>
  );
};
