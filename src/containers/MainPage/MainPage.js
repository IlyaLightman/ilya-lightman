import React, { Component } from 'react';
import './MainPage.scss';

import Button from '../../components/UI/Button/Button';
import Description from '../../components/Description/Description'

class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <div className='Mainer'>
        <h1>Ilya Lightman</h1>
        </div>
          
        <Description text="Привет! Я - Илья" />
        <div style={{
          justifyContent: 'center'
        }}>
          <Button type='main'>Куда?</Button>
          <Button type='main'>Туда</Button>
          <Button type='main'>Так где?</Button>
        </div>
      </div>
    );
  }
}

export default MainPage;
