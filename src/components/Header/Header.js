import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Md from 'react-icons/lib/md';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Header.scss'); // eslint-disable-line global-require
}

export class Header extends Component {
  static propTypes = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="flex flex-1 header padding-20 align-items-center">
        <div className="flex-1 text-center menuIcon">
          <Md.MdArrowBack />
        </div>
        <div className="flex-1 text-center">VIDEOS</div>
        <div className="flex-1 text-center">BIO</div>
        <div className="flex-1 text-center">GALLERY</div>
        <div className="flex-1 text-center">EXTRA</div>
        <div className="flex-7 text-right ">MY ACCOUNT</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Header);
