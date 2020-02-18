import React, { Component } from 'react';
import css from './Header.module.scss'
import {withRouter} from "react-router-dom";

class Header extends Component {
  render () {
    console.log(this.props.history);
    return (
      <header className={css.header}>
        <h1 className={css.title}>
          Тестовое задание
        </h1>
      </header>
    )
  }
}

export default withRouter(Header);
