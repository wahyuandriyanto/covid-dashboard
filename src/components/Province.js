import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDataCovidProv } from "../api";
import { NumberFormat } from "../helper";
import { covidProvSelector } from "../redux/selector/selector";

function Province() {
  const data = useSelector(covidProvSelector);
  useEffect(() => {
    getDataCovidProv();
  }, []);

  return (
    <div className="detail-province">
      <div className="detail-province__title">
        <div className="text-title">Kasus di Indonesia</div>
      </div>
      {data.map((total) => (
        <div className="detail-province__list">
          <Link to={`/provinsi/${total.key}`}>
            <div className="detail-province__list-data">
              <div class="data-province">{total.key}</div>
              <div class="data-covid">
                <div class="data-covid__detail">
                  <div class="data-covid__detail-number">
                    {NumberFormat(total.jumlah_kasus)}
                  </div>
                  <div class="data-covid__detail-status">Terkonfirmasi</div>
                </div>
                <div class="data-covid__detail">
                  <div class="data-covid__detail-number">
                    {NumberFormat(total.jumlah_sembuh)}
                  </div>
                  <div class="data-covid__detail-status">Sembuh</div>
                </div>
                <div class="data-covid__detail">
                  <div class="data-covid__detail-number">
                    {NumberFormat(total.jumlah_meninggal)}
                  </div>
                  <div class="data-covid__detail-status">Meninggal</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Province;
