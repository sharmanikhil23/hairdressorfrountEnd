import React from "react";

import { user } from "../../addCustomer";

import "./css/firstForm.css";

type prop = {
  user: user;
  setUser: React.Dispatch<React.SetStateAction<user>>;
};

let todayDate = new Date().toISOString().split("T")[0];

export const FirstAddCustomerForm = (props: prop) => {
  let { user, setUser } = props;
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
              setUser((current: user): user => {
                let data = { ...current, lastName: e.target.value };
                return data;
              });
            }}
            value={user.lastName}
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
              setUser((current: user): user => {
                let data = { ...current, firstName: e.target.value };
                return data;
              });
            }}
            value={user.firstName}
          ></input>
        </section>
      </section>
      <section id="birthday" className="customerAddFormElmAlighn">
        <label htmlFor="birthday">Birthday</label>

        <input
          placeholder="yyyy-mm-dd"
          type="date"
          className="customerAddFormInput"
          id="birthday"
          name="birthday"
          max={todayDate}
          onChange={(e) => {
            setUser((current: user): user => {
              let data = { ...current, birthday: e.target.value };
              return data;
            });
          }}
          value={user.birthday}
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
            setUser((current: user): user => {
              let data = { ...current, email: e.target.value };
              return data;
            });
          }}
          value={user.email}
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
              setUser((current: user): user => {
                let data = { ...current, hPhone: e.target.value };
                return data;
              });
            }}
            value={user.hPhone}
          ></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label>Phone (Work)</label>
          <input
            type="tel"
            className="customerAddFormInput"
            value={user.wPhone}
          ></input>
        </section>
      </section>
    </div>
  );
};
