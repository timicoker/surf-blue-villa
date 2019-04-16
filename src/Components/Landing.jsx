import React, { Component } from 'react';
import $ from 'jquery';

const scrollToBooking = e => {
  e.preventDefault();
  $('html,body').animate(
    {
      scrollTop: $('#Booking').offset().top
    },
    2000
  );
};

class Landing extends Component {
  render() {
    const handleShow = e => {
      e.preventDefault();
      this.refs.Booking.scrollIntoView({ block: 'end', behavior: 'smooth' });
    };
    return (
      <div>
        <header>
          <nav>
            <h2>
              {/* <a href="#" id="logo">
                LOGO
              </a> */}
            </h2>
            <button className="nav-button fa fa-bars" />
            <div />
          </nav>
          <div className="center">
            <h1 className="alex-brush">Surf Blue</h1>
            <span id="asterisk">*</span>
            <p>vacation with us</p>
            <button
              className="home-button ms-btn ms-yellow ms-rounded"
              onClick={() =>
                this.refs.Booking.scrollIntoView({
                  block: 'end',
                  behavior: 'smooth'
                })
              }
              style={{
                width: '250',
                height: '60',
                margin: '0',
                fontSize: '20',
                borderColor: '$lightbrown',
                borderRadius: '2px'
              }}
            >
              Book
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default Landing;
