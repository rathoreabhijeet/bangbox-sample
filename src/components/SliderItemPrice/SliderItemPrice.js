import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

if (process.env.WEBPACK) {
  require('./SliderItemPrice.scss'); // eslint-disable-line global-require
}

export class SliderItemPrice extends Component {
  static propTypes = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="SliderItemPrice">
        {this.props.price}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(SliderItemPrice);
