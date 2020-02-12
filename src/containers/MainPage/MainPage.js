import React, { Component } from 'react';
import './MainPage.scss';
import {NavLink} from 'react-router-dom'
import Radium from 'radium'

// import Button from '../../components/UI/Button/Button';
import Description from '../../components/Description/Description'
import LinkLine from '../../components/LinkLine/LinkLine'
import Technologies from '../../components/Technologies/Technologies'

const links = [
  {to: '/calc', label: 'Калькулятор', exact: false},
  {to: '/tech', label: 'Техноблоки', exact: false}
];

const RadNavLink = Radium(NavLink)

class MainPage extends Component {
  render() {
    console.log('я зарендерился')
    return (
      <div className='MainPage'>
        <div className='Mainer'>
          <h1>Ilya Lightman</h1>
          <div style={{display: 'flex'}}>
            <RadNavLink style={{
              textDecoration: 'none',
              margin: 20,
              marginLeft: 15, marginRight: 'auto', color: 'white',
              ':hover' : {
                color: 'black', cursor: 'pointer'
            }}}
              to={links[0].to}
            >предыдущая</RadNavLink>
            <NavLink style={{
              textDecoration: 'none',
              margin: 20,
              marginRight: 15, marginLeft: 'auto', color: 'black',
              ':hover' : {
                color: 'white', cursor: 'pointer'
              }}}
              to={links[1].to}
              >следующая</NavLink>
          </div>
        </div>
          
        <Description text="Привет! Привет. Привет!" />
        
        <LinkLine />

        <Technologies />

      </div>
    );
  }
}

export default Radium(MainPage);
