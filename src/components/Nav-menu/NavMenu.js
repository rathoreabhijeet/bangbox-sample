import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Meta from 'react-helmet';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Slider from '../Slider/Slider';
import * as Md from 'react-icons/lib/md';
// import Velocity from 'velocity-animate';
// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./NavMenu.scss'); // eslint-disable-line global-require
}

export class NavMenu extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
  }

  componentDidMount() {

  }
  scrollWin() {
    // window.scrollBy(100, 0);
  }
  showDropdown(){
    this.setState({
      dropdown: !this.state.dropdown
    })
  }
  hideDropdown(){
    this.setState({
      dropdown: false
    })
  }
    

  render() {
    return (
      <div className="flex-4">
        <nav>
          <ul>
            <div className="flex-1 text-center pointer"><Link to="/">VIDEOS</Link></div>
            <div className="flex-1 text-center pointer"><Link to="/bio">BIO</Link></div>
            <div className="flex-1 text-center pointer"><Link to="/gallery">GALLERY</Link></div>
            <div className="flex-1 text-center pointer"><Link to="/">EXTRA</Link></div>
          </ul>
          <div className={`dropdown ${this.state.dropdown ? 'show': ''}`}>
            <button className="dropbtn" onClick={()=>{this.showDropdown()}}>Browse<Md.MdKeyboardArrowDown /></button>
            <div className="dropdown-content">
              {/* <Md.MdKeyboardArrowDown />   */}
              <a href=""><Link to="/">VIDEOS</Link></a>
              <a href=""><Link to="/bio">BIO</Link></a>
              <a href=""><Link to="/gallery">GALLERY</Link></a>
              <a href=""><Link to="/">EXTRA</Link></a>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps)(NavMenu);
