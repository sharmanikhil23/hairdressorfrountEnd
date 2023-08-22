import React from "react";

import { allUser } from "./clients";
import { currentUser } from "../tsDataTypes/addingUser";
import { Link } from "react-router-dom";

import "./css/ParticularClient.css";

export const Clients = (prop: allUser) => {
  return (
    <>
      {prop.allUser.map((clients: currentUser, index: number) => {
        let { firstName = "user", lastName = "user" } = clients.userInfo;
        let visits = 0;
        let price = 0;
        let { date = new Date().toISOString().split("T")[0] } =
          clients.userInitialAnalysis;
        return (
          <Link className="clients" key={index} to={`/client/${index}`}>
            <section className="titleAndPrice">
              <h3 className="titleAndPriceCustomerName">
                {`${firstName} ${lastName}`}
              </h3>
              <h3>${`${price}`}</h3>
            </section>
            <section className="lastUpdateAndTotalVisit">
              <p className="lastUpdated">
                Last updated:{" "}
                {date === ""
                  ? (date = new Date().toISOString().split("T")[0])
                  : date}
              </p>
              <p>{`${visits}`} visits</p>
            </section>
            <section className="viewDetails">View details</section>
          </Link>
        );
      })}
    </>
  );
};
