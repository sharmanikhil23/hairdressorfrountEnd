import React from "react";
import { MdSettings } from "react-icons/md";
import { BsPeopleFill, BsPlusLg } from "react-icons/bs";

//css
import "./css/Footer.css";

type pageSelector = {
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
};

export const HomeScreenFooter = (props: pageSelector) => {
  const { pageSelector, setPageSelector } = props;
  const animatingAddingPage = () => {};
  return (
    <>
      {pageSelector.addNew === true ? (
        <AddScreenFooter></AddScreenFooter>
      ) : (
        <div id="beforeFooterStart">
          <div id="addIconBefore">
            <BsPlusLg
              id="addIcon"
              onClick={(e) => {
                e.preventDefault();
                animatingAddingPage();
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
const AddScreenFooter = () => {
  return (
    <div id="addScreenFooter">
      <div className="applicationWidth">
        <div id="addScreenFooterBackBtn" className="addScreenFooterBtn">
          Back
        </div>
        <div id="addScreenFooterNextBtn" className="addScreenFooterBtn">
          Next
        </div>
      </div>
    </div>
  );
};
