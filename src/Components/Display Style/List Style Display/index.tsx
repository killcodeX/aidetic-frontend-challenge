import React from "react";
import { data } from "../../../Mock Data/data";

export default function ListDisplay() {
  return (
    <div className="row">
      <div className="col">
        <table className="list-display">
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Name</th>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "15%" }}>Email</th>
              <th style={{ width: "50%" }}>Description</th>
              <th style={{ width: "10%", textAlign: "right" }}>
                <i className="ri-settings-3-fill"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="mb-4" key={item.id}>
                  <td>
                    <div className="list-profile-details">
                      <div className="profile">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="list-profile-name">{item.name}</div>
                      {!item.verfied ? (
                        <img
                          className="verified-badge"
                          src={process.env.PUBLIC_URL + "/verified.png"}
                          alt="verified"
                        />
                      ) : null}
                    </div>
                  </td>
                  <td>
                    <div className="list-profile-id">{item.id}</div>
                  </td>
                  <td>
                    <div className="list-profile-email">{item.email}</div>
                  </td>
                  <td>
                    <div className="list-profile-description">
                      {item.description}
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div className="list-profile-action">
                      <i className="ri-more-2-fill"></i>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
