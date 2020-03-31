import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import LastUpdate from "./components/LastUpdate";
import Highlight from "./components/Highlight.js";
import Chart from "./components/Chart";
import Province from "./components/Province.js";

function App() {
  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard__body">
        <div className="title">Indonesia Coronavirus Live Updates</div>
        <LastUpdate />
        <Highlight />
        <div className="detail-case">
          <div className="detail-case__title">Penambahan Kasus per Hari</div>
          <Chart />
        </div>
        <Province />
      </div>
    </div>
  );
}

export default App;
