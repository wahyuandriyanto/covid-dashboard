import React from "react";
import { Line } from "react-chartjs-2";

function getDate() {
  var tempDate = new Date();
  var date =
    tempDate.getFullYear() +
    "-" +
    (tempDate.getMonth() + 1) +
    "-" +
    tempDate.getDate();
  const currDate = date;
  return <p>{currDate}</p>;
}

const url =
  "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?f=json&where=Tanggal%3Ctimestamp%20%27" +
  getDate().props.children +
  "%2017%3A00%3A00%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Tanggal%20asc&outSR=102100&resultOffset=0&resultRecordCount=2000&cacheHint=true";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    };
  }
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        const res = result.features;
        let tgl = [];
        let jmlKasus = [];
        let kasusBaru = [];
        let sembuh = [];
        let meninggal = [];
        res.forEach(element => {
          tgl.push(
            new Date(element.attributes.Tanggal).toLocaleString(["ban", "id"], {
              month: "short",
              day: "numeric"
            })
          );
          jmlKasus.push(element.attributes.Jumlah_Kasus_Kumulatif);
          kasusBaru.push(element.attributes.Jumlah_Kasus_Baru_per_Hari);
          sembuh.push(element.attributes.Jumlah_Kasus_Sembuh_per_Hari);
          meninggal.push(element.attributes.Jumlah_Kasus_Meninggal_per_Hari);
        });
        this.setState({
          Data: {
            labels: tgl,
            datasets: [
              // {
              //   label: "Jml Kasus",
              //   data: jmlKasus,
              //   fill: false,
              //   lineTension: 0.1,
              //   borderColor: "#ee3535",
              //   borderCapStyle: "butt",
              //   borderDash: [],
              //   borderDashOffset: 0.0,
              //   pointBorderColor: "#ee3535",
              //   pointBackgroundColor: "#ee3535",
              //   pointBorderWidth: 6,
              //   pointHoverRadius: 4,
              //   pointHoverBackgroundColor: "#ee3535",
              //   pointHoverBorderColor: "#ee3535",
              //   pointHoverBorderWidth: 2,
              //   pointRadius: 1
              // },
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
                pointRadius: 1
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
                pointRadius: 1
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
                pointRadius: 1
              }
            ]
          }
        });
      });
  }
  render() {
    return (
      <div>
        <Line
          data={this.state.Data}
          options={{
            legend: {
              display: false,
              position: "top"
            },
            tooltips: {
              mode: "index",
              intersect: false,
              backgroundColor: "#fff",
              titleFontColor: "#2b2b2b",
              bodyFontColor: "#2b2b2b",
              position: "nearest"
            },
            hover: {
              mode: "index",
              intersect: false
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
