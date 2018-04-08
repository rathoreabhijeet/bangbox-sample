import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Slider from '../Slider/Slider';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./HomePage.scss'); // eslint-disable-line global-require
}

export class HomePage extends Component {
  gallery = [
    {
      photo: 'model1',
      title: 'What a day ! ',
      price: '$3.99'
    },
    {
      photo: 'model2',
      title: 'Stairway to heaven! ',
      price: '$3.49'
    },
    {
      photo: 'model3',
      title: 'Look at the stars! ',
      price: '$2.99'
    },
    {
      photo: 'model4',
      title: 'To infinity ! ',
      price: '$5.99'
    },
    {
      photo: 'model5',
      title: 'Dazed and confused! ',
      price: '$1.99'
    },
    {
      photo: 'model6',
      title: 'Black magic woman ',
      price: '$10.99'
    },
    {
      photo: 'model7',
      title: 'Purple Haze ! ',
      price: '$4.99'
    },
    {
      photo: 'model8',
      title: 'Whole lotta love ! ',
      price: '$2.99'
    }
  ]
  static propTypes = {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="homepage flex flex-1 light">
        <Header />
        <Content />
        <Slider photos={this.gallery}>CONTENT</Slider>

        {/*

           */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts = [], isFetching = false, lastUpdated } = state;
  return {
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(HomePage);
