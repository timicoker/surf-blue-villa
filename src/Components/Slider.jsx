import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
  render() {
    const settings = {
      fade: true,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 700,
      stopOnHover: true,
      centerMode: true,
      adaptiveHeight: true
    };
    return (
      <div className="black-back">
        <section className="add-padding sliver-view-port">
          <div className="slider">
            <Slider {...settings}>
              <div className="slide center">
                <img className="slide" src="/images/slider/1.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/2.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/3.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/4.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/5.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/6.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/7.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/8.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img className="slide" src="/images/slider/9.jpg" alt={'pic'} />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/10.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/11.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/12.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/13.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/14.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/15.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/16.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/17.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/18.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/19.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/20.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/21.jpg"
                  alt={'pic'}
                />
              </div>
              <div className="slide center">
                <img
                  className="slide"
                  src="/images/slider/22.jpg"
                  alt={'pic'}
                />
              </div>
            </Slider>
          </div>
        </section>
      </div>
    );
  }
}

export default Carousel;
