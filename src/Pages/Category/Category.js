import React, { Component } from 'react'
import css from './Category.module.scss'
import SideNavigation from 'containers/SideNavigation/SideNavigation'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import Subcategories from 'containers/Subcategories/Subcategories'
import Container from 'components/common/Grid/Container'
import withScrollBackBtn from 'hoc/withScrollBackBtn/withScrollBackBtn'
import { Route } from 'react-router-dom'

class Category extends Component {
  constructor (props) {
    super(props)

    this.breadcrumbs = [
      {
        text: 'Главная',
        url: '/'
      },
      {
        text: 'Силовые и распределительные трансформаторы'
      }
    ]
  }

  render () {
    return (
      <main>
        <Breadcrumbs data={this.breadcrumbs} />
        <Container className={css.wrapper}>
          <aside className={css.nav}>
            <SideNavigation />
          </aside>
          <section className={css.content}>
            <Route exact path='/:category' component={Subcategories} />
            <Route exact path='/:category/:product' render={() => <div>Product page</div>} />
          </section>
        </Container>
      </main>
    )
  }
}

export default withScrollBackBtn(Category)
