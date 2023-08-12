import React from "react";

import "./css/firstForm.css";

export const FirstAddCustomerForm = () => {
  return (
    <div id="firstAddCustomerForm">
      <section id="firstAndLastName">
        <section className="customerAddFormElmAlighn">
          <label>Last Name</label>
          <input type="text" className="customerAddFormInput"></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label>First Name</label>
          <input type="text" className="customerAddFormInput"></input>
        </section>
      </section>
      <section id="birthday" className="customerAddFormElmAlighn">
        <label>Birthday</label>
        <input type="date" className="customerAddFormInput"></input>
      </section>
      <section id="email" className="customerAddFormElmAlighn">
        <label>Email</label>
        <input type="email" className="customerAddFormInput"></input>
      </section>
      <section id="multiplePhn">
        <section className="customerAddFormElmAlighn">
          <label>Phone (Home)</label>
          <input type="tel" className="customerAddFormInput"></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label>Phone (Work)</label>
          <input type="tel" className="customerAddFormInput"></input>
        </section>
      </section>
    </div>
  );
};
