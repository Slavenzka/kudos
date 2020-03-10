// common
import React, { Component } from 'react';
// components
import Header from 'containers/Header/Header'
import Footer from 'containers/Footer/Footer'
import Home from "Pages/Home/Home";
// packages
import { Switch, Route } from 'react-router-dom'
// styles

class App extends Component {
  render () {
    return (
      <div
        className='siteWrapper'
        style={{
          backgroundImage: 'url("assets/images/lines.png")',
        }}
      >
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
