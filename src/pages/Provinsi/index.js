import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDataCovidProv } from "../../api";
import Nav from "../../components/Nav";
import { NumberFormat } from "../../helper";
import { covidProvSelector } from "../../redux/selector/selector";

function Provinsi() {
  const data = useSelector(covidProvSelector);
  let { id } = useParams();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    getDataCovidProv();
  }, []);

  const listFilter = data.filter((list) => {
    if (list.key.toLowerCase().search(id.toLowerCase()) !== -1) return list;
  });

  return (
    <>
      {listFilter.map((list) => (
        <div className="dashboard">
          <div className="dashboard__nav">
            <div className="dashboard__nav-logo c-pointer" onClick={() => window.history.back()}>
              <img src="/dist/img/left-arrow.svg" />
            </div>
            <div className="dashboard__nav-title">{list.key}</div>
            <div className="dashboard__nav-full">
              <img src="/dist/img/fullscreen.svg" />
            </div>
          </div>
          <div className="dashboard__body">
            <div className="detail-provinsi">
              <div className="sub-title">Kasus di {list.key}</div>
              <div className="row">
                <div className="box positif">
                  <div className="box-content">
                    <div className="box-content__jml">
                      {list.jumlah_kasus}
                      <div className="box-content__penambahan">
                        + {list.penambahan.positif}
                      </div>
                    </div>
                    <div className="box-content__title">Positif</div>
                  </div>
                </div>
                <div className="box rawat">
                  <div className="box-content">
                    <div className="box-content__jml">
                      {list.jumlah_dirawat}
                    </div>
                    <div className="box-content__title">Dirawat</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="box sembuh">
                  <div className="box-content">
                    <div className="box-content__jml">
                      {list.jumlah_sembuh}
                      <div className="box-content__penambahan">
                        + {NumberFormat(list.penambahan.sembuh)}
                      </div>
                    </div>
                    <div className="box-content__title">Sembuh</div>
                  </div>
                </div>
                <div className="box meninggal">
                  <div className="box-content">
                    <div className="box-content__jml">
                      {list.jumlah_meninggal}
                      <div className="box-content__penambahan">
                        + {NumberFormat(list.penambahan.meninggal)}
                      </div>
                    </div>
                    <div className="box-content__title">Meninggal</div>
                  </div>
                </div>
              </div>
              <div className="kelompok-wrapper">
                <div className="sub-title">Jenis Kelamin</div>
                {list.jenis_kelamin.map((jk) => (
                  <table>
                    <thead>
                      <tr>
                        <th>{jk.key}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{NumberFormat(jk.doc_count)}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
              <div className="kelompok-wrapper">
                <div className="sub-title">Kelompok Usia</div>
                <table>
                  <thead>
                    <tr>
                      <th>Usia</th>
                      <th>Jumlah Kasus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.kelompok_umur.map((umur) => (
                      <tr>
                        <td>{umur.key}</td>
                        <td>{NumberFormat(umur.doc_count)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="up">
            <div className="rounded" onClick={scrollTop}>
              <img src="/dist/img/up.svg" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Provinsi;
