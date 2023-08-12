import React from "react";

import "./css/secondForm.css";

export const SecondAddCustomerForm = () => {
  return (
    <div id="firstAddCustomerForm">
      <section id="firstAndLastName">
        <section className="customerAddFormElmAlighn">
          <label>Texture</label>
          <select id="texture" className="customerAddFormInput">
            <option>Select</option>
            <option value="fine">Fine</option>
            <option value="coarse">Coarse</option>
            <option value="average">Average</option>
          </select>
        </section>
        <section className="customerAddFormElmAlighn">
          <label>Condition</label>
          <select id="condition" className="customerAddFormInput">
            <option>Select</option>
            <option value="Dry">Dry</option>
            <option value="Oily">Oily</option>
            <option value="Normal">Normal</option>
          </select>
        </section>
      </section>

      <section className="customerAddFormElmAlighn">
        <label>Natural Form</label>
        <select id="naturalForm" className="customerAddFormInput">
          <option>Select</option>
          <option value="Curly">Curly</option>
          <option value="Straight">Straight</option>
          <option value="Wavy">Wavy</option>
        </select>
      </section>

      <section id="firstAndLastName">
        <section className="customerAddFormElmAlighn">
          <label>Level</label>
          <input type="text" className="customerAddFormInput"></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label>Tone</label>
          <input type="text" className="customerAddFormInput"></input>
        </section>
      </section>

      <section id="firstAndLastName">
        <section className="customerAddFormElmAlighn">
          <label>Front</label>
          <input type="number" className="customerAddFormInput"></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label>Back</label>
          <input type="number" className="customerAddFormInput"></input>
        </section>
      </section>

      <section id="secondFormCheckBox">
        <section
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.getElementsByTagName("input")[0].checked = true;
          }}
        >
          <input type="checkbox" />
          <label>Perm</label>
        </section>

        <section
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.getElementsByTagName("input")[0].checked = true;
          }}
        >
          <input type="checkbox" />
          <label>Semi</label>
        </section>

        <section
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.getElementsByTagName("input")[0].checked = true;
          }}
        >
          <input type="checkbox" />
          <label>Highlighted</label>
        </section>
        <section
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.getElementsByTagName("input")[0].checked = true;
          }}
        >
          <input type="checkbox" />
          <label>Relaxer</label>
        </section>
        <section
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.getElementsByTagName("input")[0].checked = true;
          }}
        >
          <input type="checkbox" />
          <label>Tint</label>
        </section>
        <section
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.getElementsByTagName("input")[0].checked = true;
          }}
        >
          <input type="checkbox" />
          <label>Bleach</label>
        </section>
      </section>

      <section id="birthday" className="customerAddFormElmAlighn">
        <label>Date</label>
        <input type="date" className="customerAddFormInput"></input>
      </section>

      <section id="birthday" className="customerAddFormElmAlighn">
        <label>Result</label>
        <input type="text" className="customerAddFormInput"></input>
      </section>
    </div>
  );
};
