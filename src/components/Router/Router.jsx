import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Javascript from '../Javascript/Javascript'
import Css from '../Css/Css'
import Html from '../Html/Html'

export default function Router() {
  return (
  <Switch>
    <Route exact path="/css" component={Css} />
    <Route exact path="/html" component={Html} />
    <Route exact path="/javascript" component={Javascript} />
    <Route exact path="/" component={Home} />
  </Switch>
  )
}
