import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import SliderItem from '../SliderItem/SliderItem';
import SliderTitle from '../SliderTitle/SliderTitle';
import * as Md from 'react-icons/lib/md';
import Velocity from 'velocity-animate';
// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Slider.scss'); // eslint-disable-line global-require
}

export class Slider extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      screenWidth : window.innerWidth || window.clientWidth || window.offsetWidth
    };
  }

  componentDidMount() {
    console.log(this.props.photos);
  }
  slideLeft() {
    console.log(this.state.screenWidth);
    Velocity(this.refs.block,
      'scroll', {
        axis: "x",
        container: this.refs.block,
        duration: 1000,
        offset: this.state.screenWidth,
        easing: 'ease-in-out'
      })
      .then(e => console.log('animation complete'))
  }

  slideRight() {
    console.log(this.state.screenWidth);

    Velocity(this.refs.block,
      'scroll', {
        axis: "x",
        container: this.refs.block,
        duration: 1000,
        offset: -(this.state.screenWidth),
        easing: 'ease-in-out'
      })
      .then(e => console.log('animation complete'))
  }

  render() {
    return (
      <div className="slider">
        <div className="left-button-style" >

          <Md.MdKeyboardArrowLeft className="large-font-size" onClick={(e) => { e.preventDefault(); this.slideRight() }} />
        </div>
        <div className="absolute top-0">
          <SliderTitle text={this.props.header} />
        </div>
        <div className="hrz-scroll padding-left-35" ref="block">
          {this.props.photos.map(photo => (
            <SliderItem photo={photo} />
          ))}
        </div>
        <div className="right-button-style">
          <Md.MdKeyboardArrowRight className="large-font-size" onClick={(e) => { e.preventDefault(); this.slideLeft() }}/>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Slider);
