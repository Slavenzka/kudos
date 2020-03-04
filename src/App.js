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
  state = {
    headerHeight: null
  }

  constructor() {
    super()
    this.headerRef = React.createRef()
  }

  render () {
    console.log(this.state.headerHeight)
    return (
      <div
        style={{
          paddingTop: `${this.state.headerHeight || 0}px`,
          backgroundImage: 'url("assets/images/lines.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom'
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
