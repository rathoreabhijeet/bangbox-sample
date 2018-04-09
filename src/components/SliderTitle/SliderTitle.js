import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';

// import MdIconPack from 'react-icons/lib/md'
// import {MdArrowBack} from 'react-icons/lib/md/arrow-back';
import * as Md from 'react-icons/lib/md';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./SliderTitle.scss'); // eslint-disable-line global-require
}

export class SliderTitle extends Component {
  static propTypes = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="sliderTitle padding-left-35">
        <div className="title">{this.props.text}</div>
        {this.props.rightMenu && <div className="menu thin">All videos <Md.MdKeyboardArrowDown /></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(SliderTitle);
