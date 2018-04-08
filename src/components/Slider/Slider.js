import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import SliderItem from '../SliderItem/SliderItem';
import SliderTitle from '../SliderTitle/SliderTitle';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Slider.scss'); // eslint-disable-line global-require
}

export class Slider extends Component {
  static propTypes = {
  }

  componentDidMount() {
    console.log(this.props.photos);
  }

  render() {
    return (
      <div className="slider">
        <SliderTitle />
        <div className="hrz-scroll padding-left-35">
          {this.props.photos.map(photo => (
            <SliderItem photo={photo} />
          ))}
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
