import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="restaurant-info" />

          <div className="copyright">
            <p>
              <a href="https://www.booking.com/hotel/do/surf-blue-villa-cabarete.en-gb.html">
                {' '}
                Booking
              </a>
            </p>
            <p>
              <a href="https://www.booking.com/hotel/do/surf-blue-villa-cabarete.en-gb.html">
                {' '}
                Something else
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
