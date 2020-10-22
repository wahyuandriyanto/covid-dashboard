import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getDataCovidIndo } from "../api";
import { NumberFormat } from "../helper";
import {
  indoCovidLoadingSelector,
  indoCovidSelector,
} from "../redux/selector/selector";


function Highlight() {
  const total = useSelector(indoCovidSelector);
  const loading = useSelector(indoCovidLoadingSelector);
  useEffect(() => {
    getDataCovidIndo();
  }, []);
  return (
    <>
      <div className="highlight">
        <div className="highlight__flag">
          <img src="dist/img/indonesia.png" />
        </div>
        {loading ? (
          <div className="loader-wrapper">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="highlight__total">
              <div className="highlight__total-number">
                {NumberFormat(total && total.jumlah_positif)}
              </div>
              <div className="highlight__total-status">Positif</div>
            </div>
            <div className="highlight__detail">
              <div className="highlight__detail-content">
                <div className="content-text">
                  <div className="content-text__number">
                    {NumberFormat(total && total.jumlah_dirawat)}
                  </div>
                  <div className="content-text__status">Perawatan</div>
                </div>
                <div className="content-text">
                  <div className="content-text__number">
                    {NumberFormat(total && total.jumlah_sembuh)}
                  </div>
                  <div className="content-text__status">Sembuh</div>
                </div>
                <div className="content-text">
                  <div className="content-text__number">
                    {NumberFormat(total && total.jumlah_meninggal)}
                  </div>
                  <div className="content-text__status">Meninggal</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Highlight;
