import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import SliderItem from '../SliderItem/SliderItem';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./GalleryContent.scss'); // eslint-disable-line global-require
}

export class GalleryContent extends Component {
  static propTypes = {
  }

  componentDidMount() {
    console.log(this.props.photos);
  }

  render() {
    return (
      <div className="galleryContent">
        <div className="padding-left-50">
          {this.props.photos.map(photo => (
            <SliderItem photo={photo} type="vertical"/>
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

export default connect(mapStateToProps)(GalleryContent);
