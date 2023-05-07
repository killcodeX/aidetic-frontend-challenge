import React, { useState } from "react";
import CreatProfile from "../../Components/Create Profile";
import { CardDisplay, ListDisplay } from "../../Components/Display Style";
import Search from "../../Components/Search Profile";

export default function Home() {
  const [displayStyle, setDisplayStyle] = useState("card");
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <main>
      <div className="container">
        <div className="toolbar-component">
          <Search />
          <div
            className="create-profile-btn"
            role="button"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <i className="ri-user-add-fill"></i>
            Create Profile
          </div>
          <div className="display-type">
            <span
              style={{
                backgroundColor:
                  displayStyle === "card"
                    ? "rgba(64, 118, 184, 0.15)"
                    : "inherit",
              }}
              onClick={() => setDisplayStyle("card")}
            >
              <i
                style={{
                  color: displayStyle === "card" ? "#1677ff" : "inherit",
                }}
                className="ri-align-justify"
              ></i>
            </span>
            <span
              style={{
                backgroundColor:
                  displayStyle === "list"
                    ? "rgba(64, 118, 184, 0.15)"
                    : "inherit",
              }}
              onClick={() => setDisplayStyle("list")}
            >
              <i
                style={{
                  color: displayStyle === "list" ? "#1677ff" : "inherit",
                }}
                className="ri-list-check"
              ></i>
            </span>
          </div>
        </div>
        <div className="display-type-component">
          {displayStyle === "card" ? <CardDisplay /> : <ListDisplay />}
        </div>
      </div>
      <CreatProfile
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </main>
  );
}
