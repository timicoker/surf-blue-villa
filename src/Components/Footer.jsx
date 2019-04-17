import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="restaurant-info" />

          <div className="copyright">
            <p>
              <a href="https://www.booking.com/hotel/do/surf-blue-villa-cabarete.en-gb.html">
                {" "}
                Booking.com
              </a>
            </p>
            <p>
              <a href="https://www.bedandbreakfast.eu/bed-and-breakfast/cabarete/surf-blue-cabarete/4866977/">
                {" "}
                Bed and Breakfast
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
