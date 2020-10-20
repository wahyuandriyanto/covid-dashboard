import React from "react";
import Nav from "../../components/Nav";
import LastUpdate from "../../components/LastUpdate";
import Highlight from "../../components/Highlight";
import Chart from "../../components/Chart";
import Province from "../../components/Province";

function Dashboard () {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="dashboard">
      <Nav />
      <div className="dashboard__body">
        <div className="title">Indonesia Coronavirus Live Updates</div>
        <LastUpdate />
        <Highlight />
        <div className="detail-case">
          <div className="detail-case__title">Riwayat Kasus</div>
          <Chart />
        </div>
        <Province />
      </div>
      <div className="up">
        <div className="rounded" onClick={scrollTop}>
          <img src="dist/img/up.svg" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
