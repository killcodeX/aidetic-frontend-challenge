import React, { useState, useEffect } from "react";
import { Switch } from "antd";

export default function Theme() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  return (
    <div className="theme-change">
      <span className={!theme ? "theme-active" : ""}>
        <i className="ri-sun-line"></i>
      </span>
      <Switch checked={theme} onChange={() => setTheme(!theme)} />
      <span className={theme ? "theme-active" : ""}>
        <i className="ri-moon-line"></i>
      </span>
    </div>
  );
}
