import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { covidHarianSelector } from "../redux/selector/selector";
import { Line } from "react-chartjs-2";

function Chart() {
  const [data, setData] = useState({});
  const total = useSelector(covidHarianSelector);

  const insertData = () => {
    let tgl = [];
    let kasusBaru = [];
    let sembuh = [];
    let meninggal = [];
    total.forEach((result) => {
      tgl.push(
        new Date(result.key).toLocaleString(["ban", "id"], {
          month: "short",
          day: "numeric",
        })
      );
      kasusBaru.push(result.jumlah_positif.value);
      sembuh.push(result.jumlah_sembuh.value);
      meninggal.push(result.jumlah_meninggal.value);
    });
    setData({
      labels: tgl,
      datasets: [
        {
          label: "Kasus Baru",
          data: kasusBaru,
          fill: false,
          lineTension: 0.1,
          borderColor: "#ee3535",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderColor: "#ee3535",
          pointBackgroundColor: "#ee3535",
          pointBorderWidth: 6,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#ee3535",
          pointHoverBorderColor: "#ee3535",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
        },
        {
          label: "Sembuh",
          data: sembuh,
          fill: false,
          lineTension: 0.1,
          borderColor: "#fed136",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderColor: "#fed136",
          pointBackgroundColor: "#fed136",
          pointBorderWidth: 6,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#fed136",
          pointHoverBorderColor: "#fed136",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
        },
        {
          label: "Meninggal",
          data: meninggal,
          fill: false,
          lineTension: 0.1,
          borderColor: "#322e2f",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderColor: "#322e2f",
          pointBackgroundColor: "#322e2f",
          pointBorderWidth: 6,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#322e2f",
          pointHoverBorderColor: "#322e2f",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
        },
      ],
    });
  };

 
  // listData();

  useEffect(() => {
    insertData();
  }, [total]);

  return (
    <div>
      <Line
        data={data}
        options={{
          legend: {
            display: false,
            position: "top",
          },
          tooltips: {
            mode: "index",
            intersect: false,
            backgroundColor: "#fff",
            titleFontColor: "#2b2b2b",
            bodyFontColor: "#2b2b2b",
            position: "nearest",
          },
          hover: {
            mode: "index",
            intersect: false,
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Chart;
