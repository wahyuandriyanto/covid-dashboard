import React from "react";

function Nav() {
  return (
    <div className="dashboard__nav">
      <div className="dashboard__nav-logo">
        <img src="/dist/img/logo.svg" alt="logo"/>
      </div>
      <div className="dashboard__nav-full">
        <img src="/dist/img/fullscreen.svg" alt="fullscreen"/>
      </div>
    </div>
  );
}

export default Nav;
