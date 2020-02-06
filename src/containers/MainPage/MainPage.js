import React, { Component } from 'react';
import './MainPage.scss';

import Description from '../../components/Description/Description'

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="MainPage">
          <h1>Ilya Lightman</h1>
        </div>
        <Description text="Привет! Я - Илья" />
      </React.Fragment>
    );
  }
}

export default MainPage;
