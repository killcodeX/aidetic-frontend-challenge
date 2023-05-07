import React from "react";
import Search from "../../Search Profile";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="toolbar-component">
          <Search />
          <div className="create-profile-btn" role="button">
            <i className="ri-user-add-fill"></i>
            Search
          </div>
          <div className="display-type">
          <span><i className="ri-align-justify"></i></span>
            <span><i className="ri-list-check"></i></span>
          </div>
        </div>
      </div>
    </main>
  );
}
