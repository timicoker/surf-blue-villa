import React, { Component } from "react";
import SimpleMap from "./Googlemap";
import axios from "axios";
const API_KEY = "1e90d005747d5d491d09b969b2b73da1";
//const URL = "api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=";
class Map extends Component {
  state = {
    temp: null,
    weather: "",
    humidity: null
  };

  async componentDidMount() {
    const api_call = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=19&lon=70&units=metric&APPID=${API_KEY}`
    );
    console.log(api_call);
    this.setState({
      temp: api_call.data.main.temp,
      humidity: api_call.data.main.humidity,
      weather: api_call.data.weather[0].description
    });
    console.log(api_call);
  }
  render() {
    const imageStyle = {
      width: "90px",
      height: "70px"
    };
    return (
      <div>
        <section className="add-flex reservation-section">
          <div className="center-text add-padding">
            <h1>
              <span className="custom-font alex-brush">The Dominican</span>
              <br />
            </h1>
            <h2>*</h2>
            <p>
              Located on the northen coast of the beautiful Dominican Republic,
              Surf Blue Caberete is minutes away from must-see Dominican sights.
              Experience world-class surfing at Playa Encuentro or Kiki Beach,
              both just down the road from Surf Blue. Looking to go hiking,
              mountain biking or swimming? El Choco National Park offers all of
              this and more in their massive 78 km topical park, only around the
              corner from Surf Blue Caberete.
            </p>
            <div className="card" style={{ paddingBottom: 200 }}>
              <div className="ms-card col-s-4 col-m-6">
                <div className="ms-pic">
                  <img
                    className="scale-up-center"
                    style={imageStyle}
                    src={"/images/icons/temperature-2.svg"}
                    alt="pic"
                  />
                </div>
                <div className="ms-title center">
                  <h5>
                    <a href="">Current Weather</a>
                  </h5>
                </div>
                <div className="ms-text ms-text-gray-font">
                  <p className="center"> {this.state.temp} celcuis</p>
                  <p className="text-center">
                    {" "}
                    {this.state.humidity} humidity{" "}
                  </p>
                  <p className="center"> With {this.state.weather} </p>
                </div>
              </div>
              <div className="ms-card col-s-4 col-m-6">
                <div className="ms-pic">
                  <img
                    className="scale-up-center"
                    style={imageStyle}
                    src={"/images/icons/placeholder.svg"}
                    alt="pic"
                  />
                </div>
                <div className="ms-title center">
                  <h5>
                    <a href="">Current Travel Times</a>
                  </h5>
                </div>
                <div className="ms-text ms-text-gray-font">
                  <p className="center"> 3 minutes to Playa Encuentro</p>
                  <p className="text-center">
                    {" "}
                    28 minutes to Puerto Plata airport{" "}
                  </p>
                  <p className="center">
                    {" "}
                    16 minutes to El Choco National Park{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SimpleMap />
          {/* <img
              src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo11.jpg"
              data-aos="fade-up"
              data-aos-delay="300"
              alt="pic"
            /> */}
        </section>
        <section className="footer-background center-h1">
          <h1 className="custom-h1">
            <span className="custom-font-white alex-brush">
              Book With Us Below!
            </span>
          </h1>
        </section>
      </div>
    );
  }
}

export default Map;
