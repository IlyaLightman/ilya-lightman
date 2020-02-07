import React, { Component } from 'react';
import './MainPage.scss';

// import Button from '../../components/UI/Button/Button';
import Description from '../../components/Description/Description'
import LinkLine from '../../components/LinkLine/LinkLine'

class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <div className='Mainer'>
        <h1>Ilya Lightman</h1>
        </div>
          
        <Description text="Привет! Привет. Привет!" />
        <div style={{
          justifyContent: 'center'
        }}>
        
        </div>
        <LinkLine />
        <h1>Ещё раз привет... </h1>
      </div>
    );
  }
}

export default MainPage;
