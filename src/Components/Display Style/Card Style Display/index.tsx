import React from "react";
import { data } from "../../../Mock Data/data";

export default function CardDisplay() {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <div key={item.id} className="col-sm-3 mb-5">
            <div className="card">
              <div className="card-upper">
                <div className="profile">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="profile-details">
                  <div className="d-flex flex-row align-items-center">
                    <div className="profile-name px-1">{item.name}</div>
                    {!item.verfied ? (
                      <img
                        className="verified-badge"
                        src={process.env.PUBLIC_URL + "/verified.png"}
                        alt="verified"
                      />
                    ) : null}
                  </div>
                  <div className="profile-email">{item.email}</div>
                </div>
                <div className="profile-edit">
                  <i className="ri-more-2-fill"></i>
                </div>
              </div>
              <div className="card-lower">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
