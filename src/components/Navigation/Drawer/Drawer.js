import React, { Component } from 'react';
import classes from './Drawer.module.css';
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
  {to: '/', label: 'Главная', exact: true},
  {to: '/calc', label: 'Калькулятор', exact: false},
  {to: '/tech', label: 'Техноблоки', exact: false}
];

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index} style={{marginTop: 20 }}>
          <NavLink style={{marginLeft: 25, fontSize: 30}}
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >{link.label}</NavLink>
            {/* <p style={{
                marginLeft: 35,
                fontSize: 25
            }}>{link.label}</p> */}
        </li>
      );
    });
  }

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;