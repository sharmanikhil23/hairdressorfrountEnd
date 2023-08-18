import React from "react";

import { currentUser } from "../../../tsDataTypes/addingUser";
import { currentUserType } from "../../addCustomer";

import "./css/secondForm.css";

type prop = currentUserType;

export const SecondAddCustomerForm = (props: prop) => {
  let { currentUser, setCurrentUser } = props;
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
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInitialAnalysis: {
                    ...currentUser.userInitialAnalysis,
                    texture: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInitialAnalysis.texture}
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
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInitialAnalysis: {
                    ...currentUser.userInitialAnalysis,
                    condition: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInitialAnalysis.condition}
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
            setCurrentUser((current: currentUser): currentUser => {
              let temp = {
                ...currentUser,
                userInitialAnalysis: {
                  ...currentUser.userInitialAnalysis,
                  naturalForm: e.target.value,
                },
              };
              return temp;
            });
          }}
          value={currentUser.userInitialAnalysis.naturalForm}
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
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInitialAnalysis: {
                    ...currentUser.userInitialAnalysis,
                    level: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInitialAnalysis.level}
          ></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label htmlFor="tone">Tone</label>
          <input
            type="number"
            className="customerAddFormInput"
            id="tone"
            onChange={(e) => {
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInitialAnalysis: {
                    ...currentUser.userInitialAnalysis,
                    tone: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInitialAnalysis.tone}
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
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInitialAnalysis: {
                    ...currentUser.userInitialAnalysis,
                    front: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInitialAnalysis.front}
          ></input>
        </section>
        <section className="customerAddFormElmAlighn">
          <label htmlFor="back">Back</label>
          <input
            type="number"
            className="customerAddFormInput"
            id="back"
            onChange={(e) => {
              setCurrentUser((current: currentUser): currentUser => {
                let temp = {
                  ...currentUser,
                  userInitialAnalysis: {
                    ...currentUser.userInitialAnalysis,
                    back: e.target.value,
                  },
                };
                return temp;
              });
            }}
            value={currentUser.userInitialAnalysis.back}
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
                setCurrentUser((current: currentUser): currentUser => {
                  let temp = {
                    ...currentUser,
                    userInitialAnalysis: {
                      ...currentUser.userInitialAnalysis,
                      perm: e.target.checked,
                    },
                  };
                  return temp;
                });
              }}
              checked={currentUser.userInitialAnalysis.perm}
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
                setCurrentUser((current: currentUser): currentUser => {
                  let temp = {
                    ...currentUser,
                    userInitialAnalysis: {
                      ...currentUser.userInitialAnalysis,
                      semi: e.target.checked,
                    },
                  };
                  return temp;
                });
              }}
              checked={currentUser.userInitialAnalysis.semi}
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
                setCurrentUser((current: currentUser): currentUser => {
                  let temp = {
                    ...currentUser,
                    userInitialAnalysis: {
                      ...currentUser.userInitialAnalysis,
                      highlighted: e.target.checked,
                    },
                  };
                  return temp;
                });
              }}
              checked={currentUser.userInitialAnalysis.highlighted}
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
                setCurrentUser((current: currentUser): currentUser => {
                  let temp = {
                    ...currentUser,
                    userInitialAnalysis: {
                      ...currentUser.userInitialAnalysis,
                      relaxer: e.target.checked,
                    },
                  };
                  return temp;
                });
              }}
              checked={currentUser.userInitialAnalysis.relaxer}
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
                setCurrentUser((current: currentUser): currentUser => {
                  let temp = {
                    ...currentUser,
                    userInitialAnalysis: {
                      ...currentUser.userInitialAnalysis,
                      tint: e.target.checked,
                    },
                  };
                  return temp;
                });
              }}
              checked={currentUser.userInitialAnalysis.tint}
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
                setCurrentUser((current: currentUser): currentUser => {
                  let temp = {
                    ...currentUser,
                    userInitialAnalysis: {
                      ...currentUser.userInitialAnalysis,
                      bleach: e.target.checked,
                    },
                  };
                  return temp;
                });
              }}
              checked={currentUser.userInitialAnalysis.bleach}
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
            setCurrentUser((current: currentUser): currentUser => {
              let temp = {
                ...currentUser,
                userInitialAnalysis: {
                  ...currentUser.userInitialAnalysis,
                  date: e.target.value,
                },
              };
              return temp;
            });
          }}
          value={currentUser.userInitialAnalysis.date}
        ></input>
      </section>

      <section id="birthday" className="customerAddFormElmAlighn">
        <label htmlFor="initialResult">Result</label>
        <input
          type="text"
          className="customerAddFormInput"
          id="initialResult"
          onChange={(e) => {
            setCurrentUser((current: currentUser): currentUser => {
              let temp = {
                ...currentUser,
                userInitialAnalysis: {
                  ...currentUser.userInitialAnalysis,
                  result: e.target.value,
                },
              };
              return temp;
            });
          }}
          value={currentUser.userInitialAnalysis.result}
        ></input>
      </section>
    </div>
  );
};
