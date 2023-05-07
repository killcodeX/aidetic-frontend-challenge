import React, { useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import ProfileDelete from "../Profile Delete";
import { data } from "../../../Mock Data/data";

const items: MenuProps["items"] = [
  {
    label: "Edit Profile",
    key: "1",
  },
  {
    label: "Remove Profile",
    key: "2",
  },
];

export default function ListDisplay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currId, setCurrId] = useState(0);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "2") {
      setIsModalOpen(!isModalOpen);
      //setCurrId();
    }
  };

  const handleProfileDelete = (id: number) => {
    console.log(id);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="row">
      <div className="col">
        <table className="list-display">
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Name</th>
              <th
                style={{
                  width: "10%",
                  paddingLeft: "30px",
                }}
              >
                ID
              </th>
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
                <>
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
                    <td
                      style={{
                        paddingLeft: "30px",
                      }}
                    >
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
                      <Dropdown
                        menu={{
                          items,
                          onClick,
                        }}
                      >
                        <div
                          className="list-profile-action"
                          onClick={(e) => setCurrId(item.id)}
                        >
                          <i className="ri-more-2-fill"></i>
                        </div>
                      </Dropdown>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <ProfileDelete
        id={currId}
        isModalOpen={isModalOpen}
        handleProfileDelete={handleProfileDelete}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
