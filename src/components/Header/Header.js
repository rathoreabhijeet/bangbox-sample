import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Md from 'react-icons/lib/md';
import { NavMenu} from '../Nav-menu/NavMenu'
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
      <div className="flex flex-1 header padding-20 align-items-center z-1">
        <div className="flex-1 text-center menuIcon">
          {/* <Md.MdArrowBack /> */}
          <img className="logo" src="./../assets/bb.png"/>
        </div>
        <NavMenu />
        <div className="flex-7 text-right margin-right-10 pointer">MY ACCOUNT</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Header);
