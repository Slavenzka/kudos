// common
import React, { Component } from 'react';
// components
import Header from 'containers/Header/Header'
import Footer from 'containers/Footer/Footer'
import Home from "Pages/Home/Home";
// packages
import { Switch, Route } from 'react-router-dom'
import Category from 'Pages/Category/Category'
// styles

class App extends Component {
  constructor (props) {
    super(props)
    this.catalogRef = null
    this.aboutRef = null
    this.manufacturersRef = null
    this.contactsRef = null

    this.setCatalogRef = element => {
      this.catalogRef = element
    }

    this.setAboutRef = element => {
      this.aboutRef = element
    }

    this.setManufacturersRef = element => {
      this.manufacturersRef = element
    }

    this.setContactsRef = element => {
      this.contactsRef = element
    }
  }

  componentDidMount () {
    this.setState({
      catalog: this.catalogRef,
      about: this.aboutRef,
      manufacturers: this.manufacturersRef,
      contacts: this.contactsRef
    })
  }

  state = {
    catalog: null,
    about: null,
    manufacturers: null,
    contacts: null
  }

  render () {
    return (
      <div
        className='siteWrapper'
        style={{
          backgroundImage: 'url("assets/images/lines.png")',
        }}
      >
        <Header
          catalog={this.state.catalog}
          about={this.state.about}
          manufacturers={this.state.manufacturers}
          contacts={this.state.contacts}
        />
        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <Home
                setCatalogRef={this.setCatalogRef}
                setAboutRef={this.setAboutRef}
                setManufacturersRef={this.setManufacturersRef}
                setContactsRef={this.setContactsRef}
              />
            )}
          />
          <Route
            path='/category'
            exact
            component={Category}
          />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
