import React, { Component } from "react";

class Province extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isToggle: true,
    };
    this.getProvince = this.getProvince.bind(this);
  }
  componentDidMount() {
    this.getProvince();
  }
  getProvince() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const urlIndo = "https://api.kawalcorona.com/indonesia/provinsi/";
    const urlGlobal = "https://api.kawalcorona.com"
    if (this.state.isToggle === true) {
      fetch(proxy + urlIndo)
        .then((response) => response.json())
        .then((result) => {
          this.setState({ data: result });
        });
    } else {
      fetch(proxy + urlGlobal)
        .then((response) => response.json())
        .then((result) => {
          this.setState({ data: result });
        });
    }

    this.setState((prevState) => ({
      isToggle: !prevState.isToggle,
    }));
  }

  render() {
    const { data } = this.state;
    if (this.state.isToggle === true) {
      return (
        <div className="detail-province">
          <div className="detail-province__title">
            <div className="text-title">Kasus di Dunia</div>
            <button className="btn-toggle" onClick={this.getProvince}>
              {this.state.isToggle ? "Kasus Indonesia" : "Kasus Dunia"}
            </button>
          </div>
          {data.map((total) => (
            <div className="detail-province__list">
              <div className="detail-province__list-data">
                <div class="data-province">
                  {total.attributes.Country_Region}
                </div>
                <div class="data-covid">
                  <div class="data-covid__detail">
                    <div class="data-covid__detail-number">
                      {total.attributes.Confirmed}
                    </div>
                    <div class="data-covid__detail-status">Terkonfirmasi</div>
                  </div>
                  <div class="data-covid__detail">
                    <div class="data-covid__detail-number">
                      {total.attributes.Recovered}
                    </div>
                    <div class="data-covid__detail-status">Sembuh</div>
                  </div>
                  <div class="data-covid__detail">
                    <div class="data-covid__detail-number">
                      {total.attributes.Deaths}
                    </div>
                    <div class="data-covid__detail-status">Meninggal</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="detail-province">
          <div className="detail-province__title">
            <div className="text-title">Kasus di Indonesia</div>
            <button className="btn-toggle" onClick={this.getProvince}>
              {this.state.isToggle ? "Kasus Indonesia" : "Kasus Dunia"}
            </button>
          </div>
          {data.map((total) => (
            <div className="detail-province__list">
              <div className="detail-province__list-data">
                <div class="data-province">{total.attributes.Provinsi}</div>
                <div class="data-covid">
                  <div class="data-covid__detail">
                    <div class="data-covid__detail-number">
                      {total.attributes.Kasus_Posi}
                    </div>
                    <div class="data-covid__detail-status">Terkonfirmasi</div>
                  </div>
                  <div class="data-covid__detail">
                    <div class="data-covid__detail-number">
                      {total.attributes.Kasus_Semb}
                    </div>
                    <div class="data-covid__detail-status">Sembuh</div>
                  </div>
                  <div class="data-covid__detail">
                    <div class="data-covid__detail-number">
                      {total.attributes.Kasus_Meni}
                    </div>
                    <div class="data-covid__detail-status">Meninggal</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Province;
