import React, { useState } from "react";
import Theme from "./theme";

export default function Header() {
  const [theme, setTheme] = useState(false);
  return (
    <header>
      <div className="left-nav-side">
        <div className="logo">
          <span className="main-logo">
            <img
              src={
                !theme
                  ? process.env.PUBLIC_URL + "/black-logo.png"
                  : process.env.PUBLIC_URL + "/white-logo.png"
              }
              alt="viral nation"
            />
          </span>
          <span className="rest-logo">iral Nation</span>
        </div>
      </div>
      <div className="right-nav-side">
        <Theme theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}
