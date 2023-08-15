import React from "react";

import { userInitialHair } from "../../addCustomer";

import "./css/secondForm.css";

type prop = {
  userHair: userInitialHair;
  setUserHair: React.Dispatch<React.SetStateAction<userInitialHair>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SecondAddCustomerForm = (props: prop) => {
  let { setUserHair } = props;
  return (
    <div id="firstAddCustomerForm">
      <section id="textureAndCondition">
        <section className="customerAddFormElmAlighn">
          <label htmlFor="texture">Texture</label>
          <select
            id="texture"
            className="customerAddFormInput"
            name="texture"
            onChange={(e) => {
              e.preventDefault();
              setUserHair((current) => {
                return { ...current, texture: e.target.value };
              });
            }}
          >
            <option>Select</option>
            <option value="Fine">Fine</option>
            <option value="Coarse">Coarse</option>
            <option value="Average">Average</option>
          </select>
        </section>

        <section className="customerAddFormElmAlighn">
          <label htmlFor="condition">Condition</label>
          <select
            id="condition"
            className="customerAddFormInput"
            onChange={(e) => {
              e.preventDefault();
              setUserHair((current) => {
                return { ...current, condition: e.target.value };
              });
            }}
          >
            <option>Select</option>
            <option value="Dry">Dry</option>
            <option value="Oily">Oily</option>
            <option value="Normal">Normal</option>
          </select>
        </section>
      </section>

      <section className="customerAddFormElmAlighn">
        <label htmlFor="naturalForm">Natural Form</label>
        <select
          id="naturalForm"
          className="customerAddFormInput"
          onChange={(e) => {
            e.preventDefault();
            setUserHair((current) => {
              return { ...current, naturalForm: e.target.value };
            });
          }}
        >
          <option>Select</option>
          <option value="Curly">Curly</option>
          <option value="Straight">Straight</option>
          <option value="Wavy">Wavy</option>
        </select>
      </section>

      <section id="levelAndTone">
        <section className="customerAddFormElmAlighn">
          <label htmlFor="level">Level</label>
          <input
            type="number"
            className="customerAddFormInput"
            id="level"
            name="level"
            onChange={(e) => {
              e.preventDefault();
              setUserHair((current) => {
                return { ...current, level: e.target.value };
              });
            }}
          ></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label htmlFor="tone">Tone</label>
          <input
            type="number"
            className="customerAddFormInput"
            id="tone"
            onChange={(e) => {
              e.preventDefault();
              setUserHair((current) => {
                return { ...current, tone: e.target.value };
              });
            }}
          ></input>
        </section>
      </section>

      <section id="frontAndBack">
        <section className="customerAddFormElmAlighn">
          <label htmlFor="front">Front</label>
          <input
            type="number"
            className="customerAddFormInput"
            id="front"
            onChange={(e) => {
              e.preventDefault();
              setUserHair((current) => {
                return { ...current, front: e.target.value };
              });
            }}
          ></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label htmlFor="back">Back</label>
          <input
            type="number"
            className="customerAddFormInput"
            id="back"
            onChange={(e) => {
              e.preventDefault();
              setUserHair((current) => {
                return { ...current, back: e.target.value };
              });
            }}
          ></input>
        </section>
      </section>

      <section id="secondFormCheckBox">
        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="perm"
              name="perm"
              onChange={(e) => {
                setUserHair((current) => {
                  return { ...current, perm: e.target.checked };
                });
              }}
            />
            <label className="form-check-label" htmlFor="perm">
              Perm
            </label>
          </div>
        </div>

        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="semi"
              name="semi"
              onChange={(e) => {
                setUserHair((current) => {
                  return { ...current, semi: e.target.checked };
                });
              }}
            />
            <label className="form-check-label" htmlFor="semi">
              Semi
            </label>
          </div>
        </div>

        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="highlighted"
              name="highlighted"
              onChange={(e) => {
                setUserHair((current) => {
                  return { ...current, highlighted: e.target.checked };
                });
              }}
            />
            <label className="form-check-label" htmlFor="highlighted">
              Highlighted
            </label>
          </div>
        </div>

        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="relaxer"
              name="relaxer"
              onChange={(e) => {
                setUserHair((current) => {
                  return { ...current, relaxer: e.target.checked };
                });
              }}
            />
            <label className="form-check-label" htmlFor="relaxer">
              Relaxer
            </label>
          </div>
        </div>

        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="tint"
              name="tint"
              onChange={(e) => {
                setUserHair((current) => {
                  return { ...current, tint: e.target.checked };
                });
              }}
            />
            <label className="form-check-label" htmlFor="tint">
              Tint
            </label>
          </div>
        </div>

        <div className="form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="bleach"
              name="bleach"
              onChange={(e) => {
                setUserHair((current) => {
                  return { ...current, bleach: e.target.checked };
                });
              }}
            />
            <label className="form-check-label" htmlFor="bleach">
              Bleach
            </label>
          </div>
        </div>
      </section>

      <section id="birthday" className="customerAddFormElmAlighn">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="customerAddFormInput"
          id="initialDate"
          onChange={(e) => {
            setUserHair((current) => {
              return { ...current, date: e.target.value };
            });
          }}
        ></input>
      </section>

      <section id="birthday" className="customerAddFormElmAlighn">
        <label htmlFor="initialResult">Result</label>
        <input
          type="text"
          className="customerAddFormInput"
          id="initialResult"
          onChange={(e) => {
            setUserHair((current) => {
              return { ...current, result: e.target.value };
            });
          }}
        ></input>
      </section>
    </div>
  );
};
