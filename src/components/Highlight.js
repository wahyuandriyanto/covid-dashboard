import React from "react";
import { Component } from "react";

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://api.kawalcorona.com/indonesia/")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ data: result });
      });
  }
  render() {
    const { data } = this.state;
    return data.map((total) => (
      <div class="highlight">
        <div class="highlight__flag">
          <img src="dist/img/indonesia.png" />
        </div>
        <div class="highlight__total">
          <div class="highlight__total-number">{total.positif}</div>
          <div class="highlight__total-status">Positif</div>
        </div>
        <div class="highlight__detail">
          <div class="highlight__detail-content">
            <div class="content-text">
              <div class="content-text__number">
                {parseInt(total.positif.split(",").join("")) -
                  parseInt(total.sembuh.split(",").join("")) -
                  parseInt(total.meninggal.split(",").join(""))}
              </div>
              <div class="content-text__status">Perawatan</div>
            </div>
            <div class="content-text">
              <div class="content-text__number">{total.sembuh}</div>
              <div class="content-text__status">Sembuh</div>
            </div>
            <div class="content-text">
              <div class="content-text__number">{total.meninggal}</div>
              <div class="content-text__status">Meninggal</div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}

export default Highlight;
