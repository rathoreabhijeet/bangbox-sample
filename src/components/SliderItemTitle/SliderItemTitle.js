import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

if (process.env.WEBPACK) {
  require('./SliderItemTitle.scss'); // eslint-disable-line global-require
}

export class SliderItemTitle extends Component {
  static propTypes = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="SliderItemTitle">
        {this.props.title}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(SliderItemTitle);
