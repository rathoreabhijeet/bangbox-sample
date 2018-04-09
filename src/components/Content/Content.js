import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Content.scss'); // eslint-disable-line global-require
}

export class Content extends Component {
  static propTypes = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={'flex flex-1 full-bg content-bg'} style={{'background-image':'url(../../assets/'+this.props.photo+'.jpg)'}}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Content);
