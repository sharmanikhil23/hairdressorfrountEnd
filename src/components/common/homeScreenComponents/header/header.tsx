import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import "./css/Header.css";

import { Dispatch, SetStateAction } from "react";

type searching = {
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
};

type pageSelector = {
  pageSelector: {
    addNew: boolean;
    setting: boolean;
    customers: boolean;
  };
  setPageSelector: Dispatch<
    SetStateAction<{ addNew: boolean; setting: boolean; customers: boolean }>
  >;
};

export const HomeScreenHeader = (props: pageSelector) => {
  const { pageSelector, setPageSelector } = props;
  const [search, setSearch] = useState<boolean>(false);

  return (
    <>
      <div className="beforeHeaderStart">
        <div className="headerStart applicationWidth">
          {pageSelector.addNew === true ? (
            <AddingCustomer
              pageSelector={pageSelector}
              setPageSelector={setPageSelector}
            ></AddingCustomer>
          ) : pageSelector.setting === true ? (
            <Setting></Setting>
          ) : pageSelector.customers && search ? (
            <SearchBoxAndCancel
              search={search}
              setSearch={setSearch}
            ></SearchBoxAndCancel>
          ) : (
            <TitleAndSearch
              search={search}
              setSearch={setSearch}
            ></TitleAndSearch>
          )}
        </div>
      </div>
    </>
  );
};

const TitleAndSearch = (props: searching) => {
  const { search, setSearch } = props;
  return (
    <div id="titleAndSearch" className="applicationheader">
      <h1>Customers</h1>
      <AiOutlineSearch
        id="titleAndSearchIcon"
        onClick={(e) => {
          e.preventDefault();
          setSearch(!search);
        }}
      ></AiOutlineSearch>
    </div>
  );
};

const SearchBoxAndCancel = (props: searching) => {
  const { search, setSearch } = props;
  return (
    <div id="SearchBoxAndCancel" className="applicationheader">
      <section id="SearchBox">
        <AiOutlineSearch id="SearchBoxAndCancelIcon"></AiOutlineSearch>
        <input type="text" placeholder="Search"></input>
      </section>
      <h3
        onClick={(e) => {
          e.preventDefault();
          setSearch(!search);
        }}
        id="cancel"
      >
        Cancel
      </h3>
    </div>
  );
};

type pageSelector1 = {
  addNew: boolean;
  setting: boolean;
  customers: boolean;
};

const Setting = () => {
  return (
    <div className="applicationheader" id="settings">
      <h1>Account</h1>
    </div>
  );
};

const AddingCustomer = (props: pageSelector) => {
  const { setPageSelector } = props;
  return (
    <div id="addCustomerOrCancel" className="applicationheader">
      <section id="addCustomerOrCancelSection">
        <RxCross1
          onClick={(e) => {
            e.preventDefault();
            setPageSelector((current: pageSelector1) => {
              let temp = {
                addNew: false,
                setting: false,
                customers: true,
              };
              return temp;
            });
          }}
        ></RxCross1>
        <h1>Add New Customer</h1>
      </section>

      <section id="completed">
        <div id="completedFirst"></div>
        <div id="completedSecond"></div>
      </section>
    </div>
  );
};
