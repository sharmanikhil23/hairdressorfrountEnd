import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { RiPlayListAddLine } from "react-icons/ri";

let data = {
  userInfo: {
    firstName: "Nikhil",
    lastName: "Sharma",
    birthday: "2023-08-02",
    email: "nikhil23062000@icloud.com",
    hPhone: "12368871480",
    wPhone: "23123131313",
  },
  userInitialAnalysis: {
    texture: "Fine",
    condition: "Oily",
    naturalForm: "Curly",
    level: "1",
    tone: "2",
    front: "1",
    back: "22",
    bleach: false,
    highlighted: false,
    perm: false,
    relaxer: false,
    semi: true,
    tint: true,
    date: "2023-08-22",
    result: "Good",
  },
};

export const ParticularClient = () => {
  return (
    <>
      <div id="particularClientHeader">
        <div className="applicationWidth">
          <Link to={"/"}>
            <RxCross1></RxCross1>
          </Link>
          <h1>{`${data.userInfo.firstName}`}</h1>
          <Link to={"/"}>
            <RiPlayListAddLine></RiPlayListAddLine>
          </Link>
        </div>
      </div>

      <div id="particularClientAreaStart">
        <div className="applicationWidth particularClientArea">
          <section className="particularElm">
            <div className="particularClientTitle">
              <p>Service History</p>
              <button>View All</button>
            </div>
            <div></div>
          </section>
          <section className="particularElm">
            <div className="particularClientTitle">
              <p className="particularClientElmTitle">Personal Info</p>
              <button>Edit</button>
            </div>
            <div className="particularClientDetails">
              <div className="particularClientElm">
                <p className="particularClientElmTitle">First Name</p>
                <p className="particularClientElmValue">{`${data.userInfo.firstName}`}</p>
              </div>

              <div className="particularClientElm">
                <p className="particularClientElmTitle">Last Name</p>
                <p className="particularClientElmValue">{`${data.userInfo.lastName}`}</p>
              </div>

              <div className="particularClientElm">
                <p className="particularClientElmTitle">Birthday</p>
                <p className="particularClientElmValue">{`${data.userInfo.birthday}`}</p>
              </div>

              <div className="particularClientElm">
                <p className="particularClientElmTitle">Email</p>
                <p className="particularClientElmValue">{`${data.userInfo.email}`}</p>
              </div>

              <div className="particularClientElm">
                <p className="particularClientElmTitle">Home Phone</p>
                <p className="particularClientElmValue">{`${data.userInfo.hPhone}`}</p>
              </div>
              <div className="particularClientElm">
                <p className="particularClientElmTitle">Home Phone</p>
                <p className="particularClientElmValue">{`${data.userInfo.wPhone}`}</p>
              </div>
            </div>
          </section>

          <section className="particularElm">
            <div className="particularClientTitle">
              <p className="particularClientElmTitle">Hair Analysis</p>
              <button>Edit</button>
            </div>
            <div className="particularClientDetails">
              <div className="particularClientElm">
                <p className="particularClientElmTitle">Texture</p>
                <p className="particularClientElmValue">{`${data.userInitialAnalysis.texture}`}</p>
              </div>
              <div className="particularClientElm">
                <p className="particularClientElmTitle">Condition</p>
                <p className="particularClientElmValue">{`${data.userInitialAnalysis.condition}`}</p>
              </div>
              <div className="particularClientElm">
                <p className="particularClientElmTitle">Natural Form</p>
                <p className="particularClientElmValue">{`${data.userInitialAnalysis.naturalForm}`}</p>
              </div>
              <div className="particularClientElm">
                <p className="particularClientElmTitle">Natural Color</p>
                <p className="particularClientElmValue">
                  Level: {`${data.userInitialAnalysis.level}`} - Tone:
                  {`${data.userInitialAnalysis.tone}`}
                </p>
              </div>

              <div className="particularClientElm">
                <p className="particularClientElmTitle">Amount of Gray</p>
                <p className="particularClientElmValue">
                  Front: {`${data.userInitialAnalysis.front}`} - Back:
                  {`${data.userInitialAnalysis.back}`}
                </p>
              </div>

              <div className="particularClientElm">
                <p className="particularClientElmTitle">Existing Treatment</p>
                <p className="particularClientElmValue">
                  {data.userInitialAnalysis.perm && "Perm "}
                  {data.userInitialAnalysis.highlighted && "Highlighted "}
                  {data.userInitialAnalysis.perm && "Perm "}
                  {data.userInitialAnalysis.relaxer && "Relaxer "}
                  {data.userInitialAnalysis.semi && "Semi "}
                  {data.userInitialAnalysis.tint && "Tint"}
                </p>
              </div>
              <div className="particularClientElm">
                <p className="particularClientElmTitle">Date</p>
                <p className="particularClientElmValue">{`${data.userInitialAnalysis.date}`}</p>
              </div>
              <div className="particularClientElm">
                <p className="particularClientElmTitle">Result</p>
                <p className="particularClientElmValue">{`${data.userInitialAnalysis.result}`}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div id="particularClientFooter">
        <div className="applicationWidth">
          <button id="particularClientFooterForm">Delete Customer</button>
        </div>
      </div>
    </>
  );
};
