import React, { useEffect } from "react";
import { Switch } from "antd";

interface themeProps {
  theme: boolean;
  setTheme: (value: boolean) => void;
}

export default function Theme({ theme, setTheme }: themeProps) {
  useEffect(() => {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (theme) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  return (
    <div className="theme-change">
      <span className="theme">
      {!theme ? (
          <i className="ri-sun-fill"></i>
        ) : (
          <i className="ri-sun-line"></i>
        )}
      </span>
      <Switch checked={theme} onChange={() => setTheme(!theme)} />
      <span className="theme">
        {theme ? (
          <i className="ri-moon-fill"></i>
        ) : (
          <i className="ri-moon-line"></i>
        )}
      </span>
    </div>
  );
}
