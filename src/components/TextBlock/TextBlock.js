import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

if (process.env.WEBPACK) {
  require('./TextBlock.scss'); // eslint-disable-line global-require
}

export class TextBlock extends Component {
  static propTypes = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="TextBlock">
        {this.props.content}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(TextBlock);
