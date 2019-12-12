import React, { Fragment, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import Styles from './components/Styles'
import StyleDetail from './components/StyleDetail'

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/styles" component={Styles} />
        <Route path="/style/:id" component={StyleDetail} />
        <Route exact path="/" component={Styles} />
      </Switch>
    </Fragment>
  )
}

export default Routes
