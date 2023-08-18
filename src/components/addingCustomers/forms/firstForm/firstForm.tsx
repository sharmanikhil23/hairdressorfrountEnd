import React from "react";

import "./css/firstForm.css";

import { currentUser } from "../../../tsDataTypes/addingUser";
import { currentUserType } from "../../addCustomer";

let todayDate = new Date().toISOString().split("T")[0];

export const FirstAddCustomerForm = (props: currentUserType) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div id="firstAddCustomerForm">
      <section id="firstAndLastName">
        <section className="customerAddFormElmAlighn">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="customerAddFormInput"
            id="lastName"
            name="lastName"
            onChange={(e) => {
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInfo: {
                    ...currentUser.userInfo,
                    lastName: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInfo.lastName}
          ></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="customerAddFormInput"
            id="firstName"
            name="firstName"
            onChange={(e) => {
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInfo: {
                    ...currentUser.userInfo,
                    firstName: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInfo.firstName}
          ></input>
        </section>
      </section>
      <section id="birthday" className="customerAddFormElmAlighn">
        <label htmlFor="birthday">Birthday</label>

        <input
          required
          placeholder="yyyy-mm-dd"
          type="date"
          className="customerAddFormInput"
          id="birthday"
          name="birthday"
          max={todayDate}
          onChange={(e) => {
            setCurrentUser((current: currentUser): currentUser => {
              let temp = {
                ...currentUser,
                userInfo: {
                  ...currentUser.userInfo,
                  birthday: e.target.value,
                },
              };
              return temp;
            });
          }}
          value={currentUser.userInfo.birthday}
        ></input>
      </section>
      <section id="email" className="customerAddFormElmAlighn">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="customerAddFormInput"
          id="email"
          name="email"
          onChange={(e) => {
            setCurrentUser((current: currentUser): currentUser => {
              let temp = {
                ...currentUser,
                userInfo: {
                  ...currentUser.userInfo,
                  email: e.target.value,
                },
              };
              return temp;
            });
          }}
          value={currentUser.userInfo.email}
        ></input>
      </section>
      <section id="multiplePhn">
        <section className="customerAddFormElmAlighn">
          <label htmlFor="hPhone">Phone (Home)</label>
          <input
            type="tel"
            className="customerAddFormInput"
            id="hPhone"
            name="hPhone"
            onChange={(e) => {
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInfo: {
                    ...currentUser.userInfo,
                    hPhone: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInfo.hPhone}
          ></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label>Phone (Work)</label>
          <input
            type="tel"
            className="customerAddFormInput"
            onChange={(e) => {
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInfo: {
                    ...currentUser.userInfo,
                    wPhone: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInfo.wPhone}
          ></input>
        </section>
      </section>
    </div>
  );
};
