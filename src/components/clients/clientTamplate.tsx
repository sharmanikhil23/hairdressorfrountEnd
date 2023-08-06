import React from "react";
import { data } from "../data";

type Data = {
  fName: string;
  lName: string;
  price: number;
  visits: number;
  lastUpdated: string;
};

export const Clients = () => {
  return (
    <>
      {data.map((clients: Data) => {
        let { fName, lName, price, visits, lastUpdated } = clients;
        return (
          <div className="clients">
            <section className="titleAndPrice">
              <h3 className="titleAndPriceCustomerName">
                {`${fName} ${lName}`}
              </h3>
              <h3>${`${price}`}</h3>
            </section>
            <section className="lastUpdateAndTotalVisit">
              <p className="lastUpdated">Last updated: {`${lastUpdated}`}</p>
              <p>{`${visits}`} visits</p>
            </section>
            <section className="viewDetails">View details</section>
          </div>
        );
      })}
    </>
  );
};
