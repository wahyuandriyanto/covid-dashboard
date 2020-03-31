import React, { Component } from "react";

class Province extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("https://api.kawalcorona.com/indonesia/provinsi/")
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="detail-province">
        <div className="detail-province__title">Kasus per Provinsi</div>
        {data.map(total => (
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

export default Province;
