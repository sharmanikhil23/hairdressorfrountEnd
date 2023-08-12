import React, { useState } from "react";
import { HomeScreenHeader } from "./homeScreenComponents/header/header";
import { HomeScreenFooter } from "./homeScreenComponents/footer/footer";
import { CustomerArea } from "../clients/clients";
import { Setting } from "../settings/setting";

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

  return (
    <>
      {
        <>
          <HomeScreenHeader
            pageSelector={pageSelector}
            setPageSelector={setPageSelector}
          ></HomeScreenHeader>
          {pageSelector.addNew && <AddCustomers></AddCustomers>}
          {pageSelector.customers && <CustomerArea></CustomerArea>}
          {pageSelector.setting && <Setting></Setting>}
          <HomeScreenFooter
            pageSelector={pageSelector}
            setPageSelector={setPageSelector}
          ></HomeScreenFooter>
        </>
      }
    </>
  );
};

// type pageSelector = {
//   pageSelector: {
//     addNew: boolean;
//     setting: boolean;
//     customers: boolean;
//   };
//   setPageSelector: React.Dispatch<
//     React.SetStateAction<{
//       addNew: boolean;
//       setting: boolean;
//       customers: boolean;
//     }>
//   >;
// };

// type pageSelector1 = {
//   addNew: boolean;
//   setting: boolean;
//   customers: boolean;
// };
// const AddNewItems = (props: pageSelector) => {
//   const { setPageSelector } = props;
//   return (
//     <div id="add">
//       <h1>Hello World</h1>

//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           setPageSelector((current: pageSelector1) => {
//             let temp = {
//               addNew: false,
//               setting: false,
//               customers: true,
//             };
//             return temp;
//           });
//         }}
//       >
//         goBack
//       </button>
//     </div>
//   );
// };
