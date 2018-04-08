import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import SliderItemPrice from '../SliderItemPrice/SliderItemPrice';
import SliderItemTitle from '../SliderItemTitle/SliderItemTitle';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./SliderItem.scss'); // eslint-disable-line global-require
}

export class SliderItem extends Component {
  static propTypes = {
  }

  componentDidMount() {
    console.log(this.props.photo);
  }

  render() {
    return (
      <div className={'sliderItem full-bg'} style={{ 'background-image': `url(../../assets/${this.props.photo.photo}.jpg)` }}>
        <SliderItemPrice price={this.props.photo.price} />
        <SliderItemTitle title={this.props.photo.title} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(SliderItem);
