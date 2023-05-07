import React, { useState } from "react";
import Theme from "./theme";

export default function Header() {
  const [theme, setTheme] = useState(false);
  return (
    <header>
      <div className="left-nav-side">
        <div className="logo">
          <span className="main-logo">V</span>
          <span className="rest-logo">iral Nation</span>
        </div>
      </div>
      <div className="right-nav-side">
        <Theme theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}
