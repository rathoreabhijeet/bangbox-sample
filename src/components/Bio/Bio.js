import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meta from 'react-helmet';
import Header from '../Header/Header';
import Content from '../Content/Content';
import SliderTitle from '../SliderTitle/SliderTitle';
import TextBlock from '../TextBlock/TextBlock';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Bio.scss'); // eslint-disable-line global-require
}

export class Bio extends Component {
  
  description = "The structure consists of two glass-vaulted arcades intersecting in an octagon covering the street connecting Piazza del Duomo to Piazza della Scala. The street is covered by an arching glass and cast iron roof, a popular design for 19th-century arcades, such as the Burlington Arcade in London, which was the prototype for larger glazed shopping arcades, beginning with the Saint-Hubert Gallery in Brussels (opened in 1847), the Passazh in St Petersburg (opened in 1848), the Galleria Umberto I in Naples (opened in 1890) and the Budapest Galleria."
  static propTypes = {
  }

  componentDidMount() {
    console.log(this.props.photos);
  }

  render() {
    return (
      <div className="homepage flex flex-1 light">
        <Header />
        <Content photo="model4"/>
        <div className="gallery-title w-50">
          <SliderTitle text="Galleria De Milano" rightMenu={false} />
          <div className="padding-left-35">
            <TextBlock content={this.description} />
          </div>
          <SliderTitle text="Galleria De Italia" rightMenu={false} />
          <div className="padding-left-35">
            <TextBlock content={this.description} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Bio);
