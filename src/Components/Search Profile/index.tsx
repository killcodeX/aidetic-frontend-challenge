import React, { useState } from "react";

export default function Search() {
  const [profile, setProfile] = useState("");
  return (
    <input
      type="text"
      placeholder="Search"
      value={profile}
      onChange={(e) => setProfile(e.target.value)}
    />
  );
}
