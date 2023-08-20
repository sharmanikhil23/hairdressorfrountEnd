import React, { Dispatch, SetStateAction } from "react";
import { MdSettings } from "react-icons/md";
import { BsPeopleFill, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

//css
import "./css/Footer.css";

export type savingCustomerInitialInfo = {
  savingCustomerInitialInfo: () => void;
};

interface setAddCustomerFormNumber {
  addCustomerFormNumber: number;
  setAddCustomerFormNumber: Dispatch<SetStateAction<number>>;
}

interface pageSelector {
  pageSelector: {
    addNew: boolean;
    setting: boolean;
    customers: boolean;
  };
  setPageSelector: React.Dispatch<
    React.SetStateAction<{
      addNew: boolean;
      setting: boolean;
      customers: boolean;
    }>
  >;
}

type props = setAddCustomerFormNumber &
  pageSelector &
  savingCustomerInitialInfo;

export const HomeScreenFooter = (props: props) => {
  const {
    pageSelector,
    setPageSelector,
    setAddCustomerFormNumber,
    addCustomerFormNumber,
    savingCustomerInitialInfo,
  } = props;

  return (
    <>
      {pageSelector.addNew === true ? (
        <AddScreenFooter
          setAddCustomerFormNumber={setAddCustomerFormNumber}
          addCustomerFormNumber={addCustomerFormNumber}
          savingCustomerInitialInfo={savingCustomerInitialInfo}
        ></AddScreenFooter>
      ) : (
        <div id="beforeFooterStart">
          <div id="addIconBefore">
            <Link to={"/addCustomer"}>
              <BsPlusLg
                id="addIcon"
                onClick={(e) => {
                  setPageSelector((current) => {
                    let temp = {
                      addNew: true,
                      setting: false,
                      customers: false,
                    };
                    return temp;
                  });
                }}
              ></BsPlusLg>
            </Link>
          </div>
          <div id="footerCurve">
            <div className="applicationWidth" id="footerStart">
              <div id="allActionButtonsExceptAdd">
                <button>
                  <BsPeopleFill
                    className="actionIcons"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageSelector((current) => {
                        let temp = {
                          addNew: false,
                          setting: false,
                          customers: true,
                        };
                        return temp;
                      });
                    }}
                  ></BsPeopleFill>
                  <h2>Customer</h2>
                </button>

                <button>
                  <MdSettings
                    className="actionIcons"
                    onClick={(e) => {
                      e.preventDefault();
                      setPageSelector((current) => {
                        let temp = {
                          addNew: false,
                          setting: true,
                          customers: false,
                        };
                        return temp;
                      });
                    }}
                  ></MdSettings>
                  <h2>Setting</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const AddScreenFooter = (
  prop: setAddCustomerFormNumber & savingCustomerInitialInfo
) => {
  return (
    <div id="addScreenFooter">
      <div className="applicationWidth">
        <div
          id="addScreenFooterBackBtn"
          className="addScreenFooterBtn"
          onClick={(e) => {
            e.preventDefault();
            prop.setAddCustomerFormNumber(1);
            let elm: HTMLElement | null = document.getElementById(
              "addScreenFooterBackBtn"
            );

            if (elm == null) {
              return;
            }
            elm.style.display = "none";
            elm = document.getElementById("completedSecond");
            if (elm == null) {
              return;
            }
            elm.style.backgroundColor = "#eff0f3";
          }}
        >
          Back
        </div>
        <div
          id="addScreenFooterNextBtn"
          className="addScreenFooterBtn"
          onClick={(e) => {
            e.preventDefault();
            if (prop.addCustomerFormNumber === 2) {
              prop.savingCustomerInitialInfo();
            } else {
              prop.setAddCustomerFormNumber(2);
              let elm: HTMLElement | null = document.getElementById(
                "addScreenFooterBackBtn"
              );

              if (elm == null) {
                return;
              }
              elm.style.display = "block";

              elm = document.getElementById("completedSecond");
              if (elm == null) {
                return;
              }
              elm.style.backgroundColor = "#faed5d";
            }
          }}
        >
          {prop.addCustomerFormNumber === 1 ? "Next" : "Save"}
        </div>
      </div>
    </div>
  );
};
