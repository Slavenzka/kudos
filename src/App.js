// common
import React from 'react';
// components
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Home from "Pages/Home/Home";
// packages
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
