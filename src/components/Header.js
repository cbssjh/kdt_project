import React from "react";
import bell from "../img/Frame-8.svg";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <div className="head">
        <div className="our-title">GOODJOB</div>
        <img src={bell} alt="알림" />
      </div>
    </div>
  );
}
